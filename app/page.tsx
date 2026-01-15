"use client";

import React, { useMemo, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_TO = "hagohel@gmail.com";

export default function Page() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");

  const meta = useMemo(
    () => ({
      acronym: "IC-SQITS 2026",
      fullName: "International Conference on Secure Quantum Intelligence and Trusted Systems",
      proceedings: "Springer CCIS (Planned)",
      dates: "10–11 December 2026",
      venue: "University of Texas at San Antonio (UTSA) – Downtown Campus",
      address: "501 W César E Chávez Blvd, San Antonio, TX 78207",
      theme:
        "The emergence of functional quantum computing introduces an existential challenge to classical cryptographic foundations while simultaneously offering unparalleled computational potential for Artificial Intelligence. IC-SQITS 2026 provides a premier interdisciplinary platform for researchers and practitioners to share advancements in securing the future digital landscape. The conference focuses on the critical convergence of Quantum Computing, AI-driven Defense, and Systemic Trust.",
      ctas: {
        cfp: "#cfp",
        submission: "#submission",
        registration: "#registration",
        contact: "#contact",
      },
    }),
    []
  );

  const dates = useMemo(
    () => [
      { k: "Paper submission", v: "May 15, 2026" },
      { k: "First 3 double-blind reviews due", v: "July 15, 2026" },
      { k: "Revised paper due", v: "August 30, 2026" },
      { k: "Notification of acceptance", v: "October 1, 2026" },
      { k: "Camera-ready paper due", v: "November 10, 2026" },
      { k: "Conference", v: "Dec 10–11, 2026" },
    ],
    []
  );

  const topics = useMemo(
    () => [
      "Post-Quantum Cryptography (PQC)",
      "Quantum-safe protocols and migration strategies",
      "Quantum Key Distribution (QKD)",
      "AI-driven cybersecurity and threat detection",
      "Trusted AI and secure machine learning",
      "Hybrid quantum–classical secure systems",
      "Critical infrastructure protection",
      "Privacy-preserving AI and cryptography",
      "Secure cloud and distributed systems",
      "Governance, policy, and ethical AI in quantum systems",
    ],
    []
  );

  const specialTracks = useMemo(
    () => [
      "Quantum-Safe Cryptography and Standards",
      "AI-Driven Cyber Defense",
      "Secure Quantum Networks",
      "Trusted AI and Algorithmic Governance",
    ],
    []
  );

  const organizers = useMemo(
    () => ({
      generalChairs: [
        "Dr. Hardik Gohel — Texas A&M University–Victoria (USA)",
        "Dr. Usharani Hareesh Govindarajan — Shanghai Jiao Tong University (China)",
      ],
      programChairs: [
        "Dr. Himanshu Upadhyay — Florida International University (USA)",
        "Dr. Shekhar Bhansali — Vanderbilt University (USA)",
        "Dr. Suresh Kumar Peddoju — University of Houston (USA)",
      ],
      tpc: [
        "Dr. Weiwei Jiang — Beijing University of Posts and Telecommunications (China)",
        "Dr. Aparna Aravelli — North Carolina A&T State University (USA)",
        "Abdul Razaque — Ohio Northern University (USA)",
        "Kotsyuba Igor Yuryevich — ITMO University (Russia)",
        "Naveen Chilamkurti — La Trobe University (Australia)",
        "Thomas Newe — University of Limerick (Ireland)",
        "Prof. Chia-Ming Yang (CGU) — Chang Gung University (Taiwan)",
      ],
    }),
    []
  );

  const reviewGuidelines = useMemo(
    () => [
      {
        title: "Double-blind review",
        body:
          "IC-SQITS uses a strict double-blind process. Authors must remove identifying information from manuscripts and supplementary files (including metadata where applicable).",
      },
      {
        title: "Minimum of three expert reviews",
        body:
          "Each submission receives at least three independent reviews. Initial reviews are due by July 15, 2026.",
      },
      {
        title: "Revision & rebuttal cycle",
        body:
          "Based on reviewer feedback, authors may be invited to submit a revised manuscript by Aug 30, 2026. The TPC evaluates revisions for final decisions.",
      },
      {
        title: "Ethics, originality, and overlap policy",
        body:
          "Submissions must be original, unpublished, and not under review elsewhere. Substantial overlap (including self-plagiarism) may result in desk rejection.",
      },
      {
        title: "Conflict of interest handling",
        body:
          "Conflicts of interest are managed by the Program Chairs. Conflicted reviewers will not be assigned to the paper.",
      },
      {
        title: "Quality bar for proceedings",
        body:
          "Accepted papers must meet Springer CCIS formatting and quality requirements; final camera-ready versions are due Nov 10, 2026.",
      },
    ],
    []
  );

  const onChange = (key: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
    setStatus("idle");
  };

  const validate = (): { ok: boolean; msg?: string } => {
    if (!form.name.trim()) return { ok: false, msg: "Please enter your name." };
    if (!form.email.trim()) return { ok: false, msg: "Please enter your email." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return { ok: false, msg: "Please enter a valid email." };
    if (!form.message.trim()) return { ok: false, msg: "Please write a short message." };
    return { ok: true };
  };

  const submitViaMailto = (e: React.FormEvent) => {
    e.preventDefault();

    const v = validate();
    if (!v.ok) {
      setStatus("error");
      alert(v.msg);
      return;
    }

    const subject = `[IC-SQITS 2026] ${form.subject} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
      "",
      `Sent from: ${typeof window !== "undefined" ? window.location.href : "IC-SQITS Website"}`,
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(EMAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("ready");
    window.location.href = mailto;
  };

  return (
    <div>
      <style jsx global>{`
        :root {
          --bg: #0b0c10;
          --panel: rgba(255, 255, 255, 0.08);
          --panel2: rgba(255, 255, 255, 0.06);
          --border: rgba(255, 255, 255, 0.14);
          --border2: rgba(255, 255, 255, 0.10);
          --text: rgba(255, 255, 255, 0.92);
          --muted: rgba(255, 255, 255, 0.72);
          --muted2: rgba(255, 255, 255, 0.60);
          --shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
          --shadow2: 0 10px 28px rgba(0, 0, 0, 0.25);
          --radius: 18px;
          --radius2: 14px;
          --max: 1120px;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          background: radial-gradient(1200px 700px at 15% -10%, rgba(255, 255, 255, 0.10), transparent 55%),
            radial-gradient(900px 600px at 90% 0%, rgba(255, 255, 255, 0.08), transparent 52%),
            radial-gradient(800px 520px at 60% 120%, rgba(255, 255, 255, 0.06), transparent 55%),
            linear-gradient(180deg, #07080b 0%, #0b0c10 40%, #07080b 100%);
          color: var(--text);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
            "Segoe UI Emoji";
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
        }

        .container {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 20px;
        }

        .topline {
          height: 4px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.28) 40%, rgba(255, 255, 255, 0.90) 100%);
          opacity: 0.85;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(10, 11, 15, 0.55);
          border-bottom: 1px solid var(--border2);
        }

        .navInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 220px;
        }

        .mark {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: radial-gradient(14px 14px at 30% 30%, rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.10));
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        }

        .brandTitle {
          font-weight: 900;
          letter-spacing: 0.6px;
          line-height: 1;
          font-size: 14px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
        }

        .brandSub {
          font-size: 12px;
          color: var(--muted2);
          margin-top: 3px;
        }

        .navLinks {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: center;
        }

        .navLinks a {
          text-decoration: none;
          font-weight: 700;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.86);
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid transparent;
        }

        .navLinks a:hover {
          border-color: rgba(255, 255, 255, 0.20);
          background: rgba(255, 255, 255, 0.05);
        }

        .hero {
          padding: 52px 0 26px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 18px;
        }

        .panel {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--panel);
          box-shadow: var(--shadow);
        }

        .panelInner {
          padding: 22px;
        }

        .heroBadgeRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-bottom: 12px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.20);
          background: rgba(255, 255, 255, 0.06);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.2px;
        }

        .badgeDot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          opacity: 0.8;
        }

        .h1 {
          font-size: 46px;
          line-height: 1.03;
          letter-spacing: -0.9px;
          margin: 0 0 12px 0;
        }

        .lead {
          margin: 0 0 14px 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 15.5px;
        }

        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 16px 0 0;
        }

        .pill {
          font-size: 12px;
          font-weight: 900;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.88);
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          text-decoration: none;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.2px;
          background: rgba(255, 255, 255, 0.10);
        }

        .btn:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.30);
        }

        .btnPrimary {
          background: rgba(255, 255, 255, 0.92);
          color: rgba(10, 11, 15, 0.96);
          border-color: rgba(255, 255, 255, 0.75);
        }

        .btnPrimary:hover {
          background: rgba(255, 255, 255, 0.98);
        }

        .cardStack {
          display: grid;
          gap: 12px;
        }

        .miniCard {
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
          border-radius: var(--radius2);
          padding: 16px;
          box-shadow: var(--shadow2);
        }

        .cardTitle {
          margin: 0 0 10px 0;
          font-weight: 1000;
          letter-spacing: -0.2px;
          font-size: 16px;
        }

        .list {
          margin: 0;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.84);
          line-height: 1.75;
        }

        .muted {
          color: var(--muted2);
        }

        .section {
          padding: 28px 0;
        }

        .sectionHead {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 12px;
        }

        .h2 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -0.3px;
        }

        .subline {
          color: var(--muted2);
          font-size: 13px;
          line-height: 1.6;
          margin-top: 6px;
        }

        .grid12 {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 14px;
        }

        .col6 {
          grid-column: span 6;
        }
        .col7 {
          grid-column: span 7;
        }
        .col5 {
          grid-column: span 5;
        }
        .col12 {
          grid-column: span 12;
        }

        .card {
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: var(--radius);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: var(--shadow2);
          padding: 18px;
        }

        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.10);
          margin: 14px 0;
        }

        .kpiGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 12px;
        }

        .kpi {
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
        }

        .kpiVal {
          font-weight: 1000;
          letter-spacing: -0.4px;
          font-size: 16px;
          margin: 0;
        }

        .kpiLabel {
          margin: 6px 0 0 0;
          color: var(--muted2);
          font-size: 12px;
          line-height: 1.5;
        }

        .topicGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .chip {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
        }

        .chipIcon {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          margin-top: 5px;
          opacity: 0.8;
          flex: 0 0 auto;
        }

        .chipText {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.84);
        }

        .guideline {
          display: grid;
          gap: 10px;
          margin-top: 12px;
        }

        .guidelineItem {
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
        }

        .guidelineTitle {
          margin: 0 0 6px 0;
          font-weight: 1000;
          letter-spacing: -0.2px;
        }

        .guidelineBody {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.7;
          font-size: 13.5px;
        }

        .peopleList {
          margin: 10px 0 0 0;
          padding-left: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.84);
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 10px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.80);
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        input,
        select,
        textarea {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          padding: 12px 12px;
          color: rgba(255, 255, 255, 0.92);
          outline: none;
          font-size: 14px;
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .formActions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-top: 12px;
        }

        .note {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
        }

        .footer {
          padding: 30px 0 44px;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .tiny {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        @media (max-width: 980px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }
          .kpiGrid {
            grid-template-columns: 1fr;
          }
          .topicGrid {
            grid-template-columns: 1fr;
          }
          .col6,
          .col7,
          .col5 {
            grid-column: span 12;
          }
          .formGrid {
            grid-template-columns: 1fr;
          }
          .h1 {
            font-size: 38px;
          }
        }
      `}</style>

      <div className="topline" />

      <header className="nav">
        <div className="container">
          <div className="navInner">
            <div className="brand">
              <div className="mark" aria-hidden="true" />
              <div>
                <div className="brandTitle">{meta.acronym}</div>
                <div className="brandSub">{meta.proceedings}</div>
              </div>
            </div>

            <nav className="navLinks" aria-label="Primary navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#tracks">Tracks</a>
              <a href="#cfp">CFP</a>
              <a href="#submission">Submission</a>
              <a href="#committee">Committee</a>
              <a href="#registration">Registration</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="panel">
              <div className="panelInner">
                <div className="heroBadgeRow">
                  <span className="badge">
                    <span className="badgeDot" />
                    Proceedings: <strong>{meta.proceedings}</strong>
                  </span>
                  <span className="badge">
                    <span className="badgeDot" />
                    {meta.dates}
                  </span>
                  <span className="badge">
                    <span className="badgeDot" />
                    San Antonio, Texas (USA)
                  </span>
                </div>

                <h1 className="h1">{meta.fullName}</h1>

                <p className="lead">
                  <strong>{meta.acronym}</strong> is a premier interdisciplinary platform at the convergence of{" "}
                  <strong>quantum computing</strong>, <strong>AI-driven defense</strong>, and <strong>systemic trust</strong>.
                </p>

                <div className="pills" aria-label="Conference highlights">
                  <span className="pill">UTSA Downtown Campus</span>
                  <span className="pill">CCIS proceedings (planned)</span>
                  <span className="pill">Double-blind review</span>
                  <span className="pill">Minimum 3 reviews</span>
                  <span className="pill">Quantum-safe + Trusted AI</span>
                </div>

                <div className="ctaRow">
                  <a className="btn btnPrimary" href={meta.ctas.cfp}>
                    View Call for Papers
                  </a>
                  <a className="btn" href={meta.ctas.submission}>
                    Submission (Meteor)
                  </a>
                  <a className="btn" href={meta.ctas.registration}>
                    Registration
                  </a>
                  <a className="btn" href={meta.ctas.contact}>
                    Contact
                  </a>
                </div>

                <div className="divider" />

                <div className="tiny">
                  <strong>Venue:</strong> {meta.venue} — {meta.address}
                </div>
              </div>
            </div>

            <div className="cardStack">
              <div className="miniCard">
                <div className="cardTitle">Important Dates</div>
                <ul className="list">
                  {dates.map((d) => (
                    <li key={d.k}>
                      <strong>{d.k}:</strong> {d.v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="miniCard">
                <div className="cardTitle">Special Tracks</div>
                <ul className="list">
                  {specialTracks.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="divider" />
                <div className="note">
                  Final track chairs and keynote speakers will be announced on this page as confirmations are completed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">About IC-SQITS 2026</h2>
              <div className="subline">
                Securing the post-quantum era while responsibly harnessing AI for resilient, trustworthy systems.
              </div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <p className="lead" style={{ marginBottom: 0 }}>
                  {meta.theme}
                </p>

                <div className="kpiGrid" aria-label="Conference facts">
                  <div className="kpi">
                    <p className="kpiVal">CCIS</p>
                    <p className="kpiLabel">Proceedings planned with Springer CCIS.</p>
                  </div>
                  <div className="kpi">
                    <p className="kpiVal">3+</p>
                    <p className="kpiLabel">Minimum independent reviews per paper.</p>
                  </div>
                  <div className="kpi">
                    <p className="kpiVal">2 days</p>
                    <p className="kpiLabel">Dec 10–11, 2026 at UTSA Downtown, San Antonio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Why this conference now?</div>
                <ul className="list">
                  <li>Quantum algorithms threaten legacy public-key cryptography and long-term confidentiality.</li>
                  <li>AI accelerates both defense and adversarial capabilities (automation, scale, sophistication).</li>
                  <li>Trusted systems must withstand algorithmic disruption, supply chain risks, and policy constraints.</li>
                </ul>
                <div className="divider" />
                <div className="note">
                  IC-SQITS bridges standards, engineering practice, and research to provide deployment-ready security
                  pathways.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">Technical Tracks & Topics</h2>
              <div className="subline">We invite original, high-quality submissions (full and short papers).</div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <div className="cardTitle">Main topics</div>
                <div className="topicGrid">
                  {topics.map((t) => (
                    <div className="chip" key={t}>
                      <span className="chipIcon" aria-hidden="true" />
                      <div className="chipText">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Special tracks</div>
                <div className="topicGrid" style={{ gridTemplateColumns: "1fr" }}>
                  {specialTracks.map((t) => (
                    <div className="chip" key={t}>
                      <span className="chipIcon" aria-hidden="true" />
                      <div className="chipText">{t}</div>
                    </div>
                  ))}
                </div>
                <div className="divider" />
                <div className="note">
                  Special tracks support focused communities and timely themes. Track chair announcements coming soon.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CFP */}
      <section id="cfp" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">Call for Papers (CFP)</h2>
              <div className="subline">
                Proceedings: <strong>{meta.proceedings}</strong>. Please follow CCIS formatting requirements and anonymization rules.
              </div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <div className="cardTitle">Review process & author guidelines</div>
                <div className="guideline">
                  {reviewGuidelines.map((g) => (
                    <div className="guidelineItem" key={g.title}>
                      <p className="guidelineTitle">{g.title}</p>
                      <p className="guidelineBody">{g.body}</p>
                    </div>
                  ))}
                </div>

                <div className="divider" />

                <div className="note">
                  <strong>Paper types:</strong> Full papers and short papers. (Page limits and template links will be posted here.)
                </div>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Important dates (official)</div>
                <ul className="list">
                  {dates.map((d) => (
                    <li key={d.k}>
                      <strong>{d.k}:</strong> {d.v}
                    </li>
                  ))}
                </ul>
                <div className="divider" />
                <div className="note">
                  Dates may be adjusted slightly based on proceedings timelines. Updates will be published here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION */}
      <section id="submission" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">Submission</h2>
              <div className="subline">
                Submissions will be handled via the <strong>Meteor</strong> tool with Springer. Details coming soon.
              </div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <div className="cardTitle">How to submit</div>
                <ul className="list">
                  <li>Prepare an anonymized manuscript compliant with CCIS formatting instructions (link to be posted).</li>
                  <li>Submit via Meteor (Springer). The submission portal link will appear here once available.</li>
                  <li>Ensure all figures, appendices, and supplementary materials are anonymized.</li>
                </ul>
                <div className="divider" />
                <div className="note">
                  If you need assistance with anonymization or templates, use the Contact form below.
                </div>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Submission status</div>
                <p className="lead" style={{ marginTop: 6 }}>
                  Meteor portal: <strong>Coming Soon</strong>
                </p>
                <div className="divider" />
                <div className="note">
                  We will post: portal link, CCIS template, author instructions, and policy checklist.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITTEE */}
      <section id="committee" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">Organizing Committee</h2>
              <div className="subline">Leadership, program chairs, and technical program committee (TPC).</div>
            </div>
          </div>

          <div className="grid12">
            <div className="col6">
              <div className="card">
                <div className="cardTitle">General Chairs</div>
                <ul className="peopleList">
                  {organizers.generalChairs.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col6">
              <div className="card">
                <div className="cardTitle">Program Chairs (PC)</div>
                <ul className="peopleList">
                  {organizers.programChairs.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="divider" />
                <div className="note">Track chairs and additional PC members will be added as confirmations finalize.</div>
              </div>
            </div>

            <div className="col12">
              <div className="card">
                <div className="cardTitle">Technical Program Committee (TPC)</div>
                <ul className="peopleList">
                  {organizers.tpc.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">Registration</h2>
              <div className="subline">Registration details and fees will be posted here. Please check back soon.</div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <div className="cardTitle">Status</div>
                <ul className="list">
                  <li>Registration: <strong>Coming Soon</strong></li>
                </ul>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Travel & lodging</div>
                <p className="lead" style={{ marginTop: 6 }}>
                  Coming soon.
                </p>
                <div className="divider" />
                <div className="note">If you need an invitation letter for visa, contact the organizers using the form below.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2 className="h2">Contact</h2>
              <div className="subline">
                Fill the following form.
              </div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <div className="cardTitle">Send a message</div>

                <form onSubmit={submitViaMailto} aria-label="Contact form">
                  <div className="formGrid">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={onChange("name")}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        value={form.email}
                        onChange={onChange("email")}
                        placeholder="you@domain.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" value={form.subject} onChange={onChange("subject")}>
                        <option>General Inquiry</option>
                        <option>Paper Submission (Meteor)</option>
                        <option>CFP / Review Process</option>
                        <option>Sponsorship / Partnership</option>
                        <option>Registration</option>
                        <option>Invitation Letter</option>
                      </select>
                    </div>

                    <div className="field" style={{ gridColumn: "1 / -1" }}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={onChange("message")}
                        placeholder="Write your message…"
                      />
                    </div>
                  </div>

                  <div className="formActions">
                    <button className="btn btnPrimary" type="submit">
                      Send Email
                    </button>
                    <a className="btn" href={`mailto:${EMAIL_TO}`}>
                      Email Directly
                    </a>
                    <span className="note">
                      {status === "ready"
                        ? "Opening your email client…"
                        : status === "error"
                        ? "Please fix the highlighted fields."
                        : "No data is stored on the website."}
                    </span>
                  </div>

                  <div className="divider" />
                  <div className="note">
                    Note: This form uses <strong>mailto</strong> (no server). If you prefer a true web submission (without
                    email client), we can add a free form backend later (Formspree / Google Forms / Vercel Functions).
                  </div>
                </form>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Conference details</div>
                <ul className="list">
                  <li>
                    <strong>Conference:</strong> {meta.acronym}
                  </li>
                  <li>
                    <strong>Dates:</strong> {meta.dates}
                  </li>
                  <li>
                    <strong>Proceedings:</strong> {meta.proceedings}
                  </li>
                  <li>
                    <strong>Venue:</strong> UTSA Downtown
                  </li>
                  <li>
                    <strong>Address:</strong> {meta.address}
                  </li>
                </ul>
                <div className="divider" />
                 <div className="note">
                  For urgent matters, email: <strong>{EMAIL_TO}</strong>
                </div> 
              </div>
            </div>
          </div> 
        </div> 
      </section>

      <footer className="footer">
        <div className="container">
          <div>
            © 2026 IC-SQITS. All rights reserved. /*• San Antonio, TX • Dec 10–11, 2026 • Proceedings: {meta.proceedings} */
          </div>
          <div className="tiny" style={{ marginTop: 8 }}>
            Built on Next.js and deployed on Vercel.
          </div>
        </div>
      </footer>
    </div>
  );
}





