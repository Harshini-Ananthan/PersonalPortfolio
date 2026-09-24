"use client";

import { useState, useRef, useEffect } from "react";

const navItems = [
  ["Experience", "#experience"],
  ["Achievements", "#achievements"],
  ["Projects", "#project"],
  ["Skills", "#skill"],
  ["Contact", "#contact"]
];

const education = [
  {
    year: "2024 - 2028",
    detail: "Sri Eshwar College of Engineering, Coimbatore.",
    grade: "CGPA : 8.24"
  },
  {
    year: "2024",
    detail: "12th Vivek Vidyalaya Matric. Higher Secondary School, Kinathukadavu.",
    grade: "Grade : 93%"
  },
  {
    year: "2022",
    detail: "10th Vivek Vidyalaya Matric. Higher Secondary School, Kinathukadavu.",
    grade: "Grade : 96.4%"
  }
];

const certifications = [
  ["Udemy", "Mastering Data Structures & Algorithms using C and C++", "https://www.udemy.com/certificate/UC-281545df-df93-449a-8e23-f46392588579/"],
  ["Udemy", "Python Programming Masterclass", "https://www.udemy.com/certificate/UC-53b8b9f4-3ee8-4c67-9314-1f91e885d324/"],
  ["LinkedIn", "Programming Foundations: Fundamentals", "https://www.linkedin.com/learning/certificates/9db0a81bdefc839446fb26ec27b3ac8f8fff51cab04486c5a9cb19ce1ba29576"],
  ["LinkedIn", "Introduction to Career Skills in Software Development", "https://www.linkedin.com/learning/certificates/3a795cf346ba906ea05eca2460bc86e5e467e3e311a9d9c8eaf78fce1a3afc9b"],
  ["Sololearn", "Introduction to HTML", "https://api2.sololearn.com/v2/certificates/CC-HKTYP6H0/image/png?t=638677130266604880"],
  ["Sololearn", "Introduction to C", "https://api2.sololearn.com/v2/certificates/CC-WPOGDOPB/image/png?t=638688185049765070"]
];

const projects = [
  {
    image: "/images/navixai.png",
    alt: "NavixAI Platform",
    category: "LOGISTICS PLATFORM",
    title: "NavixAI",
    description: "Developed an AI-powered logistics safety platform that enables collaborative risk reporting, dynamic risk-aware routing, live fuel intelligence, convoy safety, and SOS-based fleet coordination in real time.",
    tags: ["Next.js", "TypeScript", "Firebase", "Gemini API"]
  },
  {
    image: "/images/foundit.png",
    alt: "FoundIt Platform",
    category: "WEB APPLICATION",
    title: "FoundIt",
    description: "Developed a MERN-based web app for campus lost-and-found management with item posting, browsing, and claiming features. Enabled real-time updates and secure access using Firebase.",
    tags: ["MongoDB", "Express.js", "React.js", "Firebase"]
  },
  {
    image: "/images/loan-approval.png",
    alt: "Loan Approval System",
    category: "MACHINE LEARNING",
    title: "Loan Approval Prediction System",
    description: "Built a machine learning model to predict loan approvals using Random Forest. Handled class imbalance with SMOTE and deployed via a Flask web interface.",
    tags: ["Python", "Flask", "Scikit-learn", "Random Forest"]
  }
];

