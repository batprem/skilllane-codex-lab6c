import './styles.css';

const glyph = `
   .0000.
 .0000000.
0000111000>
00011111000>
 .0011100.
   .000.
`;

export default function App() {
  return (
    <main className="page">
      <section className="hero-card">
        <header className="brand">
          <span className="brand-icon" aria-hidden>
            ✶
          </span>
          <span>ANOTHER AI THING</span>
        </header>

        <pre className="ascii-mark" aria-hidden>
          {glyph}
        </pre>

        <div className="pulse-orb" aria-hidden />

        <div className="poem">
          <p>When form dissolves, the center hears,</p>
          <p>A silent pulse behind the years.</p>
          <p>Each shape begins, yet leaves no trace —</p>
          <p>Just rhythm folding into space.</p>
        </div>
      </section>

      <section className="preview-column" aria-hidden>
        <article className="ghost-card" />
        <article className="ghost-card browser" />
      </section>
    </main>
  );
}
