"use client";
import React from "react";

type Project = {
  id: string;
  icon: string;
  title: string;
  domain: string;
  intro: string;
  problem: string;
  role: string;
  did: string[];
  solution: string[];
  impact: string[];
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

type BadgeProps = {
  children: React.ReactNode;
};

type MiniCardProps = {
  title: string;
  text: string;
};

const projects: Project[] = [
  {
    id: "01",
    icon: "🏦",
    title: "Digital Loan Origination System",
    domain: "Banking",
    intro:
      "Reimagined a branch-heavy, paper-based loan journey into a smoother digital experience by studying the current process, identifying bottlenecks, and defining clear business requirements.",
    problem:
      "Customers had to visit a branch, submit physical documents, and wait days for a decision. Internal teams were re-entering the same data across systems, which slowed the process and increased customer drop-off.",
    role:
      "I worked on this as a Business Analyst, focusing on process discovery, stakeholder conversations, requirement gathering, and translating business pain points into structured solution requirements.",
    did: [
      "Spoke with stakeholders and loan officers to understand the real workflow",
      "Mapped the AS-IS process and identified delays, duplicate work, and friction points",
      "Defined a TO-BE process for a simpler digital journey",
      "Documented requirements, user stories, and acceptance criteria",
    ],
    solution: [
      "Online multi-step loan application",
      "Automated credit-check workflow",
      "Document upload instead of physical paperwork",
      "Dashboard for internal loan review",
      "Customer status tracking and visibility",
    ],
    impact: [
      "Faster turnaround time",
      "Reduced manual work",
      "Better customer experience",
    ],
  },
  {
    id: "02",
    icon: "🛒",
    title: "AI-Based Recommendation System",
    domain: "E-commerce",
    intro:
      "Improved personalization by turning customer behavior insights into clear functional requirements for a recommendation experience that felt more relevant and useful.",
    problem:
      "The platform showed the same products to every customer. That made the shopping journey feel generic and missed opportunities to increase engagement, conversion, and average order value.",
    role:
      "I contributed as a Business Analyst by connecting business goals with user behavior insights and translating those findings into recommendation use cases and product requirements.",
    did: [
      "Reviewed customer browsing, click, and purchase behavior",
      "Identified where product relevance mattered most in the journey",
      "Worked with stakeholders to define recommendation scenarios",
      "Converted those scenarios into usable requirements for the team",
    ],
    solution: [
      "Recommended For You section",
      "Recently Viewed widget",
      "Trending fallback for new users",
      "Personalized email recommendation support",
      "Marketing controls for featured product visibility",
    ],
    impact: [
      "Higher engagement",
      "Improved conversion potential",
      "More relevant shopping experience",
    ],
  },
  {
    id: "03",
    icon: "🚚",
    title: "Real-Time Delivery Tracking System",
    domain: "Logistics",
    intro:
      "Defined requirements for a delivery experience that improved visibility for customers while also helping drivers and dispatchers reduce failed deliveries.",
    problem:
      "Tracking updates were slow, recipients had limited delivery visibility, and drivers often reached a destination without clear instructions. That caused failed deliveries and a frustrating experience on both sides.",
    role:
      "I approached this as a Business Analyst focused on user research, operations flow understanding, and requirement definition for both customer-facing and internal tools.",
    did: [
      "Collected driver feedback to understand day-to-day pain points",
      "Reviewed failed delivery patterns and communication gaps",
      "Mapped the end-to-end flow across recipient, driver, and dispatcher",
      "Defined requirements for tracking, notifications, and proof-of-delivery",
    ],
    solution: [
      "Live GPS tracking",
      "SMS delivery alerts",
      "Recipient delivery preferences",
      "Driver app delivery instructions",
      "Photo proof-of-delivery and dispatcher support tools",
    ],
    impact: [
      "Better delivery visibility",
      "Reduced failed attempts",
      "Improved customer and operations experience",
    ],
  },
];

const skills: string[] = [
  "Requirement Gathering",
  "Stakeholder Analysis",
  "Process Mapping",
  "AS-IS / TO-BE",
  "User Stories",
  "Acceptance Criteria",
  "Agile / Scrum",
  "SQL",
  "Excel",
  "JIRA",
  "Confluence",
  "Power BI",
];

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
      ) : null}
    </div>
  );
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-zinc-200/90 bg-white/90 px-4 py-2 text-sm text-zinc-700 shadow-[0_6px_18px_rgba(24,24,27,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.12)]">
      {children}
    </span>
  );
}

