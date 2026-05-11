# SpetsGuiden

**SpetsGuiden** är en svensk app för nya ägare till finsk spets. Den fungerar som en enkel "valp-till-vuxen"-guide där man väljer hundens ålder och får praktiska råd om utveckling, skötsel, beteenden, barn i hemmet, vanliga utmaningar och varningssignaler.

Appen ersätter inte veterinär, uppfödare eller hundinstruktör. Den är tänkt som ett pedagogiskt stöd i vardagen.

## Versioner

- `spela-direkt/` - fristående HTML/CSS/JavaScript. Kan öppnas direkt i webbläsaren.
- `react-vite/` - React/Vite-version med mer app-känsla och bättre grund för vidareutveckling.

## Spela direkt utan installation

Använd den här versionen om appen bara ska öppnas lokalt på datorn.

1. Öppna mappen `SpetsGuiden`.
2. Öppna mappen `spela-direkt`.
3. Dubbelklicka på `index.html`.
4. Välj fliken **Ålder**, **Rasprofil** eller **Varningar**.
5. Klicka på den ålder som passar hunden, till exempel **11-12 veckor** eller **7-9 månader**.

Den här versionen kräver inte Python, Node.js, npm eller internet.

## Starta React/Vite-versionen

Krav:

- Node.js
- npm

Start:

1. Öppna en terminal i `SpetsGuiden/react-vite`.
2. Kör:

```bash
npm install
npm run dev
```

3. Öppna adressen som visas i terminalen.

I den här miljön körs appen på:

```text
http://127.0.0.1:5174
```

För att bygga en produktionsversion:

```bash
npm run build
```

## Innehåll i appen

Appen har tre huvuddelar:

- **Ålder** - utvecklingssteg från 8 veckor till vuxen hund.
- **Rasprofil** - kort om finsk spets: skall, jaktlust, päls, relation och aktivering.
- **Varningar** - saker man inte ska göra samt när veterinär bör kontaktas.

Åldersstegen:

- 8-10 veckor
- 11-12 veckor
- 3-4 månader
- 5-6 månader
- 7-9 månader
- 10-12 månader
- 1-2 år
- vuxen

Varje ålder innehåller:

- vad som händer i utvecklingen
- vad ägaren bör göra
- vanliga utmaningar
- råd om barn i hemmet
- skötsel just nu
- när man ska söka hjälp

## Källunderlag

Innehållet är sammanställt och omformulerat som praktisk vägledning. Rasprofilen bygger framför allt på Svenska Kennelklubbens information om finsk spets, kompletterat med hund- och veterinärkällor om valputveckling, barn och hund, skötsel, förgiftning och främmande föremål.

Använda källor och stödmaterial:

- Svenska Kennelklubben: `https://www.skk.se/hundraser/finsk-spets/`
- Svenska Kennelklubben, barn och hund: `https://www.skk.se/kopa-hund/ar-du-redo/barn-och-hund/`
- Hundnytt: `https://hundnytt.se/hundraser/finsk-spets/`
- Dogify: `https://dogify.se/hundraser-finsk-spets/`
- Hundskolan: `https://www.hundskolan.se/finsk-spets/`
- Hund24 om finska hundraser: `https://hund24.se/hundraser-ursprungsland/finland/`
- Agria och veterinärkällor som stöd för generell valp-, säkerhets- och skötselrådgivning.

## Mappstruktur

```text
SpetsGuiden/
  README.md
  spela-direkt/
    index.html
    styles.css
    app.js
    manifest.webmanifest
    assets/
  react-vite/
    package.json
    index.html
    public/
    src/
```
