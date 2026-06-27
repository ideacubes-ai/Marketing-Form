export const steps = [
  {
    id: 1,
    title: "Objectives &\nContract Value",
    quote: `"To begin, we must define the gravitational center of this campaign. What is the primary metric that will signal absolute victory for the Events Wing—is it raw RFP volume, scheduled discovery calls, or regional brand dominance in the Tier-1 sectors?"`,
    insight: {
      metric1: "₹15L+",
      desc1: "High-Value Lead Gen requires an account-based marketing approach rather than wide-funnel Meta traffic.",
      metric2: "24%",
      desc2: "Average conversion increase when targeting HR Heads for Corporate Milestones vs. General Admins.",
      note: "Prioritizing the ₹15L-₹30L bracket suggests we should pivot Step 2 toward Mid-to-Large sized Enterprises."
    },
    fields: [
      {
        name: "metric",
        label: "Primary Metric of Success",
        type: "select",
        options: ["Lead Forms (RFPs)", "Discovery Calls", "Landing Page Traffic", "Regional Brand Awareness"]
      },
      {
        name: "acv",
        label: "Target ACV Bracket",
        type: "select",
        options: ["Below ₹5L", "₹5L – ₹15L", "₹15L – ₹30L", "₹30L+"]
      },
      {
        name: "timeline",
        label: "Desired Timeline",
        type: "select",
        options: ["Immediate (2-4 weeks)", "Mid-term (1-3 months)", "Long-term (3+ months)"]
      }
    ]
  },
  {
    id: 2,
    title: "Target Market &\nICP",
    quote: `"With the objective locked in, let's look at who we are targeting. What size of organization and which specific decision-makers are we going after for your core event pillars?"`,
    insight: {
      metric1: "ICP",
      desc1: "Clearly defined Ideal Customer Profiles reduce wasted ad spend by up to 40%.",
      metric2: "3x",
      desc2: "Higher engagement when event pillars match the specific pain points of the decision maker.",
      note: "Aligning the event pillar with the right stakeholder is critical for conversion."
    },
    fields: [
      {
        name: "smeSize",
        label: "Target SME Size",
        type: "select",
        options: ["Small (10-50 employees)", "Mid (51-250 employees)", "Large (251-1000 employees)"]
      },
      {
        name: "decisionMakers",
        label: "Key Decision-Makers (Multi)",
        type: "multi-select",
        options: ["HR Heads", "Marketing Heads", "Admin Heads", "Founders"]
      },
      {
        name: "eventPillars",
        label: "Core Event Pillars (Multi)",
        type: "multi-select",
        options: ["Employee Engagement", "Corporate Milestones", "Brand/Product Launches", "MICE/Retreats"]
      }
    ]
  },
  {
    id: 3,
    title: "Core Strengths &\nAssets",
    quote: `"To win against legacy competitors, we need a sharp edge. What is your primary differentiator, and what creative ammunition do we have ready to deploy?"`,
    insight: {
      metric1: "Asset",
      desc1: "High-quality video showreels can increase B2B lead capture rates by 34%.",
      metric2: "Edge",
      desc2: "Speed and end-to-end management are the top requested features by Mid-Large enterprises.",
      note: "We will leverage your strongest asset to anchor the top-of-funnel creatives."
    },
    fields: [
      {
        name: "edge",
        label: "Main Competitive Edge",
        type: "select",
        options: ["Cost Efficiency", "Personalization", "Speed of Execution", "End-to-End Management"]
      },
      {
        name: "assets",
        label: "Ready Creative Assets (Multi)",
        type: "multi-select",
        options: ["Video Showreels", "High-Res Photography", "Client Case Studies", "None Yet"]
      }
    ]
  },
  {
    id: 4,
    title: "Sales Infrastructure\n& Tracking",
    quote: `"A lead is only as good as the system that catches it. Who will be closing these inbound leads, and what channels & tools are we currently using?"`,
    insight: {
      metric1: "5 Min",
      desc1: "Following up within 5 minutes increases the odds of qualifying a lead by 21 times.",
      metric2: "CRM",
      desc2: "A dedicated CRM setup prevents high-value RFPs from slipping through the cracks.",
      note: "Your tracking infrastructure will dictate our ad channel mix and attribution model."
    },
    fields: [
      {
        name: "closers",
        label: "Who Closes Incoming Leads?",
        type: "select",
        options: ["Dedicated Sales/BD Team", "Founders Directly", "General Inbox"]
      },
      {
        name: "channels",
        label: "Preferred Ad Channels (Multi)",
        type: "multi-select",
        options: ["LinkedIn", "Meta (Facebook/IG)", "Google Search", "ABM Frameworks"]
      },
      {
        name: "tracking",
        label: "Current Lead Tracking Tool",
        type: "select",
        options: ["Dedicated CRM", "Spreadsheets", "Need Recommendation"]
      }
    ]
  },
  {
    id: 5,
    title: "Monthly Budget &\nGeography",
    quote: `"Let's talk fuel for the engine. What is the tentative monthly ad spend we are allocating, and which geographic zones are we prioritizing for this sprint?"`,
    insight: {
      metric1: "Budget",
      desc1: "B2B LinkedIn campaigns typically require a higher starting budget for effective learning phases.",
      metric2: "Geo",
      desc2: "Tier-1 Metros account for 65% of all corporate event bookings in India.",
      note: "Your budget tier will help us narrow down the most effective geographic targeting."
    },
    fields: [
      {
        name: "budget",
        label: "Tentative Monthly Ad Spend",
        type: "select",
        options: ["Under ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹5L", "₹5L+"]
      },
      {
        name: "geography",
        label: "Target Geographic Zones (Multi)",
        type: "multi-select",
        options: ["Tier-1 Metros", "East India Regional", "Industrial Belts", "Pan-India", "International"]
      }
    ]
  },
  {
    id: 6,
    title: "Niche Industry\nSelections",
    quote: `"Finally, we need to focus our crosshairs. Which specific MSME sectors are we targeting to maximize the relevance of our messaging?"`,
    insight: {
      metric1: "Focus",
      desc1: "Niche targeting reduces Cost Per Acquisition (CPA) by increasing ad relevance.",
      metric2: "Sectors",
      desc2: "Tech and Healthcare are currently seeing the highest YoY growth in corporate event spending.",
      note: "Select the sectors where you already have the strongest case studies or experience."
    },
    fields: [
      {
        name: "industries",
        label: "Core MSME Target Industries (Multi)",
        type: "multi-select",
        options: [
          "Agri-tech, Pharma, Clinics",
          "Manufacturing, Tech, SaaS",
          "Retail, FMCG, Hospitality"
        ]
      }
    ]
  }
];
