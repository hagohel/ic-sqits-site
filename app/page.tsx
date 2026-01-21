"use client";

import React, { useEffect, useMemo, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMAIL_TO = "hagohel@gmail.com";

type ThemeMode = "dark" | "light";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");

  // Apply theme + persist
  useEffect(() => {
    const saved = (typeof window !== "undefined" ? window.localStorage.getItem("ic_sqits_theme") : null) as
      | ThemeMode
      | null;

    const initial: ThemeMode = saved ?? "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") window.localStorage.setItem("ic_sqits_theme", theme);
  }, [theme]);

  const meta = useMemo(
    () => ({
      acronym: "IC-SQITS 2026",
      fullName: "International Conference on Secure Quantum Intelligence and Trusted Systems",
      proceedings: "Conference Proceedings (Planning stage)",
      dates: "10–11 December 2026",
      venue: "University of Texas at San Antonio (UTSA) — Downtown Campus",
      address: "501 W César E Chávez Blvd, San Antonio, TX 78207",
      cityLine: "San Antonio, Texas, United States",
      theme:
        "IC-SQITS 2026 is a premier interdisciplinary platform at the convergence of quantum computing, AI-driven defense, and systemic trust. It brings together researchers, industry leaders, and policy makers to address the security challenges and opportunities created by the post-quantum and AI era. The conference focuses on building resilient, trustworthy, and future-proof digital infrastructures that can withstand emerging quantum and AI-enabled threats. By integrating advances in cryptography, artificial intelligence, and trusted systems engineering, IC-SQITS aims to shape the next generation of secure, intelligent technologies for critical applications worldwide.",
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
        "Dr. Hardik Gohel, Texas A&M University–Victoria, United States",
        "Dr. Usharani Hareesh Govindarajan, Shanghai Jiao Tong University, China",
        "Dr. Yun Wan, University of Houston-Downtown, United States",
      ],
      programChairs: [
        "Dr. Himanshu Upadhyay, Florida International University, United States",
        "Dr. Biswajeet Pandey, Dr. A. P. J. Abdul Kalam Technical University, India",
        "Dr. Suresh Kumar Peddoju, University of Houston, United States",
      ],
      tpc: [
        "Dr. Weiwei Jiang, Beijing University of Posts and Telecommunications, China",
        "Dr. Aparna Aravelli, North Carolina A&T State University, United States",
        "Dr. Abdul Razaque, Ohio Northern University, United States",
        "Dr. Kotsyuba Igor Yuryevich, ITMO University, Russia",
        "Dr. Naveen Chilamkurti, La Trobe University, Australia",
        "Dr. Thomas Newe, University of Limerick, Ireland",
        "Dr. Bhagwan Das, Torrens University Australia, Melbourne, Victoria, Australia",
        "Dr. Wan Abu Bakar Aezwani, University of Sultan Zainal Abdin, Malaysia",
        "Dr. Laura Aldasheva, Astana IT University, Astana, Kazakhstan",
        "Dr. Nikhil Bhalla, Ulster University, United Kingdom",
        "Dr. Scheila Wesley Martins, University of Roehampton, United Kingdom",
        "Dr. Tarek R. Besold, Sony Inc., Spain",
        "Dr. Ajeet Kaushik, Florida Polytech, United States",
        "Dr. Gagan Narang, Università Politecnica delle Marche, Italy",
        "Dr. Chinmay Chakraborty, Birla Institute of Technology, India",
        "Dr. Siddhant Sharma, Boston University, United States",
        "Dr. Yu Zhiwen, South China University of Technology, China",
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
        title: "Revision cycle",
        body:
          "Based on reviewer feedback, authors may be invited to submit a revised manuscript by Aug 30, 2026. The TPC evaluates revisions for final decisions.",
      },
      {
        title: "Originality & overlap policy",
        body:
          "Submissions must be original, unpublished, and not under review elsewhere. Substantial overlap (including self-plagiarism) may result in desk rejection.",
      },
      {
        title: "Conflict of interest handling",
        body:
          "Conflicts of interest are managed by the Program Chairs. Conflicted reviewers will not be assigned to the paper.",
      },
      {
        title: "Camera-ready requirements",
        body:
          "Accepted papers must meet the final formatting and quality requirements; camera-ready versions are due Nov 10, 2026.",
      },
    ],
    []
  );

  const onChange =
    (key: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <style jsx global>{`
        :root {
          /* Base */
          --max: 1140px;
          --radius: 18px;
          --radius2: 14px;
          --shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
          --shadow2: 0 12px 34px rgba(0, 0, 0, 0.16);

          /* Blue brand */
          --brand: #2f6bff;
          --brand2: #57b7ff;
          --brand3: #6c5cff;
          --brandText: rgba(255, 255, 255, 0.98);

          /* Theme tokens (dark default) */
          --bg0: #070a14;
          --bg1: #0b1022;
          --panel: rgba(255, 255, 255, 0.06);
          --panel2: rgba(255, 255, 255, 0.04);
          --border: rgba(255, 255, 255, 0.12);
          --border2: rgba(255, 255, 255, 0.09);
          --text: rgba(255, 255, 255, 0.94);
          --muted: rgba(255, 255, 255, 0.74);
          --muted2: rgba(255, 255, 255, 0.60);

          --focus: rgba(87, 183, 255, 0.35);
        }

        html[data-theme="light"] {
          --bg0: #f6f9ff;
          --bg1: #eef4ff;
          --panel: rgba(255, 255, 255, 0.75);
          --panel2: rgba(255, 255, 255, 0.60);
          --border: rgba(17, 24, 39, 0.12);
          --border2: rgba(17, 24, 39, 0.08);
          --text: rgba(17, 24, 39, 0.94);
          --muted: rgba(17, 24, 39, 0.74);
          --muted2: rgba(17, 24, 39, 0.60);

          --shadow: 0 18px 60px rgba(17, 24, 39, 0.12);
          --shadow2: 0 12px 34px rgba(17, 24, 39, 0.10);
        }

        html,
        body {
          padding: 0;
          margin: 0;
          color: var(--text);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
            "Segoe UI Emoji";
          background:
            radial-gradient(1000px 700px at 14% -10%, rgba(87, 183, 255, 0.35), transparent 55%),
            radial-gradient(900px 650px at 94% 0%, rgba(47, 107, 255, 0.22), transparent 55%),
            radial-gradient(800px 600px at 55% 120%, rgba(108, 92, 255, 0.18), transparent 55%),
            linear-gradient(180deg, var(--bg0), var(--bg1));
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        :focus-visible {
          outline: 2px solid var(--focus);
          outline-offset: 2px;
          border-radius: 10px;
        }

        .container {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Top accent */
        .topline {
          height: 3px;
          background: linear-gradient(90deg, var(--brand), var(--brand2), var(--brand3));
          opacity: 0.95;
        }

        /* Nav */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: color-mix(in srgb, var(--bg0) 55%, transparent);
          border-bottom: 1px solid var(--border2);
        }

        .navInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          gap: 14px;
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
          border: 1px solid var(--border);
          box-shadow: var(--shadow2);
        }

        .brandTitle {
          font-weight: 950;
          letter-spacing: 0.6px;
          line-height: 1;
          font-size: 14px;
          text-transform: uppercase;
        }

        .brandSub {
          font-size: 12px;
          color: var(--muted2);
          margin-top: 3px;
        }

        .navRight {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .navLinks {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: center;
        }

        .navLinks a {
          font-weight: 800;
          font-size: 13px;
          color: var(--muted);
          padding: 9px 10px;
          border-radius: 12px;
          border: 1px solid transparent;
        }

        .navLinks a:hover {
          color: var(--text);
          border-color: var(--border2);
          background: var(--panel2);
        }

        .iconBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 38px;
          padding: 0 12px;
          border-radius: 12px;
          border: 1px solid var(--border2);
          background: var(--panel2);
          color: var(--muted);
          font-weight: 850;
          font-size: 13px;
          cursor: pointer;
        }

        .iconBtn:hover {
          color: var(--text);
          border-color: var(--border);
          background: var(--panel);
        }

        .menuBtn {
          display: none;
        }

        /* Hero */
        .hero {
          padding: 44px 0 22px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 16px;
          align-items: start;
        }

        .panel {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: linear-gradient(180deg, var(--panel), var(--panel2));
          box-shadow: var(--shadow);
          overflow: hidden;
          position: relative;
        }

        .panel:before {
          content: "";
          position: absolute;
          inset: -2px;
          background: radial-gradient(500px 240px at 22% 0%, rgba(87, 183, 255, 0.22), transparent 60%);
          pointer-events: none;
        }

        .panelInner {
          position: relative;
          padding: 22px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid var(--border2);
          background: color-mix(in srgb, var(--panel2) 80%, transparent);
          color: var(--muted);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.2px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--brand2), var(--brand));
          box-shadow: 0 0 0 4px rgba(87, 183, 255, 0.14);
        }

        .h1 {
          margin: 14px 0 10px 0;
          font-size: 46px;
          line-height: 1.06;
          letter-spacing: -0.9px;
        }

        .lead {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
          font-size: 15.6px;
        }

        .divider {
          height: 1px;
          background: var(--border2);
          margin: 16px 0;
        }

        .kv {
          display: grid;
          gap: 10px;
        }

        .kvRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }

        .kvPill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid var(--border2);
          background: var(--panel2);
          font-size: 12.5px;
          color: var(--muted);
          font-weight: 850;
        }

        .kvPill strong {
          color: var(--text);
          font-weight: 950;
        }

        .cardStack {
          display: grid;
          gap: 12px;
        }

        .miniCard {
          border: 1px solid var(--border2);
          background: linear-gradient(180deg, var(--panel), var(--panel2));
          border-radius: var(--radius2);
          padding: 16px;
          box-shadow: var(--shadow2);
        }

        .cardTitle {
          margin: 0 0 10px 0;
          font-weight: 950;
          letter-spacing: -0.2px;
          font-size: 16px;
        }

        .list {
          margin: 0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.75;
        }

        /* Sections */
        .section {
          padding: 26px 0;
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
          border: 1px solid var(--border2);
          border-radius: var(--radius);
          background: linear-gradient(180deg, var(--panel), var(--panel2));
          box-shadow: var(--shadow2);
          padding: 18px;
        }

        .kpiGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 14px;
        }

        .kpi {
          border: 1px solid var(--border2);
          border-radius: 16px;
          padding: 14px;
          background: color-mix(in srgb, var(--panel2) 80%, transparent);
        }

        .kpiVal {
          margin: 0;
          font-weight: 1000;
          letter-spacing: -0.4px;
          font-size: 16px;
        }

        .kpiLabel {
          margin: 6px 0 0 0;
          color: var(--muted2);
          font-size: 12.5px;
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
          border: 1px solid var(--border2);
          background: color-mix(in srgb, var(--panel2) 80%, transparent);
        }

        .chipIcon {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--brand2), var(--brand));
          margin-top: 5px;
          box-shadow: 0 0 0 4px rgba(87, 183, 255, 0.12);
          flex: 0 0 auto;
        }

        .chipText {
          font-size: 13px;
          line-height: 1.55;
          color: var(--muted);
        }

        .guideline {
          display: grid;
          gap: 10px;
          margin-top: 12px;
        }

        .guidelineItem {
          padding: 14px;
          border-radius: 14px;
          border: 1px solid var(--border2);
          background: color-mix(in srgb, var(--panel2) 80%, transparent);
        }

        .guidelineTitle {
          margin: 0 0 6px 0;
          font-weight: 950;
          letter-spacing: -0.2px;
        }

        .guidelineBody {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 13.5px;
        }

        .peopleList {
          margin: 10px 0 0 0;
          padding-left: 18px;
          line-height: 1.8;
          color: var(--muted);
        }

        /* Form */
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
          color: var(--muted2);
          font-weight: 850;
          letter-spacing: 0.2px;
        }

        input,
        select,
        textarea {
          width: 100%;
          border-radius: 14px;
          border: 1px solid var(--border2);
          background: color-mix(in srgb, var(--panel2) 80%, transparent);
          padding: 12px 12px;
          color: var(--text);
          outline: none;
          font-size: 14px;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: rgba(87, 183, 255, 0.55);
          box-shadow: 0 0 0 4px rgba(87, 183, 255, 0.14);
        }

        input::placeholder,
        textarea::placeholder {
          color: color-mix(in srgb, var(--muted2) 65%, transparent);
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

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: 14px;
          border: 1px solid var(--border2);
          text-decoration: none;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.2px;
          background: color-mix(in srgb, var(--panel2) 80%, transparent);
          color: var(--text);
          cursor: pointer;
        }

        .btn:hover {
          border-color: var(--border);
          background: var(--panel);
        }

        .btnPrimary {
          border-color: rgba(87, 183, 255, 0.55);
          background: linear-gradient(180deg, rgba(87, 183, 255, 0.9), rgba(47, 107, 255, 0.9));
          color: var(--brandText);
          box-shadow: 0 10px 28px rgba(47, 107, 255, 0.26);
        }

        .btnPrimary:hover {
          filter: brightness(1.04);
        }

        .note {
          font-size: 12px;
          color: var(--muted2);
          line-height: 1.6;
        }

        /* Footer */
        .footer {
          padding: 30px 0 44px;
          border-top: 1px solid var(--border2);
          margin-top: 18px;
          color: var(--muted2);
          font-size: 13px;
        }

        /* Mobile */
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
            font-size: 36px;
          }

          .menuBtn {
            display: inline-flex;
          }

          .navLinks {
            position: fixed;
            top: 66px;
            left: 14px;
            right: 14px;
            display: none;
            flex-direction: column;
            gap: 6px;
            padding: 12px;
            border-radius: 16px;
            background: color-mix(in srgb, var(--bg0) 88%, transparent);
            border: 1px solid var(--border2);
            backdrop-filter: blur(14px);
            box-shadow: var(--shadow);
          }

          .navLinks.open {
            display: flex;
          }

          .navLinks a {
            padding: 12px 12px;
            border-radius: 12px;
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

            <div className="navRight">
              <button
                className="iconBtn"
                type="button"
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </button>

              <button
                className="iconBtn menuBtn"
                type="button"
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen((v) => !v)}
              >
                ☰ Menu
              </button>

              <nav className={`navLinks ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
                <a href="#tracks" onClick={closeMenu}>
                  Tracks
                </a>
                <a href="#cfp" onClick={closeMenu}>
                  CFP
                </a>
                <a href="#submission" onClick={closeMenu}>
                  Submission
                </a>
                <a href="#committee" onClick={closeMenu}>
                  Committee
                </a>
                <a href="#registration" onClick={closeMenu}>
                  Registration
                </a>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="panel">
              <div className="panelInner">
                <span className="eyebrow">
                  <span className="dot" aria-hidden="true" />
                  {meta.dates} • {meta.cityLine}
                </span>

                <h1 className="h1">{meta.fullName}</h1>

                <p className="lead">{meta.theme}</p>

                <div className="divider" />

                <div className="kv">
                  <div className="kvRow">
                    <span className="kvPill">
                      <strong>Venue:</strong> UTSA Downtown Campus
                    </span>
                    <span className="kvPill">
                      <strong>Proceedings:</strong> Planning stage
                    </span>
                    <span className="kvPill">
                      <strong>Review:</strong> Double-blind
                    </span>
                  </div>

                  <div className="kvRow">
                    <span className="kvPill">
                      <strong>Address:</strong> {meta.address}
                    </span>
                  </div>
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
                <div className="note">Final track chairs and keynote speakers will be announced as confirmations are completed.</div>
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
              <div className="subline">Securing the post-quantum era while responsibly harnessing AI for resilient, trustworthy systems.</div>
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
                    <p className="kpiVal">Proceedings</p>
                    <p className="kpiLabel">{meta.proceedings}</p>
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
                  <li>Trusted systems must withstand disruption, supply chain risks, and policy constraints.</li>
                </ul>
                <div className="divider" />
                <div className="note">IC-SQITS bridges standards, engineering practice, and research to support deployment-ready pathways.</div>
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
                <div className="note">Special tracks support focused communities and timely themes. Track chair announcements coming soon.</div>
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
                Proceedings: <strong>{meta.proceedings}</strong>. Please follow the stated formatting requirements and anonymization rules.
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
                <div className="cardTitle">Important dates</div>
                <ul className="list">
                  {dates.map((d) => (
                    <li key={d.k}>
                      <strong>{d.k}:</strong> {d.v}
                    </li>
                  ))}
                </ul>
                <div className="divider" />
                <div className="note">Dates may be adjusted slightly based on proceedings timelines. Updates will be published here.</div>
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
                Submissions will be handled via <strong>Meteor</strong>. Details coming soon.
              </div>
            </div>
          </div>

          <div className="grid12">
            <div className="col7">
              <div className="card">
                <div className="cardTitle">How to submit</div>
                <ul className="list">
                  <li>Prepare an anonymized manuscript compliant with the final formatting instructions (link to be posted).</li>
                  <li>Submit via Meteor. The submission portal link will appear here once available.</li>
                  <li>Ensure all figures, appendices, and supplementary materials are anonymized.</li>
                </ul>
                <div className="divider" />
                <div className="note">If you need assistance with anonymization or templates, use the Contact form below.</div>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Submission status</div>
                <p className="lead" style={{ marginTop: 6 }}>
                  Meteor portal: <strong>Coming Soon</strong>
                </p>
                <div className="divider" />
                <div className="note">We will post: portal link, paper template, author instructions, and policy checklist.</div>
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
                  <li>
                    Registration: <strong>Coming Soon</strong>
                  </li>
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
              <div className="subline">Fill the following form.</div>
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
                      <input id="name" value={form.name} onChange={onChange("name")} placeholder="Your name" autoComplete="name" />
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
                      <textarea id="message" value={form.message} onChange={onChange("message")} placeholder="Write your message…" />
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
                </form>
              </div>
            </div>

            <div className="col5">
              <div className="card">
                <div className="cardTitle">Quick info</div>
                <ul className="list">
                  <li>
                    <strong>Conference:</strong> {meta.acronym}
                  </li>
                  <li>
                    <strong>Dates:</strong> {meta.dates}
                  </li>
                  <li>
                    <strong>Venue:</strong> {meta.venue}
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
        <div className="container">© 2026 IC-SQITS. All rights reserved.</div>
      </footer>
    </div>
  );
}

