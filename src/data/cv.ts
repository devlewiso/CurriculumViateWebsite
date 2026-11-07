// Fuente única del CV: la usan las secciones del sitio y la página imprimible /cv
// (de donde sale public/cv.pdf con `npm run cv:pdf`). Cambiá los datos aquí, no en los componentes.

export const SITE_URL = "https://mycven.neuralcodelab.com";
export const CV_PDF = "/cv.pdf";

export const persona = {
    nombre: "Iran Lewis Ortiz",
    rol: "Business Systems Analyst",
    especialidad: "IA, Automatización y Desarrollo de Software",
    ubicacion: "Guatemala, Centroamérica",
    email: "devlewiso@gmail.com",
    linkedin: "https://linkedin.com/in/devlewiso",
    github: "https://github.com/devlewiso",
    youtube: "https://www.youtube.com/@devlewiso",
    web: "https://neuralcodelab.com",
    idiomas: [
        { nombre: "Español", nivel: "Nativo" },
        { nombre: "Inglés", nivel: "Avanzado (C1) — fluido oral y escrito" },
    ],
};

export const resumen =
    "Business Systems Analyst en TELUS (Business Customer Experience), donde soy el puente entre la operación de contact center y la ingeniería de IA: llevo bots conversacionales con Dialogflow CX y Genesys a los canales del cliente, mido su calidad con datos reales de llamadas y construyo agentes que automatizan el análisis y las pruebas del equipo. Fuera del trabajo construyo software propio de punta a punta: Clipmill, un framework open source de video con React; Sarao, una plataforma de eventos con IA; y automatizaciones con n8n y LLMs. Mi regla: el código decide y el LLM explica, con la seguridad de los datos primero.";

export type Rol = {
    periodo: string;
    actual?: boolean;
    puesto: string;
    empresa: string;
    lugar: string;
    logros: string[];
    tags: string[];
};

export const experiencia: Rol[] = [
    {
        periodo: "Dic 2025 — Presente",
        actual: true,
        puesto: "Business Systems Analyst · Tech Lead CCAI",
        empresa: "TELUS · Business Customer Experience",
        lugar: "Canadá / Remoto",
        logros: [
            "Tech Lead (CCAI BSA) de la integración de WhatsApp para clientes Business: Genesys Cloud → Dialogflow CX → APIs de TELUS, en inglés y francés, con handoff a agentes humanos. Definí la estrategia de pruebas, los casos de UAT y las user stories.",
            "Construí un agente de pruebas en LangGraph (11 nodos) que corre los escenarios del equipo contra 4 bots de Dialogflow CX en dos ambientes, valida con código determinístico (el LLM solo narra el veredicto) y entrega reportes en HTML, con su propio frontend en React/TypeScript.",
            "Creé un pipeline de calidad que convierte los QA scores de llamadas reales en benchmarks por tema, patrones de mejora y propuestas para el roadmap; lo presenté al equipo core de CCAI.",
            "Extraje desde BigQuery muestras de llamadas con transcripción enmascarada (PII) para comparar conversaciones exitosas y fallidas de los bots de voz.",
            "Diseñé la flota de agentes del equipo: un agente principal que consulta a cuatro copilots por A2A, un servidor MCP y una CLI con lista blanca y registro de auditoría.",
            "Definí la guía de modelos según la sensibilidad de los datos (PII solo en modelos alojados en Canadá) y habilité al equipo con guías y skills de Claude Code.",
        ],
        tags: ["Dialogflow CX", "Genesys Cloud", "LangGraph", "BigQuery", "MCP / A2A", "React"],
    },
    {
        periodo: "Mar 2023 — Dic 2025",
        puesto: "Analista Fiscal / Especialista de Portafolio y Tester VDI",
        empresa: "Capgemini · Financial BPO",
        lugar: "Guatemala / Remoto",
        logros: [
            "Procesé y revisé certificados mensuales de exención fiscal de EE. UU., asegurando el cumplimiento regulatorio.",
            "Lideré proyectos de estandarización de procesos que redujeron los errores manuales en un 15 %.",
            "Desarrollé scripts de automatización con Python, Excel VBA y Google Workspace.",
            "Pruebas funcionales en entornos VDI Windows 11 Citrix, validando rendimiento y flujos de automatización.",
            "Apoyé a equipos internacionales en la resolución de discrepancias fiscales.",
        ],
        tags: ["Python", "Excel VBA", "Google Workspace", "VDI / Citrix"],
    },
    {
        periodo: "Jul 2022 — Feb 2023",
        puesto: "Analista de Cobros",
        empresa: "Capgemini · Financial BPO",
        lugar: "Guatemala / Remoto",
        logros: [
            "Gestioné cobros para clientes financieros, alcanzando de forma constante los objetivos mensuales de recuperación.",
            "Diseñé y documenté estrategias de mejora de procesos basadas en análisis de KPI.",
            "Aseguré el cumplimiento de estándares internos y externos.",
        ],
        tags: ["KPI", "Compliance", "Mejora de procesos"],
    },
];

