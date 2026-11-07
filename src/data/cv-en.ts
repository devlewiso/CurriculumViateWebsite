// English version of the CV (same shape as cv.ts). Used by /en/cv → the English PDF.
import type { Rol, Proyecto } from "./cv";
export { SITE_URL } from "./cv";

export const persona = {
    nombre: "Iran Lewis Ortiz",
    rol: "Business Systems Analyst",
    especialidad: "AI, Automation and Software Development",
    ubicacion: "Guatemala, Central America",
    email: "devlewiso@gmail.com",
    linkedin: "https://linkedin.com/in/devlewiso",
    github: "https://github.com/devlewiso",
    youtube: "https://www.youtube.com/@devlewiso",
    web: "https://neuralcodelab.com",
    idiomas: [
        { nombre: "Spanish", nivel: "Native" },
        { nombre: "English", nivel: "Advanced (C1) — fluent, spoken and written" },
    ],
};

export const resumen =
    "Business Systems Analyst at TELUS (Business Customer Experience), where I bridge contact center operations and AI engineering: I bring conversational bots built on Dialogflow CX and Genesys to customer channels, measure their quality with real call data, and build agents that automate the team's analysis and testing. Outside of work I build my own software end to end: Clipmill, an open-source React video framework; Sarao, an AI-powered event planning platform; and automations with n8n and LLMs. My rule: code decides, the LLM explains, and data security comes first.";

export const experiencia: Rol[] = [
    {
        periodo: "Dec 2025 — Present",
        actual: true,
        puesto: "Business Systems Analyst · CCAI Tech Lead",
        empresa: "TELUS · Business Customer Experience",
        lugar: "Canada / Remote",
        logros: [
            "Tech Lead (CCAI BSA) for the WhatsApp integration for Business customers: Genesys Cloud → Dialogflow CX → TELUS APIs, in English and French, with handoff to live agents. Defined the test strategy, UAT test cases and user stories.",
            "Built an 11-node LangGraph testing agent that runs the team's scenarios against 4 Dialogflow CX bots across two environments, validates with deterministic code (the LLM only narrates the verdict) and produces HTML reports, with its own React/TypeScript front end.",
            "Created a quality pipeline that turns QA scores from real calls into per-topic benchmarks, improvement patterns and roadmap proposals; presented it to the CCAI core team.",
            "Extracted call samples from BigQuery with masked transcripts (PII) to compare successful and failed voice-bot conversations.",
            "Designed the team's agent fleet: a main agent that queries four copilots over A2A, plus an MCP server and a CLI with an allowlist and audit logging.",
            "Defined model-selection guidelines by data sensitivity (PII only on Canada-hosted models) and enabled the team with Claude Code guides and skills.",
        ],
        tags: ["Dialogflow CX", "Genesys Cloud", "LangGraph", "BigQuery", "MCP / A2A", "React"],
    },
    {
        periodo: "Mar 2023 — Dec 2025",
        puesto: "Tax Analyst / Portfolio Specialist & VDI Tester",
        empresa: "Capgemini · Financial BPO",
        lugar: "Guatemala / Remote",
        logros: [
            "Processed and reviewed monthly U.S. tax-exemption certificates, ensuring regulatory compliance.",
            "Led process-standardization projects that reduced manual errors by 15%.",
            "Developed automation scripts with Python, Excel VBA and Google Workspace.",
            "Performed functional testing in Windows 11 Citrix VDI environments, validating performance and automation flows.",
            "Supported international teams in resolving tax discrepancies.",
        ],
        tags: ["Python", "Excel VBA", "Google Workspace", "VDI / Citrix"],
    },
    {
        periodo: "Jul 2022 — Feb 2023",
        puesto: "Collections Analyst",
        empresa: "Capgemini · Financial BPO",
        lugar: "Guatemala / Remote",
        logros: [
            "Managed collections for financial clients, consistently meeting monthly recovery targets.",
            "Designed and documented process-improvement strategies based on KPI analysis.",
            "Ensured compliance with internal and external standards.",
        ],
        tags: ["KPIs", "Compliance", "Process improvement"],
    },
];

export const educacion = [
    { titulo: "B.S. in Technology and Telecommunications Management", lugar: "Universidad Galileo, Guatemala", periodo: "In progress" },
    { titulo: "High School Diploma in Sciences and Letters", lugar: "C.S.S., Guatemala", periodo: "2008" },
];

export const destacado: Proyecto & { puntos: string[] } = {
    titulo: "Clipmill",
    resumen:
        "My own framework for making videos with React, written from scratch: animation core, renderer with headless Chrome + ffmpeg, web studio with live preview, persistent render queue and an n8n-style workflow engine. I use it to produce the videos for my channels.",
    puntos: [
        "Web studio: compositions, element inspector and per-channel video library.",
        "Built-in teleprompter: window on a second screen, remote control and chunked recording.",
        "AI workflows: LLM script → voice → render → YouTube upload.",
        "Assisted editing: filler-word removal, text-based editing, face-tracking reframe, ducking and LUTs.",
    ],
    stack: ["TypeScript", "React", "Vite", "Node", "ffmpeg", "Headless Chrome"],
    repo: "https://github.com/devlewiso/clipmill",
};

