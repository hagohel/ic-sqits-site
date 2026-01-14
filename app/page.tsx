import React from "react";

export const dynamic = "force-dynamic";

const styles: Record<string, React.CSSProperties> = {
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 20px" },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.85)",
    borderBottom: "1px solid #eee",
  },
  navInner: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" },
  brand: { fontWeight: 800, letterSpacing: 0.2 },
  navLinks: { display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "flex-end" },
  a: { color: "#111", textDecoration: "none", fontWeight: 600, fontSize: 14 },

  hero: { padding: "56px 0 28px 0" },
  pillRow: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 },
  pill: {
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid #e6e6e6",
    background: "#fafafa",
  },

  grid: { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 18 },
  card: {
    border: "1px solid #eee",
    borderRadius: 16,
    padding: 18,
    background: "#fff",
    boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
  },

  section: { padding: "34px 0" },
  h1: { fontSize: 38, margin: "0 0 10px 0", lineHeight: 1.1 },
  h2: { fontSize: 22, margin: "0 0 14px 0" },
  p: { margin: "10px 0", color: "#333", lineHeight: 1.6 },
  small: { color: "#555", lineHeight: 1.5, margin: "8px 0" },

  btnRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 },
  btn: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #111",
    background: "#111",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },
  btnGhost: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #e6e6e6",
    background: "#fff",
    color: "#111",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
  },

  footer: { padding: "26px 0 40px 0", borderTop: "1px solid #eee", color: "#666", fontSize: 13 },
  ul: { margin: "10px 0 0 18px", color: "#333", lineHeight: 1.7 },
  kbd: {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    fontSize: 12,
    padding: "2px 6px",
    border: "1px solid #e6e6e6",
    borderRadius: 6,
    background: "#fafafa",
  },
};

function Section(props: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={props.id} style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>{props.title}</h2>
        {props.children}
      </div>
    </section>
  );
}

function Col(props: { span: number; children: React.ReactNode }) {
  return <div style={{ gridColumn: `span ${props.span}` }}>{props.children}</div>;
}