export const educacion = [
    { titulo: "Licenciatura en Gestión de Tecnología y Telecomunicaciones", lugar: "Universidad Galileo, Guatemala", periodo: "En curso" },
    { titulo: "Bachillerato en Ciencias y Letras", lugar: "C.S.S., Guatemala", periodo: "2008" },
];

export type Proyecto = {
    titulo: string;
    resumen: string;
    stack: string[];
    link?: { texto: string; url: string };
    repo?: string;
};

// Lo que construyo y mantengo hoy, con link a algo que se puede ver.
export const destacado: Proyecto & { puntos: string[] } = {
    titulo: "Clipmill",
    resumen:
        "Framework propio para hacer videos con React, escrito desde cero: núcleo de animación, renderer con Chrome headless + ffmpeg, estudio web con vista previa en vivo, cola de render persistente y un motor de flujos tipo n8n. Con él produzco los videos de mis canales.",
    puntos: [
        "Estudio web: composiciones, inspector de elementos y biblioteca de videos por canal.",
        "Teleprompter integrado: ventana en otra pantalla, control remoto y grabación por partes.",
        "Flujos con IA: guion con LLM → voz → render → subida a YouTube.",
        "Edición asistida: limpieza de muletillas, edición por texto, reencuadre que sigue la cara, ducking y LUTs.",
    ],
    stack: ["TypeScript", "React", "Vite", "Node", "ffmpeg", "Chrome headless"],
    repo: "https://github.com/devlewiso/clipmill",
};

export const proyectos: Proyecto[] = [
    {
        titulo: "Sarao",
        resumen: "Plataforma para organizar eventos en Guatemala: catálogo de proveedores y un motor que convierte una descripción en texto libre en un plan con un proveedor por categoría (Claude Haiku, con respaldo por reglas). Auth del lado del servidor, RLS y CAPTCHA.",
        stack: ["Next.js", "Supabase", "Postgres", "Claude API", "Vercel"],
        link: { texto: "sarao-gt.vercel.app", url: "https://sarao-gt.vercel.app" },
    },
    {
        titulo: "Fábrica de Shorts con IA",
        resumen: "Workflow que produce YouTube Shorts sin intervención: guion con LLM, video y voz con IA, subtítulos y subida a YouTube/TikTok por menos de 0.40 USD por video.",
        stack: ["n8n", "Kie (Grok, Gemini TTS)", "YouTube API"],
        repo: "https://github.com/devlewiso/n8n-fabrica-shorts",
    },
    {
        titulo: "NeuralCodeLab · blog automatizado",
        resumen: "Pipeline de contenido SEO: un LLM redacta el post, lo mando a aprobar por Telegram y al aprobarlo se publica solo en el sitio.",
        stack: ["n8n", "LLM", "Telegram Bot", "Vercel"],
        link: { texto: "neuralcodelab.com", url: "https://neuralcodelab.com" },
    },
    {
        titulo: "Mega Online Outlet",
        resumen: "Tienda en línea en producción. Los productos se cargan desde un bot de Telegram que sube las fotos a Vercel Blob y publica el artículo.",
        stack: ["Next.js", "Telegram Bot", "Vercel Blob"],
        link: { texto: "megaonlineoutlet.vercel.app", url: "https://megaonlineoutlet.vercel.app" },
    },
    {
        titulo: "NeuralT LLM",
        resumen: "Proyecto educativo: una red neuronal pequeña entrenada con datos que genera un LLM, y un servidor local que muestra el entrenamiento en vivo, paso a paso.",
        stack: ["Python", "Redes neuronales", "LLM"],
        repo: "https://github.com/devlewiso/neuralt-llm",
    },
    {
        titulo: "OpsFlow",
        resumen: "Tablero Kanban para equipos de operaciones con autoguardado, respaldos, historial, papelera y sincronización opcional con GitHub Issues.",
        stack: ["JavaScript", "GitHub API"],
        link: { texto: "Ver demo", url: "https://devlewiso.github.io/OpsFlow/" },
    },
    {
        titulo: "Simuladores de Kafka y RabbitMQ",
        resumen: "Simuladores en el navegador para entender productores, colas, tópicos y consumidores; parte de mi estudio de arquitectura de microservicios.",
        stack: ["Kafka", "RabbitMQ", "HTML / JS"],
        repo: "https://github.com/devlewiso/kafkaSimulator",
    },
    {
        titulo: "HomeLab",
        resumen: "Infraestructura self-hosted con Proxmox VE y Docker: automatización del hogar, monitoreo con Prometheus, n8n, Langfuse para observabilidad de LLMs y acceso remoto seguro.",
        stack: ["Proxmox VE", "Docker", "Prometheus", "Home Assistant", "Cloudflare Tunnels"],
        repo: "https://github.com/devlewiso/homelab-architecture",
    },
];