export const proyectos: Proyecto[] = [
    {
        titulo: "Sarao",
        resumen: "Event-planning platform for Guatemala: a vendor catalog and an engine that turns a free-text description into a plan with one vendor per category (Claude Haiku, with a rule-based fallback). Server-side auth, RLS and CAPTCHA.",
        stack: ["Next.js", "Supabase", "Postgres", "Claude API", "Vercel"],
        link: { texto: "sarao-gt.vercel.app", url: "https://sarao-gt.vercel.app" },
    },
    {
        titulo: "AI Shorts Factory",
        resumen: "Workflow that produces YouTube Shorts hands-free: LLM script, AI video and voice, subtitles and upload to YouTube/TikTok for under USD 0.40 per video.",
        stack: ["n8n", "Kie (Grok, Gemini TTS)", "YouTube API"],
        repo: "https://github.com/devlewiso/n8n-fabrica-shorts",
    },
    {
        titulo: "NeuralCodeLab · automated blog",
        resumen: "SEO content pipeline: an LLM drafts the post, I approve it on Telegram and it publishes itself to the site.",
        stack: ["n8n", "LLM", "Telegram Bot", "Vercel"],
        link: { texto: "neuralcodelab.com", url: "https://neuralcodelab.com" },
    },
    {
        titulo: "Mega Online Outlet",
        resumen: "Live online store. Products are added from a Telegram bot that uploads the photos to Vercel Blob and publishes the listing.",
        stack: ["Next.js", "Telegram Bot", "Vercel Blob"],
        link: { texto: "megaonlineoutlet.vercel.app", url: "https://megaonlineoutlet.vercel.app" },
    },
    {
        titulo: "NeuralT LLM",
        resumen: "Educational project: a small neural network trained on LLM-generated data, with a local server that shows training live, step by step.",
        stack: ["Python", "Neural networks", "LLM"],
        repo: "https://github.com/devlewiso/neuralt-llm",
    },
    {
        titulo: "OpsFlow",
        resumen: "Kanban board for operations teams with autosave, backups, history, trash and optional GitHub Issues sync.",
        stack: ["JavaScript", "GitHub API"],
        link: { texto: "Live demo", url: "https://devlewiso.github.io/OpsFlow/" },
    },
    {
        titulo: "Kafka & RabbitMQ simulators",
        resumen: "In-browser simulators to understand producers, queues, topics and consumers; part of my study of microservice architecture.",
        stack: ["Kafka", "RabbitMQ", "HTML / JS"],
        repo: "https://github.com/devlewiso/kafkaSimulator",
    },
    {
        titulo: "HomeLab",
        resumen: "Self-hosted infrastructure on Proxmox VE and Docker: home automation, Prometheus monitoring, n8n, Langfuse for LLM observability and secure remote access.",
        stack: ["Proxmox VE", "Docker", "Prometheus", "Home Assistant", "Cloudflare Tunnels"],
        repo: "https://github.com/devlewiso/homelab-architecture",
    },
];

export const automatizaciones: Proyecto[] = [
    {
        titulo: "ChatOps Orchestrator",
        resumen: "Bridge between Slack, Twilio and Dialogflow to coordinate incidents and alerts in real time, syncing cloud services with local infrastructure.",
        stack: ["Slack", "Twilio", "Dialogflow CX"],
    },
    {
        titulo: "Self-Healing Infrastructure Agent",
        resumen: "n8n monitoring with AI decision logic that detects outages, triggers recovery through Docker or Home Assistant, verifies it and logs the result.",
        stack: ["n8n", "Docker", "Home Assistant"],
    },
    {
        titulo: "Omnichannel AI Assistant",
        resumen: "Bot on Messenger, Telegram and WhatsApp built on Dialogflow CX, with intent analytics on Google Cloud.",
        stack: ["Dialogflow CX", "WhatsApp", "Google Cloud"],
    },
];

export const habilidades = [
    { grupo: "Analysis & QA", items: ["Business Systems Analysis", "QA / UAT", "AI Testing", "Test strategy", "User stories", "Contact center metrics (NPS, FCR, AHT, containment)"] },
    { grupo: "AI & Automation", items: ["Dialogflow CX", "Genesys Cloud CX", "LangGraph", "LangChain", "MCP", "A2A", "Claude Code", "Claude / Gemini / GPT", "n8n", "Apps Script", "Twilio"] },
    { grupo: "Development", items: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Astro", "Node.js", "SQL", "REST APIs", "Excel VBA"] },
    { grupo: "Data & Cloud", items: ["BigQuery", "Supabase", "Postgres", "Google Cloud", "Vercel", "Cloudflare Workers"] },
    { grupo: "Infrastructure & Ops", items: ["Linux", "Docker", "Proxmox VE", "Prometheus", "Git / GitHub", "Postman", "Data privacy (PIPEDA, PII masking)", "Secrets kept out of code"] },
];

export const certificaciones = [
    { nombre: "Google Professional Workspace Administrator", emisor: "Google", destacada: true },
    { nombre: "Microsoft 365 Platforms and Apps (Administrator, Outlook, Azure Fundamentals)", emisor: "Microsoft" },
    { nombre: "PCI DSS: Securing Data, Systems and Applications", emisor: "PCI SSC" },
    { nombre: "Six Sigma White Belt", emisor: "Six Sigma" },
    { nombre: "DEX Certification", emisor: "Capgemini · Dec 2024" },
    { nombre: "Certified Prompt Generator — Advanced Level", emisor: "Prompt engineering" },
];
