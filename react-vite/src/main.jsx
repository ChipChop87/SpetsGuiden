import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AlertTriangle, Baby, Dog, HeartPulse, Home, ListChecks, PawPrint, ShieldAlert } from "lucide-react";
import { stages, warnings } from "./content.js";
import "./styles.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`, {
      scope: import.meta.env.BASE_URL
    });
  });
}

function BulletSection({ icon: Icon, title, items, tone = "" }) {
  return (
    <section className={`stage-section ${tone}`}>
      <h3><Icon size={20} /> {title}</h3>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

function StageView({ stage }) {
  return (
    <article className="stage-card">
      <div className="stage-top">
        <div>
          <p className="eyebrow">{stage.age}</p>
          <h2>{stage.title}</h2>
        </div>
        <div className="calm-note"><HeartPulse size={20} /> {stage.calm}</div>
      </div>
      <div className="section-grid">
        <BulletSection icon={PawPrint} title="Vad händer nu?" items={stage.development} />
        <BulletSection icon={ListChecks} title="Som ägare: gör så här" items={stage.owner} />
        <BulletSection icon={AlertTriangle} title="Utmaningar att vara beredd på" items={stage.challenges} tone="challenge" />
        <BulletSection icon={Baby} title="Om det finns barn hemma" items={stage.children} tone="children" />
        <BulletSection icon={Dog} title="Skötsel just nu" items={stage.care} />
        <BulletSection icon={ShieldAlert} title="När du ska söka hjälp" items={stage.help} />
      </div>
    </article>
  );
}

function BreedView() {
  return (
    <>
      <article className="info-layout">
        <div>
          <p className="eyebrow">Rasen i korthet</p>
          <h2>Finsk spets</h2>
          <p>Finsk spets är en alert, livlig och självständig nordisk spets. Rasen är framtagen som skällande fågelhund och har ofta tydlig jaktlust, snabb reaktion på ljud och rörelser samt stark vilja att berätta när något händer.</p>
        </div>
        <div className="quick-grid">
          <div><strong>Passar bäst med</strong><span>ägare som vill träna mjukt, vara konsekventa och ge både rörelse och nosarbete.</span></div>
          <div><strong>Räkna med</strong><span>skall, jaktintresse, pälsfällning, unghundsperioder och behov av tydliga vardagsrutiner.</span></div>
          <div><strong>Viktigt tidigt</strong><span>socialisering, inkallning, hantering, ensamhetsträning och lugn träning runt barn.</span></div>
        </div>
      </article>
      <div className="card-grid">
        <article className="mini-card"><h3>Skall och larm</h3><p>Rasens skall är inte trots i sig. Den är avlad för att markera. Målet är att lära hunden när det räcker, inte att försöka ta bort all kommunikation.</p></article>
        <article className="mini-card"><h3>Jaktlust</h3><p>Små djur, fåglar och snabba rörelser kan trigga. Använd koppel eller lina tills inkallning fungerar i störning.</p></article>
        <article className="mini-card"><h3>Päls</h3><p>Dubbelpälsen behöver regelbunden borstning, särskilt vid fällning. Bada sparsamt och håll koll på klor, tänder och öron.</p></article>
        <article className="mini-card"><h3>Relation</h3><p>Belöna kontakt, gör korta pass och avsluta innan valpen blir övertrött. Finsk spets svarar bäst på trygg, tydlig och vänlig träning.</p></article>
      </div>
    </>
  );
}

function WarningsView() {
  return (
    <>
      <article className="warning-hero">
        <p className="eyebrow">Varningar</p>
        <h2>Gör inte detta</h2>
        <p>Den här delen är extra tydlig för att minska stress: vissa saker är vanliga, andra kräver snabb kontakt med veterinär. Vid osäkerhet är det alltid rimligt att ringa veterinär och fråga.</p>
      </article>
      <div className="warning-grid">
        {warnings.map((warning) => (
          <article className={`warning-card ${warning.critical ? "critical" : ""}`} key={warning.title}>
            <h3>{warning.title}</h3>
            <p>{warning.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function App() {
  const [view, setView] = useState("timeline");
  const [stageId, setStageId] = useState(stages[0].id);
  const selectedStage = stages.find((stage) => stage.id === stageId) || stages[0];

  return (
    <main className="shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Finsk spets från valp till vuxen</p>
          <h1>SpetsGuiden</h1>
          <p className="lead">En lugn och praktisk app för nya hundägare: välj ålder och se vad som är vanligt, vad du ska träna på och vilka utmaningar du kan förvänta dig.</p>
        </div>
        <img className="dog-art" src={`${import.meta.env.BASE_URL}finsk-spets.svg`} alt="Illustration av finsk spets" />
      </header>

      <nav className="tabs" aria-label="Appens delar">
        <button className={`tab ${view === "timeline" ? "active" : ""}`} onClick={() => setView("timeline")}><PawPrint size={20} /> Ålder</button>
        <button className={`tab ${view === "breed" ? "active" : ""}`} onClick={() => setView("breed")}><Dog size={20} /> Rasprofil</button>
        <button className={`tab warning-tab ${view === "warnings" ? "active" : ""}`} onClick={() => setView("warnings")}><ShieldAlert size={20} /> Varningar</button>
      </nav>

      {view === "timeline" && (
        <section className="timeline-screen">
          <aside className="age-list" aria-label="Välj ålder">
            {stages.map((stage) => (
              <button className={`age-button ${stage.id === stageId ? "active" : ""}`} key={stage.id} onClick={() => setStageId(stage.id)}>
                <strong>{stage.age}</strong>
                <span>{stage.title}</span>
              </button>
            ))}
          </aside>
          <StageView stage={selectedStage} />
        </section>
      )}
      {view === "breed" && <BreedView />}
      {view === "warnings" && <WarningsView />}

      <footer className="footer-note">
        <Home size={18} /> Appen ersätter inte veterinär, uppfödare eller hundinstruktör. Den hjälper dig att veta vad som ofta är normalt och när du bör söka hjälp.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
