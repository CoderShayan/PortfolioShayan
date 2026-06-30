import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portraitAsset from "@/assets/Shayan.png";
import favicon from "@/assets/fav.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohd Shayan Anwar · Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mohd Shayan Anwar - Web Developer building responsive, performant websites and digital products from Kanpur, India.",
      },
      { property: "og:title", content: "Mohd Shayan Anwar | Web Developer" },
      {
        property: "og:description",
        content: "Bento-style portfolio. Web work, projects, and craft.",
      },
      { property: "og:image", content: portraitAsset },
      { name: "twitter:image", content: portraitAsset },
    ],

    links: [
      {
        rel: "icon",
        href: favicon,
        type: "image/png",
      },
    ],
  }),

  component: Index,
});

const NAV = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

function Index() {
  return (
    <main className="min-h-screen text-foreground">
      <TopBar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Foot />
    </main>
  );
}

/* ─────────────────────────── TOP BAR ─────────────────────────── */
function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-[#1a1a1a]/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-3.5 sm:px-8 sm:py-4">
        <a href="#top" className="flex items-center gap-2.5 group">

          <span className="font-display text-[15px] sm:text-base font-medium tracking-tight">
            Shayan<span className="text-ember">Portfolio</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-white/5 hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ember px-4 py-2 text-xs font-medium text-[#1a1a1a] transition-transform hover:scale-[1.02]"
        >
          Let's talk →
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────── HERO (BENTO) ─────────────────────────── */
function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1400px] px-4 pt-6 pb-10 sm:px-8 sm:pt-10">
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {/* Big intro card */}
        <div className="bento-card col-span-12 lg:col-span-8 p-6 sm:p-10 relative overflow-hidden">
          <div className="relative">
            <div className="flex items-center gap-2 font-mono-ed text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
              Available for work · 2026
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              Building <span className="text-ember">fast</span>,<br />
              responsive websites<br />
              that actually <em className="font-display not-italic underline decoration-ember decoration-4 underline-offset-[6px]">ship</em>.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              I'm <span className="text-foreground">Mohd Shayan Anwar</span>, a web developer passionate about building modern websites that are fast, user-friendly, and designed to deliver real value.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-ember-soft">
                See selected work →
              </a>
              <a href="#contact" className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-ember hover:text-ember">
                Start a project
              </a>
            </div>
          </div>
        </div>

        {/* Portrait card */}
        <div className="bento-card col-span-12 lg:col-span-4 p-3 relative overflow-hidden">
          <div className="relative h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[100%] overflow-hidden rounded-xl bg-[#262626]">
            <img
              src={portraitAsset}
              alt="Portrait of Mohd Shayan Anwar"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ember">Plate 01 · Self</div>
              <div className="mt-1 font-display text-2xl">Mohd Shayan Anwar</div>
              <div className="text-sm text-ink-soft">Web Developer · Kanpur, IN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MARQUEE ─────────────────────────── */

function Marquee() {
  const items = ["Supabase", "Python", "Java", "C / C++", "Git", "GitHub", "Linux", "Figma", "Canva", "MS Office"];
  const row = [...items, ...items];
  return (
    <div className="my-6 border-y border-white/5 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-4 font-display text-lg">
        {row.map((t, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 text-ink-soft">
            {t}
            <span className="text-ember">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── ABOUT ─────────────────────────── */
function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="01" kicker="About" />
      <div className="mt-8 grid grid-cols-12 gap-3 sm:gap-4">
        <div className="bento-card col-span-12 lg:col-span-7 p-7 sm:p-10">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em]">
            Hi...! I build careful, <span className="text-ember">production-grade</span> websites for small businesses.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            I work where craft meets pragmatism: responsive layouts that behave, interfaces a client can actually use, and code that solves the real problem in front of it. Performance, usability, and satisfaction first.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Currently freelancing and shipping side projects.
          </p>
        </div>
        <div className="bento-card col-span-12 lg:col-span-5 p-7 sm:p-10">
          <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">Quick facts</div>
          <dl className="mt-4 divide-y divide-white/5">
            {[
              ["Based in", "Kanpur, U.P."],
              ["Role", "Web Developer"],
              ["Status", "Open to work"],
              ["Education", "B.C.A · CSJM Univ."],

            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between py-3">
                <dt className="text-sm text-ink-soft">{k}</dt>
                <dd className="text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SKILLS (BENTO) ─────────────────────────── */
function Skills() {
  const groups = [
    { title: "Programming", items: ["Python", "Java", "C", "C++"], span: "lg:col-span-4" },
    { title: "Web", items: ["HTML", "CSS", "JavaScript", "React"], span: "lg:col-span-4" },
    { title: "Ui/Ux Design", items: ["Figma", "Canva"], span: "lg:col-span-3" },
    { title: "Database", items: ["SQLite", "Supabase", "PostgreSQL"], span: "lg:col-span-4" },
    { title: "OS", items: ["Windows", "Linux (Ubuntu)"], span: "lg:col-span-3" },
    { title: "Tools", items: ["Git", "GitHub", "VS Code"], span: "lg:col-span-4" },
    { title: "OOPs Concepts", items: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], span: "lg:col-span-6" },
  ];
  const soft = ["Problem Solving", "Team Collaboration", "Adaptability", "Communication", "Time Management", "Quick Learning", "Attention to Detail"];
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="02" kicker="Skills" />
      <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        A small, sharp <span className="text-ember">toolkit</span>.
      </h2>

      <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
        {groups.map((g) => (
          <div key={g.title} className={`bento-card bento-card-hover col-span-12 sm:col-span-6 ${g.span} p-6`}>
            <div className="flex items-baseline justify-between">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">{g.title}</div>
              <div className="font-mono-ed text-[10px] text-ember">{String(g.items.length).padStart(2, "0")}</div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="ember-glow col-span-12 p-7 sm:p-10">
          <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ember">Soft skills</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {soft.map((s) => (
              <span key={s} className="rounded-full border border-white/15 bg-[#1a1a1a]/40 px-3.5 py-1.5 text-sm">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROJECTS ─────────────────────────── */
function Projects() {
  const projects = [
    {
      n: "01",
      title: "Shri Sai Car",
      sub: "Used-car marketplace, live in production.",
      stack: ["Vite", "JavaScript", "HTML", "CSS", "Supabase"],
      points: [
        "Production platform for buying & selling used vehicles.",
        "Listings, inventory management, search & filtering.",
        "Clean responsive UI with Supabase backend & database.",
      ],
      live: "https://shrisaicar.in",
      code: null,
    },
    {
      n: "02",
      title: "Stock Management System",
      sub: "Desktop inventory app for small business.",
      stack: ["Python", "Tkinter", "SQLite"],
      points: [
        "Real-time stock monitoring & product tracking.",
        "Add, update, delete, search, manage stock.",
        "Friendly GUI improving inventory accuracy.",
      ],
      live: null,
      code: "https://github.com/CoderShayan/Stock-Management-System",
    },
  ];
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="03" kicker="Selected Work" />
      <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
        Things I've <span className="text-ember">shipped</span>, lately.
      </h2>

      <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
        {projects.map((p) => (
          <article key={p.title} className="bento-card bento-card-hover col-span-12 lg:col-span-6 overflow-hidden flex flex-col">
            <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-[#202020]">
              <ProjectMock variant={p.n} />
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ember">Project · {p.n}</div>
                {p.live && <span className="flex items-center gap-1.5 font-mono-ed text-[10px] uppercase tracking-[0.2em] text-ink-soft"><span className="h-1.5 w-1.5 rounded-full bg-ember" />Live</span>}
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{p.sub}</p>
              <ul className="mt-5 space-y-2 text-[14px] text-ink-soft">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5"><span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ember" />{pt}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono-ed text-[10px]">{s}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full bg-ember px-4 py-2 text-xs font-medium text-[#1a1a1a] hover:bg-ember-soft">
                    Visit live ↗
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-xs hover:border-ember hover:text-ember">
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectMock({ variant }: { variant: string }) {
  if (variant === "01") {
    return (
      <div className="h-full w-full p-5">
        <div className="flex items-center justify-between font-mono-ed text-[10px] text-ink-soft">
          <span>shrisaicar.in</span><span className="text-ember">●●●</span>
        </div>
        <div className="mt-3 font-display text-2xl">Find your next ride.</div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-md bg-[#333333] relative overflow-hidden border border-white/5">
              <div className="absolute bottom-1 left-1 rounded bg-ember/90 px-1.5 py-0.5 text-[8px] text-[#1a1a1a] font-medium">CAR {i+1}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="h-full w-full p-5 font-mono-ed text-[11px]">
      <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-3">
        <div className="text-ink-soft uppercase tracking-[0.2em] text-[9px]">Stock Manager</div>
        <table className="mt-3 w-full text-left text-[10px]">
          <thead className="border-b border-white/10 text-ink-soft">
            <tr><th className="py-1">SKU</th><th>Item</th><th>Qty</th></tr>
          </thead>
          <tbody>
            {[["001","Bolt M6",240],["002","Wrench",18],["003","Hinge",92],["004","Bracket",46]].map((r,i)=>(
              <tr key={i} className="border-b border-white/5"><td className="py-1">{r[0]}</td><td>{r[1]}</td><td className="text-ember">{r[2]}</td></tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex gap-1.5">
          {["+ Add","Edit","Delete"].map(b=>(<span key={b} className="rounded border border-white/15 px-2 py-0.5 text-[9px]">{b}</span>))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── EXPERIENCE ─────────────────────────── */
function Experience() {
  const items = [
    {
      yr: "Dec 2025 - May 2026",
      role: "Web Developer",
      co: "M.R. Digital Solutions",
      where: "Kanpur",
      bullets: [
        "Delivering real-world web projects and practical business solutions.",
        "Responsive, user-friendly websites built to client requirements.",
        "Updates, maintenance and technical implementations.",
      ],
      tags: ["Client Work", "Responsive", "Maintenance"],
    },
    {
      yr: "Nov 2025 · 4 weeks",
      role: "Web Developer Intern",
      co: "CodSoft",
      where: "Remote",
      bullets: [
        "Built responsive web pages with HTML & CSS.",
        "Strengthened front-end fundamentals and UI implementation.",
        "Practical web dev tasks & project-based assignments.",
      ],
      tags: ["HTML", "CSS", "UI"],
    },
  ];
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="04" kicker="Experience" />
      <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        Hours on the <span className="text-ember">bench</span>.
      </h2>
      <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
        {items.map((x) => (
          <article key={x.role + x.co} className="bento-card bento-card-hover col-span-12 lg:col-span-6 p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-medium">{x.role}</h3>
                <div className="text-sm text-ink-soft">{x.co} · {x.where}</div>
              </div>
              <div className="shrink-0 rounded-full bg-ember/15 px-3 py-1 font-mono-ed text-[10px] uppercase tracking-[0.18em] text-ember">{x.yr}</div>
            </div>
            <ul className="mt-5 space-y-2 text-[14px] text-ink-soft">
              {x.bullets.map((b) => (
                <li key={b} className="flex gap-2.5"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />{b}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {x.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono-ed text-[10px]">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── EDUCATION ─────────────────────────── */
function Education() {
  const items = [
    { yr: "2021 - 2024", deg: "B.C.A.", school: "Dr. Virendra Swaroop Institute of Computer Studies", note: "Bachelor of Computer Applications · CSJM University · Kanpur" },
    { yr: "2021", deg: "Intermediate (12th)", school: "Christ Church Intermediate College", note: "Kanpur" },
    { yr: "2019", deg: "High School (10th)", school: "Christ Church Intermediate College", note: "Kanpur" },
  ];
  return (
    <section id="education" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="05" kicker="Education" />
      <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        A studious <span className="text-ember">decade</span>.
      </h2>
      <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
        {items.map((e, i) => (
          <div key={e.deg} className={`bento-card bento-card-hover ${i === 0 ? "col-span-12 lg:col-span-6" : "col-span-12 sm:col-span-6 lg:col-span-3"} p-6`}>
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.2em] text-ember">{e.yr}</div>
            <div className="mt-3 font-display text-xl">{e.deg}</div>
            <div className="mt-1 text-sm text-foreground/80">{e.school}</div>
            <div className="mt-2 text-xs text-ink-soft">{e.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── CERTIFICATIONS ─────────────────────────── */
function Certifications() {
  const certs = [
    { name: "Web Development", id: "F7DB0663", issuer: "CodSoft", yr: "2025", verify: null },
    { name: "AI Literacy", id: "", issuer: "IBM SkillsBuild", yr: "2025", verify: "https://www.credly.com/go/yZ4pG26e" },
    { name: "Python", id: "CSN/23-24/9953", issuer: "Skilling Digitally Xcellent", yr: "2024", verify: null },
    { name: "Java", id: "ST-V-2023/133", issuer: "SK Deft", yr: "2023", verify: null },
    { name: "Certificate in Computing", id: "CIC/607/151", issuer: "Data Point", yr: "2019", verify: null },
  ];
  return (
    <section id="certs" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="06" kicker="Certifications" />
      <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        Receipts of <span className="text-ember">study</span>.
      </h2>
      <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-4">
        {certs.map((c, i) => (
          <div key={c.name} className={`bento-card bento-card-hover col-span-12 sm:col-span-6 ${i === 0 ? "lg:col-span-5" : i === 1 ? "lg:col-span-7" : "lg:col-span-4"} p-6 relative`}>
            <div className="flex items-start justify-between">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">№ {String(i + 1).padStart(2, "0")}</div>
              <div className="rounded-full bg-ember/15 px-2.5 py-0.5 font-mono-ed text-[10px] text-ember">{c.yr}</div>
            </div>
            <div className="mt-4 font-display text-xl">{c.name}</div>
            <div className="mt-1 text-sm text-ink-soft">{c.issuer}</div>
            <div className="mt-4 border-t border-dashed border-white/10 pt-3 font-mono-ed text-[10px] text-ink-soft">
              ID · {c.id}
            </div>
            {c.verify && (
              <a href={c.verify} target="_blank" rel="noreferrer" className="mt-2 inline-block font-mono-ed text-[10px] uppercase tracking-[0.2em] text-ember underline">
                Verify ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-24">
      <SectionLabel n="07" kicker="Contact" />
      <div className="mt-8 grid grid-cols-12 gap-3 sm:gap-4">
        <div className="ember-glow col-span-12 lg:col-span-5 p-7 sm:p-10">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em]">
            Let's build<br />something <span className="text-ember">good</span>.
          </h2>
          <p className="mt-4 text-[15px] text-ink-soft">
            Project enquiries, freelance work, or a hello. I read everything and reply within a working day.
          </p>
          <dl className="mt-8 space-y-3">
            <Row k="Email" v="its.mshayan@gmail.com" href="mailto:its.mshayan@gmail.com" />
            <Row k="LinkedIn" v="/in/mohdshayananwar" href="https://linkedin.com/in/mohdshayananwar" />
            <Row k="GitHub" v="/CoderShayan" href="https://github.com/CoderShayan" />
            <Row k="WhatsApp" v="+91 962 102 1063"  href="https://wa.me/919621021063" />
            <Row k="Place" v="Kanpur, Uttar Pradesh" />
          </dl>
        </div>

        <form
          className="bento-card col-span-12 lg:col-span-7 p-5 sm:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const fd = new FormData(f);
            const name = String(fd.get("name") || "").trim();
            const email = String(fd.get("email") || "").trim();
            const subject = String(fd.get("subject") || "").trim() || "New enquiry from portfolio";
            const kind = String(fd.get("kind") || "").trim();
            const message = String(fd.get("message") || "").trim();
            const body =
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Type: ${kind}\n\n` +
              `${message}\n\n— Sent from ShayanPortfolio`;
            const mailto = `mailto:its.mshayan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
            setSent(true);
          }}
        >
          <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-ink-soft">Enquiry · 07</div>
          <div className="mt-1 font-display text-2xl sm:text-3xl">Tell me what you're building.</div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@studio.com" required />
            <Field label="Subject" name="subject" placeholder="Website redesign, new build…" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <Label>Type of enquiry</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Freelance", "Full-time", "Maintenance", "Just hello"].map((t) => (
                  <label key={t} className="cursor-pointer rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs hover:border-ember has-[:checked]:bg-ember has-[:checked]:text-[#1a1a1a] has-[:checked]:border-ember">
                    <input type="radio" name="kind" value={t} className="hidden" defaultChecked={t === "Freelance"} />{t}
                  </label>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label>Message</Label>
              <textarea
                name="message" rows={4} placeholder="Project, timeline, and budget." required
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 text-[14px] leading-relaxed outline-none focus:border-ember"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">
              {sent ? "Opening your mail app…" : "Opens in your mail app → its.mshayan@gmail.com"}
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-ember-soft"
            >
              {sent ? "Sent ✓" : "Send message →"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        {...rest}
        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] outline-none focus:border-ember"
      />
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">{children}</label>;
}
function Row({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-2">
      <dt className="font-mono-ed text-[10px] uppercase tracking-[0.2em] text-ink-soft">{k}</dt>
      <dd className="truncate text-sm">
        {href ? <a href={href} className="hover:text-ember">{v}</a> : v}
      </dd>
    </div>
  );
}

/* ─────────────────────────── FOOT ─────────────────────────── */
function Foot() {
  return (
    <footer className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-8">
      <div className="bento-card relative overflow-hidden p-7 sm:p-12">
        {/* Big sign-off */}
        <div className="grid grid-cols-12 gap-6 sm:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-ember">— Signing off</div>
            <div className="mt-3 font-display text-[clamp(2.4rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
              Let's build<br />
              something <span className="text-ember">good.</span>
            </div>
            <p className="mt-5 max-w-md text-sm text-ink-soft leading-relaxed">
              Have a project in mind, or just want to say hi? My inbox is always open — I usually reply within a day.
            </p>
            <a
              href="mailto:its.mshayan@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-ember-soft"
            >
              its.mshayan@gmail.com →
            </a>
          </div>

          {/* Sitemap + socials */}
          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">Sitemap</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-foreground/90 hover:text-ember">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">Elsewhere</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="https://github.com/CoderShayan" target="_blank" rel="noreferrer" className="text-foreground/90 hover:text-ember">GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/mohdshayananwar" target="_blank" rel="noreferrer" className="text-foreground/90 hover:text-ember">LinkedIn ↗</a></li>
              <li><a href="https://wa.me/919621021063" className="text-foreground/90 hover:text-ember">WhatsApp ↗</a></li>
              <li><a href="mailto:its.mshayan@gmail.com" className="text-foreground/90 hover:text-ember">Email ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Wordmark — full-bleed, centered */}
        <div className="mt-12 sm:mt-16 border-t border-white/5 pt-8 text-center">
          <div
            aria-hidden
            className="select-none font-display font-semibold leading-[0.85] sm:leading-[0.85] tracking-[-0.05em] text-[clamp(2.6rem,16vw,11rem)] text-foreground/[0.07] overflow-hidden flex flex-col items-center sm:block"
          >
            <span className="block sm:inline">Shayan</span>
            <span className="block text-ember/30 sm:inline">Portfolio</span>
          </div>

          {/* Meta row — centered under wordmark, stacks on mobile */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between font-mono-ed text-[10px] uppercase tracking-[0.25em] text-ink-soft">
            <div>© 2026 Mohd Shayan Anwar · Kanpur, IN</div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
              Available for work
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



/* ─────────────────────────── SHARED ─────────────────────────── */
function SectionLabel({ n, kicker }: { n: string; kicker: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-7 w-7 place-items-center rounded-md bg-ember/15 font-mono-ed text-[10px] text-ember">{n}</span>
      <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] text-ink-soft">{kicker}</span>
      <span className="h-px flex-1 bg-white/5" />
    </div>
  );
}
