(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/App.tsx
  var import_react = __require("react");
  var import_jspdf = __require("jspdf");
  var import_html2canvas = __toESM(__require("html2canvas"), 1);

  // src/data/formConfig.ts
  var formData = [
    {
      "stepNumber": 1,
      "sectionName": "Business Objectives & Goals",
      "questions": [
        {
          "id": "q1_1",
          "type": "checkbox",
          "label": "What is the primary definition of success for this campaign? (Select up to 2)",
          "options": ["Direct, high-intent corporate lead forms (Inquiries/RFPs)", "Booking introductory discovery calls with decision-makers", "Driving traffic to a dedicated corporate events landing page", "Brand awareness and visibility among regional SMEs"]
        },
        {
          "id": "q1_2",
          "type": "radio",
          "label": "What is the target average contract value (ACV) you expect from a typical SME corporate event?",
          "options": ["1 to 2 lacs", "2 to 5 lacs", "5 to 8 lacs", "8 to 10 lacs"]
        },
        {
          "id": "q1_3",
          "type": "radio",
          "label": "What is the target timeline to see the first set of measurable leads?",
          "options": ["Immediate (Within 2\u20134 weeks)", "Mid-term (1\u20132 months)", "Long-term pipeline building (3+ months)"]
        },
        {
          "id": "q1_4",
          "type": "textarea",
          "label": "Other / Additional Notes for Business Objectives (Optional)"
        }
      ]
    },
    {
      "stepNumber": 2,
      "sectionName": "Target Market & ICP",
      "questions": [
        {
          "id": "q2_1",
          "type": "radio",
          "label": "How do you define the target 'SME' size for this campaign?",
          "options": ["Small Businesses (10\u201350 employees)", "Mid-Market Enterprises (51\u2013250 employees)", "Large Domestic Corporates (251\u20131,000 employees)"]
        },
        {
          "id": "q2_2",
          "type": "checkbox",
          "label": "Which primary decision-makers do we need to target? (Check all that apply)",
          "options": ["Human Resources (HR) Managers / CHROs", "Marketing Directors / Brand Managers", "Administration Heads / Facility Managers", "Founders / CEOs / Managing Directors"]
        },
        {
          "id": "q2_3",
          "type": "checkbox",
          "label": "What specific types of corporate events are you looking to book? (Select top 3)",
          "options": ["Employee Engagement (Annual Days, Family Days, Team Building)", "Corporate Milestones (Gala Dinners, Award Ceremonies)", "Brand Events (Product Launches, Press Conferences, Dealer Meets)", "MICE (Conferences, Seminars, Executive Retreats)"]
        },
        {
          "id": "q2_4",
          "type": "textarea",
          "label": "Other / Additional Notes for Target Market (Optional)"
        }
      ]
    },
    {
      "stepNumber": 3,
      "sectionName": "Niche Industry Focus (MSME)",
      "questions": [
        {
          "id": "q3_1",
          "type": "multiselect_dropdown",
          "label": "Select Target Industries (up to 10)",
          "options": [
            "Agriculture & Agri-Tech",
            "Pharmaceuticals & Medical Devices",
            "Hospitals & Healthcare Clinics",
            "Food Processing & Packaging",
            "Dairy Farming & Products",
            "Medical Diagnostics & Laboratories",
            "Alternative Medicine (Ayurveda)",
            "Veterinary & Animal Health",
            "Renewable Energy & Solar Tech",
            "Water Treatment & Waste Management",
            "Biotechnology & Life Sciences",
            "Chemical & Fertilizer Manufacturing",
            "Organic Farming Cooperatives",
            "Cold Chain & Agri-Logistics",
            "Forestry & Paper Products",
            "Mining & Minerals",
            "Aquaculture & Fisheries",
            "Horticulture & Floriculture",
            "Seed & Agro-Chemical Suppliers",
            "Clean-Tech & Sustainability Services",
            "IT Services & Software Development (SaaS)",
            "Electronics & Hardware Manufacturing",
            "Auto Components & Ancillaries",
            "Textile & Garment Manufacturing",
            "Heavy Machinery & Industrial Tools",
            "Construction & Real Estate Development",
            "Architecture & Interior Design",
            "Logistics & Supply Chain Management",
            "EdTech & Private Educational Institutions",
            "Financial Services & FinTech",
            "Legal & Compliance Consultancies",
            "Human Resources & Staffing Agencies",
            "Plastics & Polymer Manufacturing",
            "Metal Fabrication & Forging",
            "Packaging Materials & Corrugated Boxes",
            "Telecom Equipment & Services",
            "BPO & Customer Support Services",
            "Printing & Publishing",
            "Cybersecurity & IT Infrastructure",
            "Corporate Training & Coaching",
            "FMCG (Fast-Moving Consumer Goods)",
            "Retail & E-commerce Platforms",
            "Hospitality & Boutique Hotels",
            "Food & Beverage / Restaurant Chains",
            "Event Management & Trade Shows",
            "Media, Advertising & PR Agencies",
            "Travel & Tourism Operations",
            "Gems & Jewelry Manufacturing",
            "Furniture & Home Decor",
            "Cosmetics & Personal Care",
            "Fitness & Wellness Centers",
            "D2C (Direct-to-Consumer) Brands",
            "Handicrafts & Artisanal Goods",
            "Entertainment & Production Houses",
            "Gaming & Animation Studios",
            "Co-working Spaces & PropTech",
            "Supply Chain Aggregators",
            "Pet Care & Accessories",
            "Luxury Goods & Bespoke Services",
            "Export/Import Houses"
          ]
        },
        {
          "id": "q3_4",
          "type": "textarea",
          "label": "Other / Additional Notes for Niche Industries (Optional)"
        }
      ]
    },
    {
      "stepNumber": 4,
      "sectionName": "Infrastructure, Budget & Geography",
      "questions": [
        {
          "id": "q4_1",
          "type": "radio",
          "label": "Who will handle the incoming leads once the campaign goes live?",
          "options": ["A dedicated in-house Sales/BD team (Ready to call within 24 hours)", "The founders / leadership team directly", "A generic contact email (Inquiries reviewed periodically)", "We'll decide later"]
        },
        {
          "id": "q4_2",
          "type": "radio",
          "label": "Which platforms are you currently open to testing?",
          "options": ["LinkedIn Campaign Manager (Highly targeted B2B)", "Meta Ads (Facebook/Instagram for broader reach)", "Google Search Ads (Targeting active search intent)", "Account-Based Marketing (ABM) Frameworks", "We'll decide later"]
        },
        {
          "id": "q4_3",
          "type": "radio",
          "label": "How do you currently track, store, and nurture pipeline leads?",
          "options": ["Dedicated B2B CRM (e.g., HubSpot, Zoho, Salesforce)", "Organized internal spreadsheets (e.g., Google Sheets / Excel)", "No structured system yet (Need consulting recommendation)", "We'll decide later"]
        },
        {
          "id": "q4_4",
          "type": "radio",
          "label": "What tentative monthly ad spend budget are you planning to allocate?",
          "options": ["Under \u20B950,000 / month", "\u20B950,000 \u2013 \u20B91,50,000 / month", "\u20B91,50,000 \u2013 \u20B95,00,000 / month", "\u20B95,00,000+ / month", "We'll decide later"]
        },
        {
          "id": "q4_5",
          "type": "checkbox",
          "label": "Which primary geographic regions or hubs are you targeting?",
          "options": ["Tier-1 Metro Hubs: Mumbai, Delhi-NCR, Bengaluru, Chennai, Hyderabad, Pune", "East India / Regional Focus: Kolkata, Bhubaneswar, Guwahati, Jamshedpur", "Industrial / Manufacturing Belts: Gujarat, Maharashtra, Tamil Nadu", "Pan-India: Open to executing events anywhere across the country", "International / Destination: Off-site retreats or conferences outside India"]
        },
        {
          "id": "q4_6",
          "type": "textarea",
          "label": "Final Strategy Notes or Comments (Optional)"
        }
      ]
    }
  ];

  // src/App.tsx
  var import_lucide_react = __require("lucide-react");
  var import_react2 = __require("motion/react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var stepEmojis = ["\u{1F3AF}", "\u{1F465}", "\u{1F3E2}", "\u{1F4B3}"];
  function App() {
    const [currentStep, setCurrentStep] = (0, import_react.useState)(0);
    const [answers, setAnswers] = (0, import_react.useState)({});
    const [showSummary, setShowSummary] = (0, import_react.useState)(false);
    const [error, setError] = (0, import_react.useState)(null);
    const [isGenerating, setIsGenerating] = (0, import_react.useState)(false);
    const briefRef = (0, import_react.useRef)(null);
    const handleDownloadPDF = async () => {
      if (!briefRef.current || isGenerating) return;
      const newWin = window.open("", "_blank");
      if (newWin) {
        newWin.document.write('<html style="font-family:sans-serif;"><body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f8fafc;"><h2 style="color:#4f46e5;">Generating your PDF, please wait...</h2></body></html>');
      }
      try {
        setIsGenerating(true);
        const canvas = await (0, import_html2canvas.default)(briefRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff"
        });
        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        const pdf = new import_jspdf.jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = canvas.height * pdfWidth / canvas.width;
        let heightLeft = pdfHeight;
        let position = 0;
        pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
        while (heightLeft > 0) {
          position = heightLeft - pdf.internal.pageSize.getHeight();
          pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
          heightLeft -= pdf.internal.pageSize.getHeight();
        }
        const pdfDataUri = pdf.output("datauristring");
        if (newWin) {
          newWin.document.open();
          newWin.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Download PDF</title>
              <style>
                body { font-family: sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; }
                .btn { display: inline-block; padding: 12px 24px; background: #4f46e5; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: transform 0.2s; }
                .btn:hover { transform: scale(1.05); }
              </style>
            </head>
            <body>
              <h2 style="color:#1e293b; margin-bottom: 20px;">Your PDF is ready!</h2>
              <a id="downloadLink" href="${pdfDataUri}" download="Selected_Options.pdf" class="btn">Click here to Download PDF</a>
              <p style="color:#64748b; margin-top: 20px; font-size: 14px;">(If the download didn't start automatically)</p>
              <script>
                setTimeout(() => {
                  document.getElementById('downloadLink').click();
                }, 500);
              <\/script>
            </body>
          </html>
        `);
          newWin.document.close();
        } else {
          pdf.save("Selected_Options.pdf");
        }
      } catch (err) {
        console.error(err);
        if (newWin) {
          newWin.document.open();
          newWin.document.write('<html style="font-family:sans-serif;"><body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;"><h2 style="color:#ef4444;">Error generating PDF. Please try again.</h2></body></html>');
          newWin.document.close();
        }
        alert("Failed to generate PDF. You can also try printing the page.");
      } finally {
        setIsGenerating(false);
      }
    };
    const step = formData[currentStep];
    const totalSteps = formData.length;
    const handleSelect = (questionId, value, type) => {
      setError(null);
      setAnswers((prev) => {
        if (type === "checkbox" || type === "multiselect_dropdown") {
          const current = prev[questionId] || [];
          if (current.includes(value)) {
            return { ...prev, [questionId]: current.filter((v) => v !== value) };
          } else {
            const questionLabel = formData.flatMap((s) => s.questions).find((q) => q.id === questionId)?.label || "";
            const limitMatch = questionLabel.match(/up to (\d+)/i);
            const limit = limitMatch ? parseInt(limitMatch[1], 10) : null;
            if (limit && current.length >= limit) {
              return prev;
            }
            return { ...prev, [questionId]: [...current, value] };
          }
        } else {
          return { ...prev, [questionId]: value };
        }
      });
    };
    const handleTextChange = (questionId, value) => {
      setError(null);
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };
    const validateStep = () => {
      const currentQuestions = step.questions;
      for (const q of currentQuestions) {
        if (q.label.includes("(Optional)")) continue;
        const answer = answers[q.id];
        if (!answer || Array.isArray(answer) && answer.length === 0 || typeof answer === "string" && answer.trim() === "") {
          return false;
        }
      }
      return true;
    };
    (0, import_react.useEffect)(() => {
      window.scrollTo(0, 0);
    }, [currentStep, showSummary]);
    const handleNext = () => {
      if (!validateStep()) {
        setError("Please complete all mandatory fields before proceeding.");
        return;
      }
      setError(null);
      if (currentStep < totalSteps - 1) {
        setCurrentStep((curr) => curr + 1);
      } else {
        setShowSummary(true);
      }
    };
    const handleBack = () => {
      if (currentStep > 0) {
        setCurrentStep((curr) => curr - 1);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900 pb-24 relative overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob pointer-events-none print:hidden" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob [animation-delay:2s] pointer-events-none print:hidden" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-rose-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob [animation-delay:4s] pointer-events-none print:hidden" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { className: "border-b border-white/60 bg-white/40 backdrop-blur-xl sticky top-0 z-50 shadow-sm print:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-5xl mx-auto px-6 h-20 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-500/20", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Sparkles, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-0.5", children: "Triumph Media Events Wing" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-lg font-bold text-slate-800 leading-none", children: "Campaign Strategy Planner \u2728" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:flex items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-right", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-[10px] uppercase tracking-[0.1em] font-bold text-indigo-600", children: "Authorized Access \u{1F512}" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm font-medium text-slate-600", children: "Enterprise B2B Division" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 relative z-10", children: !showSummary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_react2.motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          className: "w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { isCompact: currentStep > 0 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mb-12", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { className: "text-sm font-bold tracking-wide text-slate-500 uppercase", children: [
                  "Step ",
                  step.stepNumber,
                  " of ",
                  totalSteps,
                  ": ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-indigo-600", children: step.sectionName }),
                  " ",
                  stepEmojis[currentStep]
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "text-sm font-bold text-indigo-600 bg-white/80 px-3 py-1 rounded-full shadow-sm", children: [
                  Math.round(currentStep / (totalSteps - 1) * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-2.5 bg-white/50 rounded-full overflow-hidden shadow-inner border border-white/60", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react2.motion.div,
                {
                  className: "h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 relative",
                  initial: { width: 0 },
                  animate: { width: `${currentStep / (totalSteps - 1) * 100}%` },
                  transition: { duration: 0.6, ease: "easeOut" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white/20" })
                }
              ) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "space-y-8", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react2.motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.3 },
                className: "space-y-8",
                children: step.questions.map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  import_react2.motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: idx * 0.1 },
                    style: { zIndex: 50 - idx },
                    className: "bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { className: "text-xl sm:text-2xl font-bold text-slate-800 mb-8 leading-snug", children: [
                        q.label,
                        !q.label.includes("(Optional)") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-rose-500 ml-1.5", children: "*" })
                      ] }),
                      q.type === "radio" || q.type === "checkbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: q.options?.map((opt) => {
                        const isMulti = q.type === "checkbox";
                        const isSelected = isMulti ? (answers[q.id] || []).includes(opt) : answers[q.id] === opt;
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          import_react2.motion.button,
                          {
                            whileHover: { scale: 1.02 },
                            whileTap: { scale: 0.98 },
                            onClick: () => handleSelect(q.id, opt, q.type),
                            className: `group relative flex items-start p-5 text-left transition-all duration-300 rounded-2xl border-2
                                  ${isSelected ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent shadow-[0_8px_20px_rgba(99,102,241,0.3)]" : "bg-white/80 border-slate-200 hover:bg-white hover:border-indigo-300 shadow-sm hover:shadow-md"}`,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `shrink-0 mt-0.5 mr-4 w-6 h-6 flex items-center justify-center transition-colors relative z-10
                                  ${q.type === "radio" ? "rounded-full" : "rounded-[8px]"}
                                  ${isSelected ? "bg-white text-indigo-600 shadow-sm" : "border-2 border-slate-300 group-hover:border-indigo-400 bg-white"}
                                `, children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { size: 16, strokeWidth: 4 }) }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `text-sm sm:text-base font-semibold relative z-10 ${isSelected ? "text-white drop-shadow-sm" : "text-slate-600 group-hover:text-slate-800"}`, children: opt })
                            ]
                          },
                          opt
                        );
                      }) }) : q.type === "multiselect_dropdown" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        MultiSelectDropdown,
                        {
                          options: q.options || [],
                          selected: answers[q.id] || [],
                          onChange: (val) => handleSelect(q.id, val, q.type),
                          placeholder: "Select industries... \u{1F3ED}"
                        }
                      ) : q.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "textarea",
                        {
                          value: answers[q.id] || "",
                          onChange: (e) => handleTextChange(q.id, e.target.value),
                          placeholder: "Type your notes here... \u270D\uFE0F",
                          className: "w-full bg-white/70 border-2 border-slate-200 rounded-2xl p-6 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 backdrop-blur-md transition-all min-h-[140px] resize-y shadow-sm custom-scrollbar font-medium"
                        }
                      ) : null
                    ]
                  },
                  q.id
                ))
              },
              currentStep
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_react2.motion.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                className: "mt-8 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-700 shadow-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xl", children: "\u26A0\uFE0F" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-semibold", children: error })
                ]
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_react2.motion.button,
                {
                  whileHover: currentStep > 0 ? { scale: 1.05 } : {},
                  whileTap: currentStep > 0 ? { scale: 0.95 } : {},
                  onClick: handleBack,
                  className: `flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all backdrop-blur-md border border-slate-200 shadow-sm
                  ${currentStep > 0 ? "text-slate-600 bg-white/80 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md" : "opacity-0 pointer-events-none"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, { size: 18 }),
                    "Back \u{1F448}"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react2.motion.button,
                {
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  onClick: handleNext,
                  className: "w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-white px-10 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all border border-white/20",
                  children: currentStep === totalSteps - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Submit \u{1F680}" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next Step \u2794" })
                }
              )
            ] })
          ]
        },
        "form"
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_react2.motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 print:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600", children: "Selected Options \u{1F389}" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { ref: briefRef, className: "bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] print:shadow-none print:border-none print:p-0 print:bg-transparent mb-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-slate-600 font-bold mb-8 text-lg border-b border-slate-200 pb-4", children: "Prepared By: Avijit Chakraborty" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full flex flex-col gap-12", children: formData.map((fStep, sIdx) => {
                const hasAnswers = fStep.questions.some((q) => {
                  const ans = answers[q.id];
                  return Array.isArray(ans) ? ans.length > 0 : !!ans;
                });
                if (!hasAnswers) return null;
                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-full", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-4 mb-6 pb-4 border-b border-slate-200/60", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-extrabold shadow-sm", children: sIdx + 1 }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-2xl font-bold text-slate-800", children: fStep.title })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: fStep.questions.map((q) => {
                    const answer = answers[q.id];
                    const displayAnswer = Array.isArray(answer) ? answer.join(", ") : answer;
                    if (!displayAnswer) return null;
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow hover:bg-white/90", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs font-bold text-indigo-500/80 uppercase tracking-wider mb-3 leading-snug", children: q.label }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-slate-800 font-semibold leading-relaxed", children: displayAnswer })
                    ] }, q.id);
                  }) })
                ] }, sIdx);
              }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col sm:flex-row gap-3 justify-end print:hidden mb-12", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react2.motion.button,
                {
                  type: "button",
                  onClick: handleDownloadPDF,
                  disabled: isGenerating,
                  whileHover: isGenerating ? {} : { scale: 1.05 },
                  whileTap: isGenerating ? {} : { scale: 0.95 },
                  className: `flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all self-start sm:self-auto ${isGenerating ? "opacity-75 cursor-not-allowed" : ""}`,
                  children: isGenerating ? "Generating PDF..." : "Confirm & Download \u{1F4C4}"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_react2.motion.button,
                {
                  type: "button",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  onClick: () => {
                    setShowSummary(false);
                    setCurrentStep(0);
                    setAnswers({});
                    window.scrollTo(0, 0);
                  },
                  className: "flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 bg-white/80 hover:bg-white px-6 py-3 rounded-xl backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md transition-all self-start sm:self-auto",
                  children: [
                    "Start Over ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.RefreshCcw, { size: 16 })
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    ] });
  }
  function HeroSection({ isCompact }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_react2.motion.div,
      {
        layout: true,
        initial: { opacity: 0, y: -20, padding: "3.5rem 1.5rem" },
        animate: { opacity: 1, y: 0, padding: isCompact ? "2rem 1.5rem" : "3.5rem 1.5rem" },
        transition: { duration: 0.4, ease: "easeInOut" },
        className: "relative w-full rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 mb-8 sm:mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col items-center text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react2.motion.div,
            {
              animate: { rotate: 360 },
              transition: { duration: 25, repeat: Infinity, ease: "linear" },
              className: "absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-yellow-200 to-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react2.motion.div,
            {
              animate: { rotate: -360 },
              transition: { duration: 20, repeat: Infinity, ease: "linear" },
              className: "absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: !isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react2.motion.div,
            {
              initial: { scale: 0, opacity: 0, height: 0, marginBottom: 0 },
              animate: { scale: 1, opacity: 1, height: 64, marginBottom: 24 },
              exit: { scale: 0.8, opacity: 0, height: 0, marginBottom: 0 },
              transition: { duration: 0.3 },
              className: "w-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white flex items-center justify-center z-10 relative overflow-hidden shrink-0",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react2.motion.span,
                {
                  animate: { y: [0, -5, 0] },
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  className: "text-3xl block",
                  children: "\u{1F680}"
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react2.motion.h1,
            {
              layout: true,
              className: `font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 z-10 drop-shadow-sm transition-all duration-500 pb-1 ${isCompact ? "text-2xl sm:text-3xl mb-0" : "text-3xl sm:text-5xl mb-3"}`,
              children: "B2B Campaign Details"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: !isCompact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react2.motion.p,
            {
              initial: { opacity: 0, y: 20, height: 0 },
              animate: { opacity: 1, y: 0, height: "auto" },
              exit: { opacity: 0, y: -10, height: 0, margin: 0 },
              transition: { duration: 0.3 },
              className: "text-slate-600 font-medium text-base sm:text-lg max-w-2xl z-10 leading-relaxed overflow-hidden",
              children: "Craft a bespoke, high-impact roadmap for your next B2B campaign. Let's unlock your event's full potential and align our objectives perfectly. \u2728"
            }
          ) })
        ]
      }
    );
  }
  function MultiSelectDropdown({
    options,
    selected,
    onChange,
    placeholder
  }) {
    const [isOpen, setIsOpen] = (0, import_react.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative z-20", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_react2.motion.button,
        {
          whileTap: { scale: 0.99 },
          type: "button",
          onClick: () => setIsOpen(!isOpen),
          className: `w-full bg-white/80 border-2 rounded-2xl p-5 text-left flex items-center justify-between transition-all backdrop-blur-md shadow-sm
          ${isOpen ? "border-indigo-400 bg-white ring-4 ring-indigo-50" : "border-slate-200 hover:border-indigo-300 hover:bg-white"}
        `,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap gap-2 pr-4", children: selected.length > 0 ? selected.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex items-center px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-sm font-bold shadow-sm", children: item }, item)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-slate-400 text-base font-medium", children: placeholder }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { size: 20, className: `shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-500" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 z-10", onClick: () => setIsOpen(false) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react2.motion.div,
          {
            initial: { opacity: 0, y: -10, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -10, scale: 0.98 },
            transition: { duration: 0.2 },
            className: "absolute z-20 w-full mt-3 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "max-h-72 overflow-y-auto p-3 custom-scrollbar", children: options.map((opt) => {
              const isSelected = selected.includes(opt);
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => onChange(opt),
                  className: `w-full flex items-center px-4 py-3.5 rounded-xl text-left transition-all mb-1.5
                        ${isSelected ? "bg-indigo-50 text-indigo-900 shadow-sm" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                      `,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `shrink-0 mr-4 w-6 h-6 rounded-[8px] border-2 flex items-center justify-center transition-colors
                        ${isSelected ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent text-white" : "border-slate-300"}
                      `, children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { size: 14, strokeWidth: 4 }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm font-bold", children: opt })
                  ]
                },
                opt
              );
            }) })
          }
        )
      ] }) })
    ] });
  }
})();
