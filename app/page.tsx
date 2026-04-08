"use client";
import React from "react";

type Project = {
  id: string;
  icon: string;
  title: string;
  domain: string;
  impactLine: string;
  intro: string;
  problem: string;
  role: string;
  requirement: string[];
  process: string[];
  documentation: string[];
  visualModels: string[];
  mindset: string;
  solution: string[];
};

type BadgeProps = {
  children: React.ReactNode;
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const projects: Project[] = [
  {
    id: "01",
    icon: "🏦",
    title: "Digital Loan Origination System",
    domain: "Banking",
    impactLine:
      "Reduced process complexity by redesigning workflow and defining a digital-first loan journey.",
    intro:
      "Worked on this during my master’s as a Business Analyst-style case study, focusing on end-to-end problem understanding and requirement definition.",
    problem:
      "Loan processing was manual, slow and repetitive. Customers had to visit branches, submit documents and wait days, while internal teams repeated data entry.",
    role:
      "Approached this by focusing on requirement elicitation, process mapping and solution definition.",
    requirement: [
      "Spoke with stakeholders to understand real workflow issues",
      "Asked focused questions on delays and duplication",
      "Followed the process step-by-step to find inefficiencies",
    ],
    process: [
      "Mapped AS-IS workflow",
      "Identified bottlenecks and repeated steps",
      "Designed simplified TO-BE process",
    ],
    documentation: [
      "Wrote business and functional requirements in a simple, structured format",
      "Converted key flows into user stories with acceptance criteria",
      "Kept the documentation clear enough for both business and technical discussion",
    ],
    visualModels: [
      "AS-IS process flow",
      "TO-BE process flow",
      "Simple user journey",
      "Workflow diagrams",
    ],
    mindset:
      "Focused on where time and effort were wasted. Once that was clear, the solution became simplifying steps and improving visibility.",
    solution: [
      "Online application",
      "Document upload",
      "Automated checks",
      "Tracking dashboard",
    ],
  },
  {
    id: "02",
    icon: "🛒",
    title: "AI-Based Recommendation System",
    domain: "E-commerce",
    impactLine:
      "Improved product relevance by defining personalized recommendation use cases.",
    intro:
      "Focused on solving personalization from a Business Analyst perspective.",
    problem:
      "All users saw the same products, reducing engagement and conversion opportunities.",
    role:
      "Analyzed user behavior and defined recommendation requirements aligned with business goals.",
    requirement: [
      "Analyzed browsing and click patterns",
      "Identified drop-off points",
      "Defined recommendation scenarios",
    ],
    process: [
      "Mapped customer journey",
      "Identified decision points",
      "Linked recommendations to business goals",
    ],
    documentation: [
      "Documented business goals, recommendation scenarios and requirement flows",
      "Wrote user stories for features like Recommended For You, Recently Viewed, and fallback logic for new users",
      "Defined acceptance criteria and key non-functional requirements such as response time, widget loading, inventory sync, and privacy fallback",
    ],
    visualModels: [
      "Customer journey map",
      "Recommendation touchpoint map",
      "Simple feature logic for returning vs new users",
      "Interaction flow for homepage and product pages",
    ],
    mindset:
      "Focused on relevance over features. If it doesn’t help users decide faster, it doesn’t add value.",
    solution: [
      "Recommended items",
      "Recently viewed",
      "Trending fallback",
      "Marketing control",
    ],
  },
  {
    id: "03",
    icon: "🚚",
    title: "Real-Time Delivery Tracking System",
    domain: "Logistics",
    impactLine:
      "Reduced delivery failures by improving communication and visibility.",
    intro:
      "Focused on solving operational and customer experience gaps.",
    problem:
      "Tracking was slow, communication limited, and deliveries frequently failed.",
    role:
      "Analyzed workflow gaps and defined requirements for better coordination.",
    requirement: [
      "Focused on driver and customer pain points",
      "Used scenario-based thinking",
      "Converted issues into requirements",
    ],
    process: [
      "Mapped delivery workflow",
      "Identified failure points",
      "Defined improved TO-BE process",
    ],
    documentation: [
      "Documented requirements for tracking, notifications, delivery preferences and dispatcher support",
      "Structured the flows clearly for customer, driver and dispatcher use cases",
      "Kept the documentation practical, simple and easy to explain in a BA setting",
    ],
    visualModels: [
      "End-to-end delivery workflow",
      "Driver-dispatcher-customer interaction flow",
      "Failed-delivery pain point map",
      "Future-state tracking and notification flow",
    ],
    mindset:
      "Looked at both customer and operations side. The issue was communication, not just tracking.",
    solution: [
      "Live tracking",
      "Notifications",
      "Delivery preferences",
      "Dispatcher support",
    ],
  },
];

const skills: string[] = [
  "Requirement Gathering",
  "Stakeholder Analysis",
  "Process Mapping",
  "AS-IS / TO-BE",
  "Gap Analysis",
  "User Stories",
  "Acceptance Criteria",
  "Agile / Scrum",
  "SQL",
  "Excel",
  "JIRA",
  "Confluence",
  "Power BI",
];

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/12 hover:shadow-[0_12px_28px_rgba(34,211,238,0.12)]">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-200/85">{description}</p>
      ) : null}
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/12 bg-white/8 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/10 hover:shadow-[0_18px_44px_rgba(34,211,238,0.10)]">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200/85">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#07141a] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/jeremy-bishop-G9i_plbfDgk-unsplash.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,14,0.82)_0%,rgba(5,16,22,0.78)_22%,rgba(8,20,28,0.76)_48%,rgba(9,18,28,0.84)_72%,rgba(6,12,18,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_22%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />
        <div className="absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-cyan-400/14 blur-3xl" />
        <div className="absolute top-[16%] right-[-6%] h-80 w-80 rounded-full bg-sky-300/14 blur-3xl" />
        <div className="absolute bottom-[10%] left-[18%] h-64 w-64 rounded-full bg-violet-400/12 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300/80">
                Business Analyst Portfolio
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Siddhartha Hemchand Nidiginti
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-200/90 sm:text-xl">
                Aspiring Business Analyst • Product & Data Enthusiast
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200/80 sm:text-lg">
                I approach problems the way a Business Analyst actually works by first understanding what’s really happening, then breaking it into processes and finally defining clear, practical requirements.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200/72 sm:text-lg">
                These case studies reflect how I practiced focusing on real workflows, stakeholder thinking and solution clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-[linear-gradient(135deg,rgba(10,17,28,0.92)_0%,rgba(12,74,110,0.92)_48%,rgba(17,24,39,0.92)_100%)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_16px_40px_rgba(8,145,178,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_22px_48px_rgba(34,211,238,0.24)]"
                >
                  View Projects
                </a>
                <a
                  href="mailto:siddharthahemchand@gmail.com"
                  className="rounded-full border border-white/14 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.14)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/14 hover:shadow-[0_14px_34px_rgba(34,211,238,0.14)]"
                >
                  Email Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge>Requirement Gathering</Badge>
                <Badge>Process Mapping</Badge>
                <Badge>Stakeholder Analysis</Badge>
                <Badge>Business Thinking</Badge>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border border-white/12 bg-white/8 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/10 hover:shadow-[0_24px_56px_rgba(34,211,238,0.12)] sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300/75">
                  Quick Profile
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <InfoCard
                    title="Education"
                    text="M.S. in Engineering Management with Data Analytics specialization at California State University, Northridge."
                  />
                  <InfoCard
                    title="Background"
                    text="Background in Business Analytics and Engineering Management with a focus on data-driven problem solving and structured decision making."
                  />
                </div>
                <div className="mt-5 rounded-3xl border border-white/12 bg-white/8 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-md">
                  <p className="text-sm font-semibold text-white">What I focus on</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200/82">
                    Understanding how systems actually work, identifying gaps in the process and defining structured requirements that are easy to build, test and scale.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/12 bg-white/8 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/10 hover:shadow-[0_24px_56px_rgba(34,211,238,0.12)] sm:p-7">
                <p className="text-sm font-semibold text-white">My approach</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-4 shadow-[0_6px_18px_rgba(0,0,0,0.10)] backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/75">01 Understand</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200/82">
                      I start with the real problem not assumptions, but actual workflow and pain points.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-4 shadow-[0_6px_18px_rgba(0,0,0,0.10)] backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/75">02 Structure</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200/82">
                      I break the process into steps, identify gaps and define clear requirements.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-4 shadow-[0_6px_18px_rgba(0,0,0,0.10)] backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/75">03 Improve</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200/82">
                      I design simple, practical solutions that improve efficiency and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionTitle
          eyebrow="Selected Work"
          title="Case studies that reflect how I worked through problems "
          description="I kept these practical , the way I would naturally explain my thinking in a Business Analyst conversation."
        />

        <div className="mt-12 space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-[32px] border border-white/12 bg-white/8 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_24px_60px_rgba(34,211,238,0.12)]"
            >
              <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(34,211,238,0.08))] px-6 py-6 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300/75">
                  {project.id} • {project.domain}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  <span className="mr-3">{project.icon}</span>
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200/82">
                  {project.intro}
                </p>
                <div className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm font-medium text-cyan-100">
                  {project.impactLine}
                </div>
              </div>

              <div className="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">Problem</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200/82">{project.problem}</p>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">My Role</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200/82">{project.role}</p>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">Requirement Gathering</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200/82">
                      {project.requirement.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">Business Process Work</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200/82">
                      {project.process.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">Documentation</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200/82">
                      {project.documentation.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">Visual Models</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200/82">
                      {project.visualModels.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">How I Thought Through It</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200/82">{project.mindset}</p>
                  </div>

                  <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300/75">Solution</p>
                    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200/82">
                      {project.solution.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <SectionTitle
            eyebrow="Skills"
            title="Core skills I bring into projects"
            description="These are the Business Analysis skills I applied across these case studies — from understanding problems to defining structured, build-ready requirements."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-[32px] border border-white/12 bg-[linear-gradient(135deg,rgba(9,15,23,0.76)_0%,rgba(10,36,54,0.72)_40%,rgba(20,17,43,0.72)_100%)] px-6 py-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300/75">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s connect.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200/82">
            I’m actively looking for Business Analyst and Product-focused roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:siddharthahemchand@gmail.com"
              className="rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(224,242,254,0.94)_100%)] px-6 py-3 text-sm font-medium text-slate-950 shadow-[0_14px_34px_rgba(255,255,255,0.10),0_14px_34px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,211,238,0.18)]"
            >
              siddharthahemchand@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/siddhartha-hemchand-119193218/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/14"
            >
              LinkedIn Profile
            </a>
            <a
              href="#"
              className="rounded-full border border-white/12 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/14"
            >
              Resume 
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}