function MiniCard({ title, text }: MiniCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200/90 bg-white/92 p-5 shadow-[0_10px_30px_rgba(24,24,27,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)]">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.08),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_22%),linear-gradient(180deg,#fbfbfd_0%,#f7f7f4_45%,#f5f4f8_100%)] text-zinc-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute top-[14%] right-[-6%] h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl" />
        <div className="absolute bottom-[12%] left-[18%] h-64 w-64 rounded-full bg-fuchsia-300/10 blur-3xl" />
      </div>

      <section className="relative border-b border-zinc-200/80 bg-gradient-to-b from-white/95 to-[#f7f7f4]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Business Analyst Portfolio
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
                Siddhartha Hemchand Nidiginti
              </h1>
              <p className="mt-4 text-lg font-medium text-zinc-700 sm:text-xl">
                Aspiring Business Analyst • Product & Data Enthusiast
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
                I enjoy breaking down business problems into clear requirements,
                practical workflows, and user-focused solutions. My work sits at
                the intersection of business, data, and product across banking,
                e-commerce, and logistics case studies.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-[linear-gradient(135deg,#18181b_0%,#4c1d95_55%,#1f2937_100%)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(76,29,149,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_rgba(76,29,149,0.32)]"
                >
                  View Projects
                </a>
                <a
                  href="mailto:siddharthahemchand@gmail.com"
                  className="rounded-full border border-violet-200 bg-white/90 px-6 py-3 text-sm font-medium text-zinc-900 shadow-[0_8px_24px_rgba(168,85,247,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-white hover:shadow-[0_12px_32px_rgba(168,85,247,0.16)]"
                >
                  Email Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge>Requirement Gathering</Badge>
                <Badge>Process Mapping</Badge>
                <Badge>Stakeholder Analysis</Badge>
                <Badge>Product Thinking</Badge>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border border-zinc-200/90 bg-white/92 p-6 shadow-[0_12px_36px_rgba(24,24,27,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_18px_50px_rgba(168,85,247,0.14)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Quick Profile
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <MiniCard
                    title="Education"
                    text="M.S. in Engineering Management with Data Analytics specialization at California State University, Northridge."
                  />
                  <MiniCard
                    title="Background"
                    text="Background in Business Analytics and Engineering Management with a focus on data-driven problem solving and structured business decision making."
                  />
                </div>
                <div className="mt-5 rounded-3xl border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(250,250,250,1),rgba(245,243,255,0.72))] p-5 shadow-[0_8px_24px_rgba(24,24,27,0.04)]">
                  <p className="text-sm font-semibold text-zinc-900">
                    What I focus on
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Understanding how current systems work, identifying gaps, and
                    shaping better solutions that improve both user experience and
                    operational efficiency.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] border border-zinc-200/90 bg-white/92 p-6 shadow-[0_12px_36px_rgba(24,24,27,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_18px_50px_rgba(168,85,247,0.14)] sm:p-7">
                <p className="text-sm font-semibold text-zinc-900">My approach</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(250,250,250,1),rgba(245,243,255,0.6))] p-4 shadow-[0_6px_18px_rgba(24,24,27,0.04)] transition duration-300 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.10)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      01 Discover
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Study the current process, pain points, and goals.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(250,250,250,1),rgba(245,243,255,0.6))] p-4 shadow-[0_6px_18px_rgba(24,24,27,0.04)] transition duration-300 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.10)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      02 Define
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Turn findings into requirements, flows, and stories.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-[linear-gradient(180deg,rgba(250,250,250,1),rgba(245,243,255,0.6))] p-4 shadow-[0_6px_18px_rgba(24,24,27,0.04)] transition duration-300 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.10)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      03 Improve
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Shape a practical solution with business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <SectionTitle
          eyebrow="Selected Work"
          title="Case studies that show how I think through business problems"
          description="These projects highlight how I approach analysis, requirement definition, and solution design across different domains."
        />

        <div className="mt-12 space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-[32px] border border-zinc-200/90 bg-white/94 shadow-[0_12px_36px_rgba(24,24,27,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_22px_55px_rgba(168,85,247,0.18)]"
            >
              <div className="border-b border-zinc-100/80 bg-gradient-to-r from-zinc-50 via-white to-violet-50/40 px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                      {project.id} • {project.domain}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                      <span className="mr-3">{project.icon}</span>
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
                      {project.intro}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-zinc-200/90 bg-white/92 p-5 shadow-[0_10px_30px_rgba(24,24,27,0.05)] transition duration-300 hover:border-violet-200 hover:shadow-[0_14px_32px_rgba(168,85,247,0.10)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-700">
                      {project.problem}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-zinc-200/90 bg-white/92 p-5 shadow-[0_10px_30px_rgba(24,24,27,0.05)] transition duration-300 hover:border-violet-200 hover:shadow-[0_14px_32px_rgba(168,85,247,0.10)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      My Role
                    </p>
                    <p className="mt-3 text-sm leading-7 text-zinc-700">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl border border-zinc-200/90 bg-white/92 p-5 shadow-[0_10px_30px_rgba(24,24,27,0.05)] transition duration-300 hover:border-violet-200 hover:shadow-[0_14px_32px_rgba(168,85,247,0.10)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      What I Did
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-zinc-700">
                      {project.did.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-zinc-200/90 bg-white/92 p-5 shadow-[0_10px_30px_rgba(24,24,27,0.05)] transition duration-300 hover:border-violet-200 hover:shadow-[0_14px_32px_rgba(168,85,247,0.10)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Solution
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-zinc-700">
                      {project.solution.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100 bg-zinc-50/80 px-6 py-6 sm:px-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Impact
                    </p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-zinc-700">
                      {project.impact.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Visual Summary
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_6px_18px_rgba(24,24,27,0.04)] transition duration-300 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.10)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          Before
                        </p>
                        <p className="mt-2 text-sm text-zinc-700">
                          Manual process and friction
                        </p>
                      </div>
                      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_6px_18px_rgba(24,24,27,0.04)] transition duration-300 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.10)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          BA Work
                        </p>
                        <p className="mt-2 text-sm text-zinc-700">
                          Analysis, mapping, and requirements
                        </p>
                      </div>
                      <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_6px_18px_rgba(24,24,27,0.04)] transition duration-300 hover:border-violet-200 hover:shadow-[0_10px_24px_rgba(168,85,247,0.10)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          After
                        </p>
                        <p className="mt-2 text-sm text-zinc-700">
                          Clearer workflow and better experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200/80 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <SectionTitle
            eyebrow="Skills"
            title="Core skills I bring into projects"
            description="A combination of analysis, communication, structure, and tools that support strong business analysis work."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#111827_0%,#3b0764_55%,#111827_100%)] px-6 py-10 text-white shadow-[0_14px_40px_rgba(76,29,149,0.22)] sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s connect.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-200">
            I’m actively building toward Business Analyst, Product, and analytics-facing roles. If you’d like to connect, discuss opportunities, or review my work, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:siddharthahemchand@gmail.com"
              className="rounded-full bg-[linear-gradient(135deg,#ffffff_0%,#f5f3ff_100%)] px-6 py-3 text-sm font-medium text-zinc-950 shadow-[0_10px_30px_rgba(255,255,255,0.08),0_12px_32px_rgba(168,85,247,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_36px_rgba(168,85,247,0.24)]"
            >
              siddharthahemchand@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/siddhartha-hemchand-119193218/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[linear-gradient(135deg,rgba(63,63,70,0.95),rgba(76,29,149,0.92))] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_rgba(76,29,149,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(76,29,149,0.28)]"
            >
              LinkedIn Profile
            </a>
            <a
              href="#"
              className="rounded-full bg-[linear-gradient(135deg,rgba(63,63,70,0.95),rgba(76,29,149,0.92))] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_rgba(76,29,149,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(76,29,149,0.28)]"
            >
              Add Resume PDF Link
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}