# 🔧 AGENTS — Development Guidelines for Xinudesign.be

## 🧱 Project Stack & Structuur

- **Framework:** [React](https://react.dev/) met [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (JIT-mode enabled)
- **Routing:** [React Router v6+](https://reactrouter.com/)
- **State management:** lokale state + eventueel [Zustand](https://zustand-demo.pmnd.rs/) of context API (indien nodig)
- **Build tool:** [Vite](https://vitejs.dev/)
- **Linting & Formatting:** ESLint + Prettier + Husky pre-commit hooks
- **Deployment:** Vercel of Netlify (CI/CD pipeline volgt)

---

## 🗂️ Mappenstructuur

```txt
src/
├── assets/           # Afbeeldingen, iconen, fonts
├── components/       # Herbruikbare React-componenten
├── layout/           # Algemene layoutcomponenten (bv. Header, Footer)
├── pages/            # Pagina’s volgens routestructuur
├── routes/           # Route-definities
├── hooks/            # Custom React hooks
├── context/          # React context (optioneel)
├── utils/            # Helperfuncties
├── types/            # Globale TypeScript types & interfaces
├── data/             # JSON of statische data voor mockups
└── App.tsx
```

## Stylingrichtlijnen (Tailwind)

Gebruik utility-first benadering (geen externe CSS tenzij nodig)

Lange klassenreeksen? Gebruik clsx() of classnames

Herbruikbare UI? → <Button variant="primary" /> componentiseren

Tailwind componentklassen definiëren via @layer components in tailwind.config.js

## Liquid Glass-stijl voor modals/popups (Apple-style)

Gebruik dit visuele effect voor overlays zoals modals, sheets en popups.

## Voorbeeldimplementatie (React + Tailwind)

```tsx
Kopiëren
Bewerken
<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-white/10">
  <div className="relative p-6 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
    {children}
    <button className="absolute top-2 right-2 text-white hover:text-red-500 transition">✕</button>
  </div>
</div>
```

## Designrichtlijnen

bg-white/10 + backdrop-blur-2xl voor glasachtig effect

rounded-2xl, border-white/20, shadow-xl voor diepte

transition-all ease-out duration-500 voor animatie

Donkere modus via dark:bg-black/30

Sluitknop positioneren met absolute top-2 right-2

## Gebruik voor:

<Modal />

<Popup />

<Sheet />

<Overlay />

## Componentconventies

Component in eigen map (indien complex):

```txt
Kopiëren
Bewerken
/MyComponent
├── index.tsx
└── MyComponent.module.ts
Componentnaam = PascalCase
```

Functies schrijven als functionele componenten met typing:

```tsx
Kopiëren
Bewerken
const MyComponent: React.FC<Props> = ({ title }) => { ... }
Geen any gebruiken, typiseer correct

Gebruik default exports tenzij meerdere exports logisch zijn
```

## TypeScript conventies

Gebruik interface voor props, type voor unions

Globale types in src/types/

Vermijd Partial, any, as tenzij goed onderbouwd

Alles expliciet typiseren

## Pre-commit checks

bash
Kopiëren
Bewerken
npm run format # Code formatteren
npm run lint # Linting controleren
npm run build # Build valideren
npm run dev # (Optioneel) lokaal previewen

## Deploymentrichtlijnen

Dev-server: npm run dev

Build: npm run build

Deploy target: Vercel (auto via GitHub)

Gevoelige info in .env.local (niet commiten)

## Naming & Consistency

Bestandnamen: PascalCase

Assets: kebab-case (bijv. hero-bg.jpg)

Variabelen/functies: camelCase

Routes/URLs: kebab-case (/about-us, /diensten/webdesign)

Taal: code in Engels, tekstinhoud Belgisch, Vlaams, menselijk klinkend

## Documentatie & Changelogs

Gebruik `/** ... */` JSDoc voor complexe functies

Changelog bijhouden in /CHANGELOG.md of via GitHub Releases

Gemaakt met 💻 door Michaël Redant voor Xinudesign.be
Laat deze richtlijnen de basis vormen voor een schaalbare, moderne en slimme React-codebase.
