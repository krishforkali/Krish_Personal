import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projectsData = [
  {
    id: "01",
    title: "Desktop Assistance",
    subtitle: "Voice-controlled desktop assistant",
    category: "Python // Voice AI",
    status: "Live Project",
    description:
      "Handles voice commands, desktop actions, and conversational replies with a hands-free workflow focus.",
    accent: "from-[#fff4ef] via-[#f6c4b0] to-[#e28ea6]",
    chips: ["Voice", "Desktop", "Assistant", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/krishforkali/DESKTOP-ASSISTANCE" },
      { label: "Email", href: "mailto:919@gamil.com" },
    ],
    preview: ["React Style", "Voice Input", "Desktop Tasks"],
  },
  {
    id: "02",
    title: "Swift Route AI",
    subtitle: "AI route planning with production deploy",
    category: "Web App // AI Routing",
    status: "Production",
    description:
      "A route optimization project with a public repo and live deployment, presented as a polished production build.",
    accent: "from-[#fff7ef] via-[#ffb7d6] to-[#91b9ff]",
    chips: ["AI", "Routes", "Vercel", "Planning"],
    links: [
      { label: "GitHub", href: "https://github.com/krishforkali/swift-route-ai" },
      { label: "Live", href: "https://swift-route-ai.vercel.app" },
      { label: "Email", href: "mailto:919@gamil.com" },
    ],
    preview: ["Live Deploy", "Smart Paths", "Web UI"],
  },
  {
    id: "03",
    title: "Project Under Development",
    subtitle: "Next portfolio release in progress",
    category: "Coming Soon // Build Phase",
    status: "Under Development",
    description:
      "Reserved for the next release. The front stays teaser-driven, while the back holds the same consistent link treatment as the other cards.",
    accent: "from-[#fff3c9] via-[#ffcf80] to-[#ff9db5]",
    chips: ["Soon", "Prototype", "Design", "Build"],
    links: [
      { label: "GitHub", href: "https://github.com/krishforkali" },
      { label: "Production", href: "#" },
      { label: "Email", href: "mailto:919@gamil.com" },
    ],
    preview: ["In Progress", "New Concept", "Next Launch"],
    underDevelopment: true,
  },
];

function PreviewTile({ text, accent }) {
  return (
    <div className="rounded-[18px] border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-xl">
      <div className={`h-1.5 w-14 rounded-full bg-gradient-to-r ${accent} opacity-90`} />
      <p className="mt-4 text-sm font-semibold text-white/88">{text}</p>
    </div>
  );
}

function ProjectCard({ project, index, activeId, setActiveId }) {
  const enterTimer = useRef(null);
  const leaveTimer = useRef(null);
  const isActive = activeId === project.id;

  const handleEnter = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }
    enterTimer.current = setTimeout(() => {
      setActiveId(project.id);
    }, 120);
  };

  const handleLeave = () => {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
    }
    leaveTimer.current = setTimeout(() => {
      setActiveId((current) => (current === project.id ? null : current));
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (enterTimer.current) clearTimeout(enterTimer.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flip-card-shell"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <div className={`project-flip-card ${isActive ? "is-active" : ""}`}>
        <div className="project-card-face project-card-front">
          <div className="project-card-frame" />
          <div className="project-card-surface">
            <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${project.accent}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,250,247,0.34),transparent_46%)]" />
            <div className="absolute inset-0 bg-[url('/herosectiondesktop.jpg')] bg-cover bg-center opacity-[0.22] scale-110" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05)_36%,rgba(26,16,28,0.35)_100%)]" />

            {project.underDevelopment && (
              <div className="absolute left-[-54px] top-7 z-20 rotate-[-16deg] bg-[repeating-linear-gradient(135deg,#1e1714_0_16px,#f6c34d_16px_32px)] px-16 py-2 text-[10px] font-black uppercase tracking-[0.45em] text-[#2a1c10]">
                Under Development
              </div>
            )}

            <div className="relative flex h-full flex-col justify-between p-5">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 font-tech text-[10px] uppercase tracking-[0.28em] text-white/78">
                    {project.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-[1.85rem] font-black leading-[0.95] tracking-[-0.06em] text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/82">{project.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {project.preview.map((item) => (
                  <PreviewTile key={item} text={item} accent={project.accent} />
                ))}
                <div className="rounded-[18px] border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">{project.category}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.chips.slice(0, 2).map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/18 bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white/75"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {project.chips.slice(0, 2).map((chip) => (
                    <span
                      key={chip}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/12 text-[10px] font-bold uppercase text-white/80 backdrop-blur-xl"
                    >
                      {chip.slice(0, 2)}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                  Hover Card
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card-face project-card-back">
          <div className="project-card-frame" />
          <div className="project-card-surface bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05)_28%,rgba(22,15,26,0.7)_100%)]">
            <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${project.accent}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,248,244,0.22),transparent_60%)]" />

            <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
              <p className="font-tech text-[10px] uppercase tracking-[0.35em] text-white/62">
                {project.category}
              </p>
              <h3 className="mt-4 text-[1.9rem] font-black leading-[0.95] tracking-[-0.06em] text-white">
                {project.title}
              </h3>
              <p className="mt-5 max-w-[28ch] text-sm leading-6 text-white/78">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 font-tech text-[10px] uppercase tracking-[0.26em] text-white transition hover:bg-white/18"
                  >
                    <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.accent}`} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const glowY = useTransform(scrollYProgress, [0, 1], [100, -80]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen overflow-hidden px-4 py-24 sm:px-6 md:px-[5%]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4b6a0_0%,#e89a8c_34%,#c9b7b5_60%,#bfa6a0_82%,#a88c86_100%)]" />
        <div className="absolute inset-0 bg-[url('/herosectiondesktop.jpg')] bg-cover bg-center opacity-[0.24] blur-[4px] scale-105" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,245,236,0.38),transparent_30%),radial-gradient(circle_at_top_right,rgba(232,154,140,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,140,134,0.2),transparent_28%)]" />
        <div className="absolute inset-0 bg-white/12 backdrop-blur-[18px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:46px_46px] opacity-14" />
        <motion.div
          style={{ y: glowY }}
          className="absolute left-[10%] top-[14%] h-[340px] w-[340px] rounded-full bg-[#f4b6a0]/25 blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-60, 80]) }}
          className="absolute bottom-[8%] right-[12%] h-[380px] w-[380px] rounded-full bg-[#c9b7b5]/28 blur-[130px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div style={{ y: titleY }} className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/14 px-5 py-2 backdrop-blur-xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/28 text-sm text-white">▶</span>
            <span className="font-tech text-xs uppercase tracking-[0.35em] text-white/90">Projects</span>
          </div>

          <h2 className="mt-10 text-5xl font-black uppercase tracking-[-0.07em] text-white drop-shadow-[0_12px_40px_rgba(255,255,255,0.22)] md:text-8xl">
            My Projects
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-[1.15rem]">
            A cinematic showcase of featured builds, redesigned to blend with the hero section and reveal more detail with a calmer glass-card flip.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
