export const site = {
  name: "Stephen Mathenge Kisangi",
  tagline: "Solving problems, always. We're getting there.",
  eyebrow: "First-Class Honours · BSc Information Technology",
  roles: ["Technologist & Founder", "Applied AI & Data", "Builder of Live Products", "Systems & Research", "Community Impact Leader"],
  sub: "I build technology around real problems, from a live consulting platform and a trading product to a veterinary reporting system and a school attendance concept. First-Class Honours in Information Technology, with a record of leading projects on the ground.",
  cv: "/Stephen_Kisangi_CV.pdf",
  email: "stephen.crowndus1@gmail.com",
  whatsapp: "+254 792 915655",
  linkedin: "https://linkedin.com/in/stephen-kisangi-ba3b12231",
  github: "https://github.com/Crowndus",
};
export const nav = [["My story", "/#about"], ["What I can do", "/#skills"], ["What I've built", "/#work"], ["Proof", "/#certifications"], ["Deep dive", "/#research"], ["Say hi", "/#contact"]];
export const metrics: { to: number; suffix: string; prefix?: string; label: string }[] = [
  { to: 2000, suffix: "+", label: "Historical documents digitized (1990-2023)" },
  { to: 9457, suffix: "", label: "Pupils reached through Viatu Shuleni" },
  { to: 2, suffix: "", label: "Live production products" },
  { to: 60, suffix: "+", label: "Research and data projects delivered for international clients" },
];
export const about = [
  "I'm a technologist with a First-Class Honours degree in Information Technology from Kenya Highlands University, where I was named the best student in the School of Computing and Information Science for the 2024 graduating class. My work moves between software, data, AI, and community-led projects.",
  "I founded Edurown, an independent consulting platform for research, data and technical content, and I'm building AlphaStreamTrader, a Deriv-integrated trading platform that gives retail traders algorithmic strategies, a risk shield, and copy-trading without the complexity of raw APIs.",
  "Before this, I built things that earned their place: a PHP/MySQL diagnosis reporting system backed by both my university panel and RVIL-Kericho, digitized 2,000+ documents spanning three decades, and led a shoe-distribution program that reached 9,457 pupils in Kitui County.",
];
export const skills = ["Python", "TypeScript", "React", "Next.js", "Tailwind", "SQL", "TensorFlow", "Scikit-learn"];
export const experience = [
  { role: "Founder & Lead", org: "Edurown, Remote / Global", date: "2024 - Present", body: "Built and launched Edurown, an independent consulting platform for research, data analysis and technical content, serving clients and professionals worldwide. Built around a simple idea: consulting should stay direct and transparent, with clear scope, honest timelines and fair pricing. Designed the full product (brand, site, and service workflow) on React 19, TanStack Start, and Tailwind v4." },
  { role: "Freelance IT & AI Consultant", org: "Self-Employed, Remote", date: "Jan 2024 - Present", body: "Delivered 60+ research, data analysis, technical writing, and AI-assisted projects for international clients. Built reports, automation solutions, web content, and data-driven insights, applying AI tools to improve research workflows and productivity. Provided remote IT support, troubleshooting, and digital consulting." },
  { role: "Technical Support Assistant & Tutor (Volunteer)", org: "Arizona International College, Kenya", date: "June 2024 - September 2024", body: "Performed network troubleshooting, configuration, and computer setup across office and classroom environments. Supported faculty and students on hardware, software, and connectivity issues. Tutored students in web design and IT fundamentals, supporting academic growth and technical confidence." },
  { role: "IT Industrial Attachment", org: "Kenya Regional Veterinary Investigation Laboratory (RVIL-Kericho)", date: "May 2023 - August 2023", body: "Developed the Diagnosis Reporting System in PHP and MySQL, a system that would help farmers download diagnostic reports remotely. Backed by both the university panel and the lab it was built for. Digitized 2,000+ historical documents (1990-2023) into active systems. Maintained cloud (Silab) and local (Epilab) platforms to ensure continuous uptime." },
  { role: "Project Manager (Volunteer)", org: "Viatu Shuleni, Kitui County, Kenya", date: "May 2022 - May 2023", body: "Led distribution of 7,986 pairs of shoes across rural schools, improving education access for 9,457 pupils. Planned and coordinated computer literacy training reaching 2,513 youth. Built partnerships with schools and community stakeholders for long-term sustainability, and supported early-stage integration of digital learning tools in underserved schools." },
];
export const projects = [
  { name: "AlphaStreamTrader", slug: "alphastreamtrader", badge: "LIVE", tag: "FINTECH", link: "https://alphastreamtrader.vercel.app/", body: "Deriv-powered algorithmic trading platform with real-time WebSocket market data, risk-shield logic, and copy trading via cTrader and Nakala. Built as a third-party interface on Deriv's regulated infrastructure.", stack: "Next.js · TypeScript · Tailwind · WebSocket · Deriv API" },
  { name: "Edurown", slug: "edurown", badge: "LIVE", tag: "CONSULTING · FOUNDER", link: "https://edurown.vercel.app/", body: "Independent consulting platform for research, data and technical projects. Clients work directly with the consultant, with clear scope and fair pricing. Built from brand to production on a modern SSR stack.", stack: "React 19 · TanStack Start · TanStack Router · Tailwind v4 · shadcn/ui · Nitro" },
  { name: "Diagnosis Reporting System", slug: "diagnosis-reporting-system", badge: "BUILT", tag: "", link: "", body: "PHP/MySQL system designed at RVIL-Kericho that would help farmers download veterinary diagnostic reports remotely, cutting travel and improving lab accessibility. Backed by the university panel and the lab it was built for.", stack: "PHP · MySQL · Apache" },
  { name: "Lung Cancer Data Analysis", badge: "DATA", tag: "", link: "", body: "Analyzed 10,000+ patient records to study treatment outcomes by ethnicity, cancer stage, and smoking history. Delivered interactive visualizations and a fully documented Jupyter notebook.", stack: "Python · Pandas · Scikit-learn · Matplotlib" },
  { name: "Biometric Tracking Research", slug: "biometric-attendance", badge: "RESEARCH", tag: "", link: "", body: "Undergraduate proposal and case study: a web-based biometric tracking system that would reduce late-coming and absenteeism in Kenyan high schools. Case study: St. Augustine Mlolongo High School.", stack: "Python · Web · Biometrics" },
];
export const certs = [
  { image: "/api/img?f=certs/security-101.jpg", title: "Security 101", issuer: "Carnegie Mellon University (via Proofpoint)", date: "November 2025", tag: "Cybersecurity" },
  { image: "/api/img?f=certs/cybersecurity-ict-authority.jpg", title: "Cybersecurity and Emerging Technologies Awareness Training", issuer: "ICT Authority Kenya, in collaboration with CLC Africa", date: "February 2025", tag: "Cybersecurity" },
  { image: "/api/img?f=certs/academic-excellence.jpg", title: "Academic Excellence Award", issuer: "Kenya Highlands University. Best student, School of Computing and Information Science, 2024 graduating class", date: "August 2024", tag: "Academic" },
];
export const research = {
  title: "Development and Integration of Web-Based Biometric Tracking Systems in Kenyan High Schools to Minimize Late Coming and Absenteeism",
  sub: "A Case Study of St. Augustine Mlolongo High School",
  meta: "Undergraduate research · Kenya Highlands University · 2024",
  body: "Awarded First-Class Honours. Proposed a biometric attendance system designed for low-resource school environments, evaluating feasibility, privacy, and administrative adoption.",
};
export const marquee = ["TypeScript", "React", "Next.js", "Tailwind CSS", "TanStack", "Node.js", "Python", "TensorFlow", "Scikit-learn", "Pandas", "MySQL", "PostgreSQL", "PHP", "Git", "GitHub", "Vercel", "WebSocket", "Deriv API", "Figma", "VS Code"];
