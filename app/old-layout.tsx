export const metadata = {
  title: "IC-SQITS 2026 — Secure Quantum Intelligence & Trusted Systems",
  description:
    "International Conference on Secure Quantum Intelligence and Trusted Systems (IC-SQITS 2026), San Antonio, TX, Dec 10–11, 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

