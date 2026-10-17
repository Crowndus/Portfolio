export type Case = { slug: string; name: string; tagline: string; link: string; role: string; timeline: string; problem: string[]; approach: string[]; stack: string[]; flow: string[]; impact: string[]; next: string; ahead?: string[]; highlight?: string };
export const cases: Record<string, Case> = {
  edurown: {
    slug: "edurown", name: "Edurown", tagline: "Academic writing, without the middleman.", link: "https://edurown.vercel.app/", role: "Founder & Lead", timeline: "2024 - Present",
    problem: [
      "The academic support industry is built on layers. Clients pay a premium, writers see a fraction of it, and quality drops every time work passes through another hand. Edurown removes every layer between the two: direct communication, fair pay, and consistent quality from start to finish.",
      "Bidding pools push work toward the cheapest offer instead of the best fit, and students rarely know who is actually doing the work. Writers carry the cost of that opacity.",
    ],
    approach: ["Connect students directly with expert writers, with no middlemen and no bidding pools", "Pay writers fairly by removing the intermediary layers", "Design the full product myself: brand, site, and service workflow", "Build on a modern SSR stack: React 19, TanStack Start and Router, Tailwind v4, shadcn/ui, Nitro", "Ship and host on Vercel"],
    stack: ["React 19", "TanStack Start", "TanStack Router", "Tailwind v4", "shadcn/ui", "Nitro"],
    flow: ["Client", "TanStack Start (SSR)", "Nitro server", "Vercel"],
    impact: ["Live in production, serving students and professionals worldwide", "A complete product shipped from brand to production"], next: "alphastreamtrader",
  },
  alphastreamtrader: {
    slug: "alphastreamtrader", name: "AlphaStreamTrader", tagline: "Algorithmic trading without the API complexity.", link: "https://alphastreamtrader.vercel.app/", role: "Builder", timeline: "Live, in active development",
    problem: [
      "Most retail traders lose because they guess. AlphaStreamTrader sits on Deriv's regulated infrastructure and gives them algorithmic strategies, a risk shield, and copy-trading, without the complexity of raw APIs.",
      "Raw trading APIs are powerful but hard to use well. Retail traders usually lack ready-made strategies, built-in risk controls, or an easy way to follow experienced traders.",
    ],
    approach: ["Build as a third-party interface on Deriv's regulated infrastructure", "Stream real-time market data over WebSocket", "Offer algorithmic strategies out of the box", "Add risk-shield logic to protect traders from bad positions", "Support copy trading via cTrader and Nakala"],
    stack: ["Next.js", "TypeScript", "Tailwind", "WebSocket", "Deriv API"],
    flow: ["Trader", "Next.js interface", "Strategies + risk shield", "Deriv API (WebSocket)"],
    impact: ["Live in production on Vercel", "Strategies, risk control, and copy trading in a single interface for retail traders"], next: "diagnosis-reporting-system",
  },
  "diagnosis-reporting-system": {
    slug: "diagnosis-reporting-system", name: "Diagnosis Reporting System", tagline: "Bringing lab results home to farmers.", link: "", role: "Developer, IT Industrial Attachment", timeline: "2021 - 2022", highlight: "Backed by my university panel and the lab it was built for",
    problem: [
      "While attached at the Regional Veterinary Investigation Laboratory (RVIL) in Kericho, I noticed farmers were spending a lot of money and time just to get their results. Many travelled back to the lab from places like Kisumu, Nakuru and Kisii to collect manually printed reports for the specimens they had brought in, from carcasses to dogs, cows, cats, donkeys and poultry.",
      "It was a heavy cost for a report that could reach them wherever they are. I spotted that gap and designed a solution as part of my bachelor's degree in IT at Kenya Highlands University.",
    ],
    approach: ["A Diagnosis Reporting System in PHP and MySQL that would help farmers download their reports as soon as a diagnosis is finished", "Vet doctors would run it as admins, so the people who complete the diagnosis are the ones who release the report", "It would cut travel, cost and waiting for farmers, and help the lab with record keeping and day-to-day efficiency", "During the same attachment, I also digitized 2,000+ historical documents (1990-2023) and helped maintain the cloud (Silab) and local (Epilab) platforms"],
    stack: ["PHP", "MySQL", "Apache"],
    flow: ["Vet doctor (admin)", "Diagnosis Reporting System", "MySQL records", "Farmer downloads report"],
    ahead: ["Pull the details straight from Epilab, the locally hosted system, so reports carry comprehensive information", "Add the vet doctors' directives, measures and precautions for the rest of the flock or herd after a diagnosis", "Synchronize and streamline the systems across the whole organisation, since Silab already connects investigation laboratories around the country"],
    impact: ["Would help farmers download their reports remotely instead of travelling back to the lab", "Would help the lab keep better records and run its day-to-day operations more efficiently"], next: "biometric-attendance",
  },
  "biometric-attendance": {
    slug: "biometric-attendance", name: "Biometric Tracking Research", tagline: "Every student, every morning, on the record.", link: "", role: "Researcher", timeline: "2024", highlight: "Grounded in a real school case study, backed by my university panel",
    problem: [
      "In high school I noticed that many schools, especially day schools, struggle with late coming and absenteeism. Students skip school or arrive late, which hurts their performance, and being unmonitored with so much freedom can expose them to bad peer pressure and even drug abuse.",
      "I thought a biometric system could help. This was my partial fulfilment for my bachelor's degree at Kenya Highlands University, with St. Augustine Mlolongo High School as the case study.",
    ],
    approach: ["Every morning, a student would scan their fingerprint and the system would record their details with the date and time, for example that Stephen Mathenge Kisangi has arrived", "When the student leaves in the evening, the scan would record the departure time and close that day's record until the next day", "In the evening, the system would message the parent or guardian with the student's name and admission number, plus the time they arrived and the time they left", "The case study looked at feasibility, privacy, and administrative adoption in low-resource school environments"],
    stack: ["Python", "Web", "Biometrics"],
    flow: ["Student scans fingerprint", "Time-stamped record", "Database", "Message to parent or guardian"],
    impact: ["It would reduce lateness and absenteeism in day schools", "Parents and guardians would get a daily record of when their child arrived and left", "It would help school management, discipline, and the development and wellbeing of students", "Part of the research behind my First-Class Honours degree"], next: "edurown",
  },
};
