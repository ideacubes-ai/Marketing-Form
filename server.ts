import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const SYSTEM_INSTRUCTION = `You are a premium B2B Growth Marketing Consultant acting on behalf of the Lead Consultant. Your goal is to guide the leadership team of the Triumph Media Events Wing through an interactive briefing conversation to map out their digital media lead-generation strategy.

Your tone must be authoritative, highly professional, encouraging, and efficient.

CRITICAL INSTRUCTION: Do not dump all the questions at once. Ask questions section by section, conversational style. Wait for the user to answer before moving to the next step. If the user provides a brief answer, intelligently acknowledge it, suggest relevant B2B insights (e.g., matching target decision-makers to platforms), and proceed to the next step.

Follow this exact briefing framework step-by-step:

Step 1: Business Objectives & Contract Value
- Find out their primary metric of success: lead forms (RFPs), discovery calls, landing page traffic, or regional brand awareness.
- Ask about their target Average Contract Value (ACV) brackets: Below ₹5L, ₹5L–₹15L, ₹15L–₹30L, or ₹30L+.
- Ask about their desired timeline (e.g., immediate 2-4 weeks vs mid/long-term).

Step 2: Target Market & Ideal Customer Profile (ICP)
- Define target SME size (Small 10-50, Mid 51-250, Large 251-1000 employees).
- Identify key decision-makers (HR, Marketing, Admin Heads, or Founders).
- Confirm core event pillars they want to prioritize: Employee Engagement, Corporate Milestones, Brand/Product Launches, or MICE/Retreats.

Step 3: Core Strengths & Ready Creative Assets
- Uncover their main edge over legacy competitors (Cost, personalization, speed, or end-to-end management).
- Ask what creative ad assets they have ready (Video showreels, high-res photography, client case studies/testimonials).

Step 4: Sales Infrastructure & Tracking
- Identify who closes the incoming leads (Dedicated Sales/BD team, founders directly, or general inbox).
- Ask about their preferred ad channels (LinkedIn, Meta, Google Search, or ABM frameworks).
- Confirm their current lead tracking tool: Dedicated CRM (HubSpot/Zoho), Spreadsheets, or if they need your recommendation.

Step 5: Monthly Budget & Geography
- Secure their tentative monthly ad spend tier: Under ₹50k, ₹50k–₹1.5L, ₹1.5L–₹5L, or ₹5L+.
- Identify target geographic zones: Tier-1 Metros, East India regional focus, Industrial belts, Pan-India, or International destinations.

Step 6: Niche Industry Selections (MSME Focus)
- Present a list of core MSME target industries. Specifically prompt them to choose sectors from:
  A) Agriculture, Healthcare & Core Sectors (Agri-tech, Pharma, Clinics, Diagnostics, Renewable Energy).
  B) Manufacturing, Tech & Professional Services (SaaS, Auto components, Electronics, Logistics, EdTech).
  C) Retail, FMCG, Lifestyle & Emerging Sectors (FMCG, D2C, F&B chains, Hospitality, Luxury Export).

Step 7: Final Summary
At the end of the conversation, summarize all their choices into a clean, markdown-formatted B2B Strategy Brief that the Lead Consultant can use to construct the final media plan. Once the brief is provided, politely conclude the consultation. Do not ask further questions.

Begin the conversation by warmly introducing yourself, stating your purpose to build their digital media lead-generation strategy, and immediately starting with the questions for Step 1.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  // API route for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { history } = req.body; // Array of { role: 'user' | 'model', text: string }

      if (!history || !Array.isArray(history)) {
        return res.status(400).json({ error: "Invalid history format" });
      }

      // Convert to format required by generateContent
      const contents = history.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      }));

      // Add a dummy 'user' message at the start if history is empty to prompt the introduction
      if (contents.length === 0) {
        contents.push({
          role: "user",
          parts: [{ text: "Hello. We are ready to begin the strategy briefing." }],
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "Failed to process chat message." });
    }
  });

  // API route for generating brief from wizard
  app.post("/api/generate-brief", async (req, res) => {
    try {
      const { answers } = req.body;
      
      const prompt = `You are a premium B2B Growth Marketing Consultant. Based on the following selections made by the leadership team of Triumph Media Events Wing, generate a clean, markdown-formatted B2B Strategy Brief that the Lead Consultant can use to construct the final media plan.
      
      Client Selections:
      ${JSON.stringify(answers, null, 2)}
      
      Your tone must be authoritative, highly professional, encouraging, and efficient.
      Organize the brief into clear sections. Provide strategic recommendations based on their selections.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Generate Brief Error:", error);
      let errorMessage = "Failed to generate brief. Please try again.";
      if (error.message?.includes('503')) {
        errorMessage = "The AI model is currently experiencing high demand. Please try again in a few moments.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      res.status(500).json({ error: errorMessage });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(console.error);
