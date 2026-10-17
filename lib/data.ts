export const site = {
  name: "Stephen Mathenge Kisangi",
  tagline: "Solving problems, always. We're getting there.",
  eyebrow: "CMU Africa MSEAI '26 · First-Class Honours, BSc IT",
  roles: ["AI Engineer", "Founder of Edurown", "Technical Support Specialist", "Builder of Live Products", "Data & Applied AI"],
  sub: "I build AI-powered products at the intersection of education, fintech, and applied data: from a live academic writing platform to a Deriv-integrated trading system. First-Class Honours in IT. CMU Africa-bound.",
  cv: "/Stephen_Kisangi_CV.pdf",
  email: "stephen.crowndus1@gmail.com",
  whatsapp: "+254 792 915655",
  linkedin: "https://linkedin.com/in/stephen-kisangi-ba3b12231",
  github: "https://github.com/Crowndus",
};
export const nav = [["My story", "/#about"], ["What I can do", "/#skills"], ["What I've built", "/#work"], ["Proof", "/#certifications"], ["Deep dive", "/#research"], ["Say hi", "/#contact"]];
export const metrics = [
  { to: 2000, suffix: "+", label: "Historical documents digitized (1990-2023)" },
  { to: 9457, suffix: "", label: "Pupils reached through Viatu Shuleni" },
  { to: 2, suffix: "", label: "Live production products" },
  { to: 10, prefix: "<", suffix: "%", label: "CMU Africa MSEAI acceptance rate" },
];
export const about = [
  "I'm an AI engineer and founder currently preparing for the Master's in Engineering AI (MSEAI) at Carnegie Mellon University Africa, one of the most selective AI programs in the world. I hold a First-Class Honours degree in Information Technology from Kenya Highlands University, where I was awarded for Academic Excellence.",
  "My work sits at the intersection of AI, education, and applied data science. I founded Edurown, a direct academic and technical writing platform that removes the middleman and pays writers fairly. I'm currently building AlphaStreamTrader, a Deriv-integrated trading platform that gives retail traders algorithmic strategies, a risk shield, and copy-trading without the complexity of raw APIs.",
  "Before this, I built things that earned their place: a PHP/MySQL diagnosis reporting system backed by both my university panel and RVIL-Kericho, digitized 2,000+ documents spanning three decades, and led a shoe-distribution program that reached 9,457 pupils in Kitui County.",
];
export const skills = ["Python", "TypeScript", "React", "Next.js", "Tailwind", "SQL", "TensorFlow", "Scikit-learn"];
export const experience = [
  { role: "Founder & Lead", org: "Edurown, Remote / Global", date: "2024 - Present", body: "Built and launched Edurown, a direct academic and technical writing platform serving students and professionals worldwide. Removed the opaque middleman layers common in the academic support industry, where writers typically receive a fraction of what clients pay and quality suffers as a result. Designed the full product (brand, site, and service workflow) on React 19, TanStack Start, and Tailwind v4." },
  { role: "Freelance IT & AI Consultant", org: "Self-Employed, Remote", date: "2020 - Present", body: "Delivered research, data analysis, technical writing, and AI-assisted solutions for international clients across freelance platforms. Built automation workflows, web content, and data-driven reports. Provided remote IT support, troubleshooting, and digital consulting." },
  { role: "Technical Support Assistant & Tutor (Volunteer)", org: "Arizona International College, Kenya", date: "2022 - Present", body: "Performed network troubleshooting, configuration, and computer setup across office and classroom environments. Supported faculty and students on hardware, software, and connectivity issues. Tutored students in web design and IT fundamentals." },
  { role: "IT Industrial Attachment", org: "Kenya Regional Veterinary Investigation Laboratory (RVIL-Kericho)", date: "2021 - 2022", body: "Developed the Diagnosis Reporting System in PHP and MySQL, a system that would help farmers download diagnostic reports remotely. Backed by both the university panel and the lab it was built for. Digitized 2,000+ historical documents (1990-2023) into active systems. Maintained cloud (Silab) and local (Epilab) platforms to ensure continuous uptime." },
  { role: "Project Manager (Volunteer)", org: "Viatu Shuleni, Kitui County, Kenya", date: "May 2022 - May 2023", body: "Led distribution of 7,986 pairs of shoes across rural schools, improving education access for 9,457 pupils. Coordinated computer literacy training reaching 2,513 youth. Built partnerships with schools and community stakeholders for long-term sustainability." },
];
export const projects = [
  { name: "AlphaStreamTrader", slug: "alphastreamtrader", badge: "LIVE", tag: "FINTECH", link: "https://alphastreamtrader.vercel.app/", body: "Deriv-powered algorithmic trading platform with real-time WebSocket market data, risk-shield logic, and copy trading via cTrader and Nakala. Built as a third-party interface on Deriv's regulated infrastructure.", stack: "Next.js · TypeScript · Tailwind · WebSocket · Deriv API" },
  { name: "Edurown", slug: "edurown", badge: "LIVE", tag: "EDTECH · FOUNDER", link: "https://edurown.vercel.app/", body: "Direct academic and technical writing platform that connects students with expert writers worldwide, with no middlemen and no bidding pools. Built from brand to production on a modern SSR stack.", stack: "React 19 · TanStack Start · TanStack Router · Tailwind v4 · shadcn/ui · Nitro" },
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
