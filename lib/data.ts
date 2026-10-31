export const site = {
  name: "Stephen Mathenge Kisangi",
  tagline: "Solving problems, always. We're getting there.",
  eyebrow: "First-Class IT Graduate • Founder • Software Engineer",
  roles: ["Founder @ Edurown", "First-Class IT Graduate", "Software Engineer", "Building data-driven software", "Building AI-powered systems", "Full-Stack & Data"],
  sub: "I am a technologist and the Founder of Edurown. I engineer full-stack applications, automate workflows, and transform complex data into actionable insights for global clients.",
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
  "I am an Information Technology professional and entrepreneur. As the founder of Edurown, I lead a platform that delivers high-quality technical consulting, software development, and data analysis for international clients.",
  "My engineering foundation is built on data. I specialize in full-stack web development, Python data analysis, and system automation. I build practical, scalable software, whether that means developing algorithmic trading platforms, creating remote diagnostic reporting systems for agricultural labs, or designing educational tech tools. I focus on engineering solutions that solve real-world efficiency and accessibility problems.",
  "I graduated with First-Class Honours in Information Technology from Kenya Highlands University, named the best student in the School of Computing and Information Science for the 2024 graduating class. Before that, I built things that earned their place: a PHP/MySQL diagnosis reporting system backed by both my university panel and RVIL-Kericho, digitized 2,000+ documents spanning three decades, and led a shoe-distribution program that reached 9,457 pupils in Kitui County.",
];
export const skills = ["Python", "TypeScript", "React", "Next.js", "Tailwind", "SQL", "TensorFlow", "Scikit-learn", "Pandas", "Excel"];
export const experience = [
  { role: "Founder & Developer", org: "Edurown (Self-Employed), Remote / Global", date: "Jan 2024 - Present", body: "Founded and manage a technical consultancy delivering software development, data analysis, and AI-assisted projects for global clients. Engineered and deployed full-stack web applications and automated workflows, and delivered 60+ client projects across data analysis, research, and automation. Provided remote IT consulting, technical troubleshooting, and digital solutions across multiple industries." },
  { role: "Technical Support Assistant & Tutor (Volunteer)", org: "Arizona International College, Kenya", date: "June 2024 - September 2024", body: "Performed network troubleshooting, configuration, and computer setup across office and classroom environments. Supported faculty and students on hardware, software, and connectivity issues. Tutored students in web design and IT fundamentals, supporting academic growth and technical confidence." },
  { role: "IT Industrial Attachment", org: "Kenya Regional Veterinary Investigation Laboratory (RVIL-Kericho)", date: "May 2023 - August 2023", body: "Developed the Diagnosis Reporting System in PHP and MySQL, a system that would help farmers download diagnostic reports remotely. Backed by both the university panel and the lab it was built for. Digitized 2,000+ historical documents (1990-2023) into active systems. Maintained cloud (Silab) and local (Epilab) platforms to ensure continuous uptime." },
  { role: "Project Manager (Volunteer)", org: "Viatu Shuleni, Kitui County, Kenya", date: "May 2022 - May 2023", body: "Led distribution of 7,986 pairs of shoes across rural schools, improving education access for 9,457 pupils. Planned and coordinated computer literacy training reaching 2,513 youth. Built partnerships with schools and community stakeholders for long-term sustainability, and supported early-stage integration of digital learning tools in underserved schools." },
];
export const projects = [
  { name: "AlphaStreamTrader", slug: "alphastreamtrader", badge: "LIVE", tag: "FINTECH", link: "https://alphastreamtrader.vercel.app/", body: "Algorithmic trading platform on Deriv's infrastructure, featuring real-time WebSocket market data, risk-shield logic, and copy-trading via cTrader and Nakala.", stack: "Next.js · TypeScript · Tailwind · WebSocket · Deriv API" },
  { name: "Edurown", slug: "edurown", badge: "LIVE", tag: "CONSULTING · FOUNDER", link: "https://edurown.vercel.app/", body: "Direct technical and data-analysis consulting platform, eliminating middlemen to deliver expert software solutions.", stack: "React 19 · TanStack Start · TanStack Router · Tailwind v4 · shadcn/ui · Nitro" },
  { name: "Diagnosis Reporting System", slug: "diagnosis-reporting-system", badge: "BUILT", tag: "", link: "", body: "Remote data-access system for veterinary lab diagnostics, designed to help rural farmers and improve agricultural efficiency. Backed by the university panel and the lab it was built for.", stack: "PHP · MySQL · Apache" },
  { name: "Lung Cancer Data Analysis", badge: "DATA", tag: "", link: "", body: "Python/Pandas analysis of 10,000+ patient records, identifying risk factors through advanced data visualization.", stack: "Python · Pandas · Scikit-learn · Matplotlib" },
  { name: "Biometric Tracking Research", slug: "biometric-attendance", badge: "RESEARCH", tag: "", link: "", body: "Academic research on web-based biometric systems to minimize absenteeism in Kenyan high schools.", stack: "Python · Web · Biometrics" },
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