export default function Page() {
  return (
    <div>
      <header style={styles.nav}>
        <div style={{ ...styles.container, ...styles.navInner }}>
          <div style={styles.brand}>IC-SQITS 2026</div>
          <nav style={styles.navLinks} aria-label="Primary navigation">
            <a style={styles.a} href="#home">Home</a>
            <a style={styles.a} href="#tpc">TPC</a>
            <a style={styles.a} href="#keynote">Keynote</a>
            <a style={styles.a} href="#cfp">CFP</a>
            <a style={styles.a} href="#registration">Registration</a>
            <a style={styles.a} href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <Col span={7}>
              <h1 style={styles.h1}>International Conference on Secure Quantum Intelligence and Trusted Systems</h1>
              <p style={styles.p}>
                <b>IC-SQITS 2026</b> brings together researchers and practitioners advancing{" "}
                <b>post-quantum security</b>, <b>secure AI</b>, and <b>trusted systems</b>.
              </p>

              <div style={styles.pillRow}>
                <span style={styles.pill}>San Antonio, Texas (USA)</span>
                <span style={styles.pill}>Dec 10–11, 2026</span>
                <span style={styles.pill}>UTSA Downtown (tentative)</span>
                <span style={styles.pill}>Proceedings: Springer LNCS/CCIS (planned)</span>
              </div>

              <div style={styles.btnRow}>
                <a style={styles.btn} href="#cfp">View Call for Papers</a>
                <a style={styles.btnGhost} href="#registration">Registration</a>
              </div>

              <p style={{ ...styles.small, marginTop: 14 }}>
                Focus areas include PQC migration, secure quantum networking, AI-driven cyber defense, and trusted
                architectures for critical infrastructure.
              </p>
            </Col>

            <Col span={5}>
              <div style={styles.card}>
                <h2 style={{ ...styles.h2, marginBottom: 10 }}>Important Dates (Proposed)</h2>
                <ul style={styles.ul}>
                  <li><b>Paper submission:</b> Aug 15, 2026</li>
                  <li><b>Notification:</b> Oct 1, 2026</li>
                  <li><b>Camera-ready:</b> Oct 20, 2026</li>
                  <li><b>Conference:</b> Dec 10–11, 2026</li>
                </ul>
                <p style={styles.small}>
                  Update these anytime—just edit <span style={styles.kbd}>app/page.tsx</span>.
                </p>
              </div>

              <div style={{ height: 14 }} />

              <div style={styles.card}>
                <h2 style={{ ...styles.h2, marginBottom: 10 }}>Special Tracks</h2>
                <ul style={styles.ul}>
                  <li>Quantum-Safe Cryptography & Standards</li>
                  <li>AI-Driven Cyber Defense</li>
                  <li>Secure Quantum Networks</li>
                  <li>Trusted AI & Algorithmic Governance</li>
                </ul>
              </div>
            </Col>
          </div>
        </div>
      </section>

      <Section id="tpc" title="Technical Program Committee (TPC)">
        <div style={styles.grid}>
          <Col span={6}>
            <div style={styles.card}>
              <h3 style={{ margin: 0 }}>Program Chairs</h3>
              <p style={styles.p}>
                <b>Dr. Hardik Gohel</b> — Associate Professor & Director of Applied AI, Texas A&amp;M University–Victoria (USA)
                <br />
                <b>Dr. Yun Wan</b> — University of Houston–Downtown (USA)
              </p>
              <p style={styles.small}>Review model: <b>double-blind</b>, minimum <b>3 reviewers per paper</b>.</p>
            </div>
          </Col>

          <Col span={6}>
            <div style={styles.card}>
              <h3 style={{ margin: 0 }}>TPC Members</h3>
              <p style={styles.small}>Add names, affiliations, and countries here.</p>
              <ul style={styles.ul}>
                <li>[Name], [Affiliation], [Country]</li>
                <li>[Name], [Affiliation], [Country]</li>
                <li>[Name], [Affiliation], [Country]</li>
              </ul>
            </div>
          </Col>
        </div>
      </Section>

      <Section id="keynote" title="Keynote Speakers">
        <div style={styles.card}>
          <ul style={styles.ul}>
            <li>Prof. Arthur James Swart — Central University of Technology (South Africa)</li>
            <li>Dr. Raul Villamarin Rodriguez — Woxsen University / UNESCO AI Expert</li>
            <li>Dr. Jagdish Chandra Patni — Apex Institute of Technology (India)</li>
            <li>Dr. Aparna Aravelli — North Carolina A&amp;T State University (USA)</li>
            <li>Ts. Dr. Mohammad Kamrul Hasan — Universiti Kebangsaan Malaysia (Malaysia)</li>
            <li>Jurga Zilinskiene MBE — CEO, Guildhawk (Industry)</li>
          </ul>
        </div>
      </Section>

      <Section id="cfp" title="Call for Papers (CFP)">
        <div style={styles.grid}>
          <Col span={7}>
            <div style={styles.card}>
              <p style={styles.p}>
                IC-SQITS 2026 invites <b>original, unpublished</b> research at the intersection of quantum computing, AI,
                and trusted digital systems.
              </p>
              <h3 style={{ margin: "14px 0 8px 0" }}>Topics include (not limited to)</h3>
              <ul style={styles.ul}>
                <li>Post-Quantum Cryptography (lattice/code/multivariate), PQC migration & deployment</li>
                <li>Quantum Key Distribution (QKD) and secure quantum networking</li>
                <li>AI-based anomaly detection, adversarial ML, model security & governance</li>
                <li>Trusted execution, secure architectures, critical infrastructure protection</li>
                <li>Hybrid quantum–classical security architectures & threat modeling</li>
                <li>Privacy engineering, secure data sharing, and zero-trust systems</li>
              </ul>
            </div>
          </Col>

          <Col span={5}>
            <div style={styles.card}>
              <h3 style={{ margin: 0 }}>Submission Types</h3>
              <ul style={styles.ul}>
                <li><b>Full papers</b></li>
                <li><b>Short papers</b></li>
              </ul>
              <p style={styles.small}>Formatting: Springer LNCS/CCIS templates. Double-blind review.</p>
            </div>
          </Col>
        </div>
      </Section>

      <Section id="registration" title="Registration">
        <div style={styles.grid}>
          <Col span={6}>
            <div style={styles.card}>
              <h3 style={{ margin: 0 }}>Registration</h3>
              <p style={styles.small}>Add your registration link once ready.</p>
              <a style={styles.btn} href="#contact">Registration (Coming Soon)</a>
            </div>
          </Col>

          <Col span={6}>
            <div style={styles.card}>
              <h3 style={{ margin: 0 }}>Venue</h3>
              <p style={styles.small}>
                Planned venue: <b>UTSA Downtown Campus, San Antonio, TX</b> (tentative). Alternative: nearby conference hotel (TBD).
              </p>
            </div>
          </Col>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div style={styles.card}>
          <ul style={styles.ul}>
            <li><b>General Chair:</b> [Your Name] — [your-email@domain.com]</li>
            <li><b>Program Chairs:</b> Dr. Hardik Gohel; Dr. Yun Wan</li>
          </ul>
        </div>
      </Section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          © 2026 IC-SQITS. All rights reserved. • San Antonio, TX • Dec 10–11, 2026
        </div>
      </footer>
    </div>
  );
}