const skillGroups = [
  [
    "Languages",
    [
      { name: "C", icon: "devicon-c-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" }
    ]
  ],
  [
    "Technologies/Frameworks",
    [
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwindcss", icon: "devicon-tailwindcss-original" }
    ]
  ],
  [
    "Database",
    [
      { name: "MySQL", icon: "devicon-mysql-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" }
    ]
  ],
  [
    "Tools",
    [
      { name: "Canva", icon: "devicon-canva-original" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "PowerBI", icon: "devicon-powerbi-original" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Firebase", icon: "devicon-firebase-plain" },
      { name: "Supabase", icon: "devicon-supabase-plain" }
    ]
  ],
  [
    "Core Concepts",
    [
      { name: "DSA", icon: "devicon-c-plain" },
      { name: "OOP", icon: "devicon-cplusplus-plain" },
      { name: "DBMS", icon: "devicon-mysql-original" }
    ]
  ]
];

const internships = [
  {
    role: "Full Stack Developer Intern",
    company: "EFIQ Solutions",
    year: "2026",
    description: "Developed a professional company website for EFIQ Solutions, showcasing services, brand identity, and optimized user experience.",
    bullets: [
      "Developed EFIQ Poll, a poll management and tracking platform.",
      "Built Admin/Super Admin web portal.",
      "Developed a mobile application for users."
    ]
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Better Tomorrow",
    year: "2026",
    description: "Developed Femine, a full-stack women's clothing e-commerce platform using MongoDB, Express.js, React.js, and Node.js.",
    bullets: [
      "Implemented secure authentication system.",
      "Built product listing and shopping cart features.",
      "Designed a responsive user interface."
    ]
  }
];

const achievementCards = [
  {
    title: "",
    image: "/images/achievement.png",
    items: [
      <span key="1">Top 106 teams globally in <strong>Google Solution Challenge 2026</strong> from 6,700+ protoype submissions</span>,
      <span key="2"><strong>Semi-Finalist</strong> in Guidewire DEVTrails Hackathon 2026</span>,
      <span key="3">Top 20 Finalist in <strong>Praxis 2.0 (GDG)</strong> - Out of 1,600+ participants</span>,
      <span key="4"><strong>Winner</strong> of Freshathon 2025 (Project Expo 3.0)</span>,
      <span key="5"><strong>Winner</strong> of Createathon (Website building)</span>
    ]
  },
  {
    title: "CODING PROFILES",
    image: "/images/coding-profiles.png",
    items: [
      <span key="1"><strong>Leetcode:</strong> Max Rating : 1490 | Global Rank : 621,382 | Problems Solved : 230+</span>,
      <span key="2"><strong>Skill Rack:</strong> Problems Solved : 1186 | Received 11 certificates | 377 Bronzes</span>,
      <span key="3"><strong>Codechef:</strong> Global Rank : 33165 | Problems Solved : 156</span>
    ]
  }
];

const aboutTabs = [
  ["education", "Education"],
  ["certifications", "Certifications"]
];

const roles = ["Student", "Full Stack Developer", "MERN Stack Developer", "Cloud Engineer"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("education");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const delay = isDeleting ? 50 : currentText === currentRole ? 2000 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? currentRole.substring(0, currentText.length - 1)
            : currentRole.substring(0, currentText.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased overflow-clip selection:bg-accent selection:text-background">
      {/* NAVIGATION */}
      <div className="sticky top-0 z-50 bg-dark border-b border-border/20 py-3">
        <div className="mx-auto w-full max-w-[90%] px-4">
          <nav className="flex flex-wrap items-center justify-between gap-5">
            <div className="text-3xl font-dancing font-bold text-accent">
              Harshini Ananthan
            </div>
            <ul className="flex flex-wrap items-center gap-x-12 gap-y-4">
              {navItems.map(([label, href]) => (
                <li key={label} className="list-none">
                  <a
                    href={href}
                    className="group relative text-xs uppercase tracking-widest text-[#F2EDE2]/80 font-bold hover:text-[#F2EDE2] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="header" className="relative min-h-[calc(100vh-88px)] flex items-center border-b border-border">
        <div className="mx-auto w-full max-w-[90%] px-4 flex flex-col-reverse lg:flex-row gap-0 h-full">
          {/* Left Typography Area */}
          <div className="lg:w-[60%] flex flex-col justify-center py-12 lg:pr-20">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-accent mb-6">
              Software Developer Portfolio
            </p>
            <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-dancing font-bold leading-[1.1] text-dark break-words">
              Harshini<br />Ananthan
            </h1>
            <div className="mt-8 flex items-center text-lg md:text-2xl font-medium text-muted h-[1.2em]">
              <span>{currentText}</span>
              <span className="w-1.5 h-[0.9em] bg-accent ml-2 animate-pulse"></span>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              <a href="#project" className="border border-dark bg-dark text-background px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-burgundy hover:border-burgundy transition-colors duration-300">
                View Projects
              </a>
              <a href="/images/24CS084 Harshini A.pdf" download className="border border-border bg-transparent text-foreground px-10 py-4 text-xs font-bold uppercase tracking-widest hover:border-dark hover:text-dark transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>
          {/* Right Visual Block */}
          <div className="lg:w-[40%] bg-dark min-h-[40vh] lg:min-h-full relative overflow-hidden flex items-center justify-center p-10">
             <div className="absolute inset-0 opacity-20 bg-[url('/images/photo.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
             <div className="relative z-10 text-center border border-border/20 p-12 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest text-[#F2EDE2]/70">Selected Works</p>
                <h2 className="text-4xl text-[#F2EDE2] font-extrabold mt-2 tracking-tighter">2026</h2>
             </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 border-b border-border min-h-[calc(100vh-88px)] flex items-center">
        <div className="mx-auto w-full max-w-[90%] px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[40%] relative">
               <div className="border border-border p-3">
                 <img src="/images/photo.jpeg" alt="Harshini" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
               <div className="absolute -left-4 -top-8 bg-background px-2">
                 <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent">About Me</h2>
               </div>
            </div>
            <div className="lg:w-[60%] flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark leading-none tracking-tighter mb-10">
                Turning ideas into impactful web applications.
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium mb-10">
                I build full-stack solutions using React, Next.js, Node.js, and modern cloud technologies. 
                From AI-powered platforms to real-time web applications, I enjoy creating products that solve meaningful problems.
                Always learning, always building, and always striving to write better code.
              </p>

              {/* Minimal Tabs for Education/Certifications */}
              <div className="border-t border-border pt-10">
                <div className="flex gap-10 mb-10">
                  {aboutTabs.map(([tab, label]) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-colors ${activeTab === tab ? "border-accent text-dark" : "border-transparent text-muted hover:text-dark"}`}
                      type="button"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="min-h-[200px]">
                  {activeTab === "education" && (
                    <ul className="flex flex-col gap-8">
                      {education.map((item, i) => (
                        <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                          <span className="text-sm font-bold text-accent min-w-[120px]">{item.year}</span>
                          <div>
                            <p className="text-lg font-bold text-foreground">{item.detail}</p>
                            <p className="text-sm text-muted mt-1">{item.grade}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "certifications" && (
                    <ul className="flex flex-col gap-6">
                      {certifications.map(([issuer, title, link], i) => (
                        <li key={i} className="group flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6">
                          <div>
                            <span className="text-xs font-bold tracking-widest uppercase text-accent">{issuer}</span>
                            <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-burgundy transition-colors">{title}</h3>
                          </div>
                          <a href={link} target="_blank" rel="noreferrer" className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-muted hover:text-dark">
                            View &#8594;
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="bg-dark text-[#F2EDE2] py-16 border-b border-border min-h-[calc(100vh-88px)] flex items-center">
        <div className="mx-auto w-full max-w-[90%] px-4">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[#F2EDE2]/20 pb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#F2EDE2]/60 uppercase mb-4 font-bold">Career Timeline</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Experience</h1>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-[1px] bg-[#F2EDE2]/20"></div>
            
            <div className="space-y-16">
              {internships.map((internship, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Timeline marker area */}
                  <div className="md:w-[200px] flex-shrink-0 relative">
                     <div className="hidden md:block absolute right-[-4px] top-2 w-2 h-2 rounded-full bg-accent"></div>
                     <span className="text-3xl font-extrabold tracking-tighter text-[#F2EDE2]/80 block mb-2">{internship.year}</span>
                     <span className="text-xs uppercase tracking-widest font-bold text-accent">{internship.company}</span>
                  </div>
                  
                  {/* Content area */}
                  <div className="flex-1 pl-6 md:pl-0 border-l md:border-l-0 border-[#F2EDE2]/20 relative">
                    <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent"></div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{internship.role}</h2>
                    <p className="text-lg text-[#F2EDE2]/70 leading-relaxed mb-8 max-w-3xl">
                      {internship.description}
                    </p>
                    <ul className="space-y-4 max-w-3xl">
                      {internship.bullets.map((bullet, i) => (
                        <li key={i} className="flex text-[#F2EDE2]/80 border-t border-[#F2EDE2]/10 pt-4">
                          <span className="text-accent text-xs font-bold mr-4 mt-1">0{i+1}</span>
                          <span className="text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="project" className="py-16 border-b border-border min-h-[calc(100vh-88px)] flex items-center">
        <div className="mx-auto w-full max-w-[90%] px-4">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-bold">Selected Work</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tighter">Projects</h1>
            </div>
          </div>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-12 items-center`}>
                
                {/* Image Area */}
                <div className="w-full lg:w-[60%] relative group">
                  <div className="absolute inset-0 bg-accent translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>
                  <div className="relative border border-border bg-background overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.alt} 
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                    />
                  </div>
                </div>

                {/* Text Area */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <span className="text-6xl font-extrabold text-border opacity-50 mb-4 tracking-tighter">0{idx + 1}</span>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">{project.category}</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tighter">{project.title}</h2>
                  <p className="text-lg text-muted leading-relaxed mb-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="border border-border px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="py-16 border-b border-border bg-[#F5EFE6] min-h-[calc(100vh-88px)] flex items-center">
        <div className="mx-auto w-full max-w-[90%] px-4">
           <div className="mb-12 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tighter">Achievements</h1>
            <div className="w-[1px] h-10 bg-accent mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievementCards.map((card, idx) => (
              <div key={idx} className="group bg-dark rounded-2xl overflow-hidden border border-border/50 hover:border-accent shadow-2xl flex flex-col transition-all hover:-translate-y-2 duration-300">
                <div className="relative h-32 bg-cover bg-center transition-all duration-300 group-hover:brightness-150" style={{ backgroundImage: `url(${card.image})` }}>
                  <div className="absolute inset-0 bg-burgundy/60 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-[#F2EDE2] tracking-widest uppercase">{card.title || "HIGHLIGHTS"}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex text-[#F2EDE2]/80 text-sm leading-relaxed">
                        <span className="mr-3 text-accent font-bold">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skill" className="py-16 border-b border-border min-h-[calc(100vh-88px)] flex items-center">
        <div className="mx-auto w-full max-w-[90%] px-4">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-bold">Capabilities</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tighter">Tech Stack</h1>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-muted mt-6 md:mt-0">{skillGroups.length} Categories</p>
          </div>

          <div className="flex flex-col gap-4">
            {skillGroups.map(([title, skills], index) => (
              <div key={title} className="group bg-dark border border-border/30 py-7 px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-all duration-300 hover:bg-burgundy hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(90,23,27,0.4)] hover:border-accent rounded-2xl cursor-default">
                <div className="flex items-center gap-6 lg:w-[35%] shrink-0">
                  <span className="text-[#F2EDE2]/50 text-sm font-semibold w-6">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-bold text-accent group-hover:text-[#F2EDE2] tracking-wide transition-colors">{title}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6 flex-1 w-full lg:pl-10">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 py-1 text-sm font-medium text-[#F2EDE2]/70 transition-colors"
                    >
                      <i className={`${skill.icon} text-2xl text-accent group-hover:colored group-hover:text-[#F2EDE2] group-hover:drop-shadow-lg transition-all duration-300`} />
                      <span className="text-[15px] text-[#F2EDE2]/70 group-hover:text-[#F2EDE2] transition-colors duration-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-dark text-[#F2EDE2] pt-16 pb-16">
        <div className="mx-auto w-full max-w-[90%] px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-16 border-b border-[#F2EDE2]/20 pb-12">
            <div className="lg:w-[50%]">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[0.9] tracking-tighter mb-12 uppercase">
                Let's Build<br/>
                <span className="text-accent">Something</span><br/>
                Meaningful.
              </h1>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Email</p>
                  <p className="text-xl font-medium">harshiniananthan30@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Phone</p>
                  <p className="text-xl font-medium">9361159306</p>
                </div>
                <div className="pt-6 flex gap-6">
                  <a href="https://www.linkedin.com/in/harshini-ananthan" className="text-xs uppercase tracking-widest font-bold border-b border-accent hover:text-accent transition-colors pb-1">
                    LinkedIn
                  </a>
                  <a href="/images/24CS084 Harshini A.pdf" download className="text-xs uppercase tracking-widest font-bold border-b border-accent hover:text-accent transition-colors pb-1">
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <form action="https://formsubmit.co/harshiniananthan30@gmail.com" method="POST" className="lg:w-[40%] flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-accent">Name</label>
                <input className="w-full bg-transparent border-b border-[#F2EDE2]/20 py-3 text-lg outline-none focus:border-accent transition-colors" type="text" name="name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-accent">Email</label>
                <input className="w-full bg-transparent border-b border-[#F2EDE2]/20 py-3 text-lg outline-none focus:border-accent transition-colors" type="email" name="email" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold text-accent">Message</label>
                <textarea className="w-full bg-transparent border-b border-[#F2EDE2]/20 py-3 text-lg outline-none focus:border-accent transition-colors resize-none" name="message" rows="4" required />
              </div>
              <button className="bg-burgundy text-[#F2EDE2] px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors w-fit mt-4" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-[#F2EDE2]/40">
            <p>&copy; {new Date().getFullYear()} Harshini Ananthan. All Rights Reserved.</p>
            <p className="mt-4 lg:mt-0">Designed with Intent.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