// Proyectos de IA conversacional y automatización (del CV).
export const automatizaciones: Proyecto[] = [
    {
        titulo: "ChatOps Orchestrator",
        resumen: "Puente entre Slack, Twilio y Dialogflow para coordinar incidentes y alertas en tiempo real, sincronizando servicios cloud con la infraestructura local.",
        stack: ["Slack", "Twilio", "Dialogflow CX"],
    },
    {
        titulo: "Self-Healing Infrastructure Agent",
        resumen: "Monitoreo con n8n y lógica de decisión con IA que detecta caídas, activa la recuperación con Docker o Home Assistant, verifica y registra el resultado.",
        stack: ["n8n", "Docker", "Home Assistant"],
    },
    {
        titulo: "Omnichannel AI Assistant",
        resumen: "Bot en Messenger, Telegram y WhatsApp con Dialogflow CX y analítica de intents en Google Cloud.",
        stack: ["Dialogflow CX", "WhatsApp", "Google Cloud"],
    },
];

export const habilidades = [
    { grupo: "Análisis & QA", items: ["Business Systems Analysis", "QA / UAT", "AI Testing", "Estrategia de pruebas", "User stories", "Métricas de contact center (NPS, FCR, AHT, contención)"] },
    { grupo: "IA & Automatización", items: ["Dialogflow CX", "Genesys Cloud CX", "LangGraph", "LangChain", "MCP", "A2A", "Claude Code", "Claude / Gemini / GPT", "n8n", "Apps Script", "Twilio"] },
    { grupo: "Desarrollo", items: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Astro", "Node.js", "SQL", "REST APIs", "Excel VBA"] },
    { grupo: "Datos & Cloud", items: ["BigQuery", "Supabase", "Postgres", "Google Cloud", "Vercel", "Cloudflare Workers"] },
    { grupo: "Infraestructura & Ops", items: ["Linux", "Docker", "Proxmox VE", "Prometheus", "Git / GitHub", "Postman", "Privacidad de datos (PIPEDA, enmascaramiento de PII)", "Secretos fuera del código"] },
];

export const certificaciones = [
    { nombre: "Google Professional Workspace Administrator", emisor: "Google", destacada: true },
    { nombre: "Microsoft 365 Platforms and Apps (Administrator, Outlook, Azure Fundamentals)", emisor: "Microsoft" },
    { nombre: "PCI DSS: Securing Data, Systems and Applications", emisor: "PCI SSC" },
    { nombre: "Six Sigma White Belt", emisor: "Six Sigma" },
    { nombre: "DEX Certification", emisor: "Capgemini · Dic 2024" },
    { nombre: "Certified Prompt Generator — Advanced Level", emisor: "Prompt engineering" },
];

export const blandas = [
    "Pensamiento analítico",
    "Comunicación clara",
    "Resolución creativa de problemas",
    "Optimización de procesos",
    "Adaptabilidad",
    "Aprendizaje autodidacta",
];
