export const formData = [
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
        "options": ["Immediate (Within 2–4 weeks)", "Mid-term (1–2 months)", "Long-term pipeline building (3+ months)"]
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
        "options": ["Small Businesses (10–50 employees)", "Mid-Market Enterprises (51–250 employees)", "Large Domestic Corporates (251–1,000 employees)"]
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
          "Agriculture & Agri-Tech", "Pharmaceuticals & Medical Devices", "Hospitals & Healthcare Clinics", "Food Processing & Packaging", "Dairy Farming & Products", "Medical Diagnostics & Laboratories", "Alternative Medicine (Ayurveda)", "Veterinary & Animal Health", "Renewable Energy & Solar Tech", "Water Treatment & Waste Management", "Biotechnology & Life Sciences", "Chemical & Fertilizer Manufacturing", "Organic Farming Cooperatives", "Cold Chain & Agri-Logistics", "Forestry & Paper Products", "Mining & Minerals", "Aquaculture & Fisheries", "Horticulture & Floriculture", "Seed & Agro-Chemical Suppliers", "Clean-Tech & Sustainability Services",
          "IT Services & Software Development (SaaS)", "Electronics & Hardware Manufacturing", "Auto Components & Ancillaries", "Textile & Garment Manufacturing", "Heavy Machinery & Industrial Tools", "Construction & Real Estate Development", "Architecture & Interior Design", "Logistics & Supply Chain Management", "EdTech & Private Educational Institutions", "Financial Services & FinTech", "Legal & Compliance Consultancies", "Human Resources & Staffing Agencies", "Plastics & Polymer Manufacturing", "Metal Fabrication & Forging", "Packaging Materials & Corrugated Boxes", "Telecom Equipment & Services", "BPO & Customer Support Services", "Printing & Publishing", "Cybersecurity & IT Infrastructure", "Corporate Training & Coaching",
          "FMCG (Fast-Moving Consumer Goods)", "Retail & E-commerce Platforms", "Hospitality & Boutique Hotels", "Food & Beverage / Restaurant Chains", "Event Management & Trade Shows", "Media, Advertising & PR Agencies", "Travel & Tourism Operations", "Gems & Jewelry Manufacturing", "Furniture & Home Decor", "Cosmetics & Personal Care", "Fitness & Wellness Centers", "D2C (Direct-to-Consumer) Brands", "Handicrafts & Artisanal Goods", "Entertainment & Production Houses", "Gaming & Animation Studios", "Co-working Spaces & PropTech", "Supply Chain Aggregators", "Pet Care & Accessories", "Luxury Goods & Bespoke Services", "Export/Import Houses"
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
        "options": ["Under ₹50,000 / month", "₹50,000 – ₹1,50,000 / month", "₹1,50,000 – ₹5,00,000 / month", "₹5,00,000+ / month", "We'll decide later"]
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
