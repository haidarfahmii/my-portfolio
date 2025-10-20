# Personal Portfolio

Ini adalah proyek portofolio pribadi yang dibuat menggunakan Next.js, TypeScript, dan Tailwind CSS. Website ini menampilkan informasi tentang saya, pengalaman kerja, proyek yang pernah dikerjakan, serta keahlian yang dimiliki.

## ✨ Fitur Utama

* **Responsif:** Didesain agar tampil baik di berbagai ukuran layar (desktop, tablet, mobile).
* **Navigasi:** Dilengkapi dengan navigasi header yang sticky dan navigasi mobile (hamburger menu).
* **Animasi Halus:** Menggunakan Framer Motion untuk transisi antar halaman dan animasi komponen.
* **Komponen UI Modern:** Dibangun dengan Shadcn UI dan Radix UI untuk komponen yang aksesibel dan dapat disesuaikan.
* **Scrollspy:** Navigasi aktif mengikuti bagian halaman yang sedang dilihat.
* **Data Dinamis (Dummy):** Informasi pengalaman, proyek, dan keahlian diambil dari file JSON.
* **Struktur Proyek Rapi:** Mengikuti standar struktur proyek Next.js dengan App Router.

## 🛠️ Teknologi yang Digunakan

* **Framework:** [Next.js](https://nextjs.org/)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Komponen UI:** [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
* **Animasi:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/), [Lucide React](https://lucide.dev/)
* **Linting:** [ESLint](https://eslint.org/)

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

* [Node.js](https://nodejs.org/) (Direkomendasikan versi >= 18)
* [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), atau [bun](https://bun.sh/)

## 🚀 Instalasi

1.  **Clone repositori:**
    ```bash
    git clone [https://github.com/haidarfahmii/my-portfolio.git](https://github.com/haidarfahmii/my-portfolio.git)
    cd my-portfolio
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    # atau
    bun install
    ```

## 📂 Susunan Proyek
```bash
my-portfolio/
├── .gitignore
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── icons/
│   │   ├── css.svg
│   │   ├── github.svg
│   │   ├── gitlab.svg
│   │   ├── html.svg
│   │   ├── javascript.svg
│   │   ├── nextjs.svg
│   │   ├── postman.svg
│   │   ├── reactjs.svg
│   │   ├── svelte.svg
│   │   └── vscode.svg
│   ├── images/
│   │   ├── foto.png
│   │   ├── jinwo.png
│   │   ├── profile.jpg
│   │   └── project.png
│   ├── next.svg
│   ├── resume/
│   │   ├── badge.svg
│   │   ├── cap.svg
│   │   └── icons/
│   │       ├── bootstrap.svg
│   │       ├── css3.svg
│   │       ├── html5.svg
│   │       ├── javascript.svg
│   │       ├── nextjs.svg
│   │       ├── php.svg
│   │       ├── react.svg
│   │       ├── scroll.svg
│   │       └── tailwind.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AboutMe.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero/
│   │   │   └── Hero.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Nav.tsx
│   │   ├── PageTransition.tsx
│   │   ├── Photo.tsx
│   │   ├── ProfileCard.css
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileImage.tsx
│   │   ├── Project.tsx
│   │   ├── Skill.tsx
│   │   ├── SocialLinks/
│   │   │   └── SocialLinks.tsx
│   │   ├── StairTransition.tsx
│   │   ├── Stairs.tsx
│   │   ├── Stats.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── sheet.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       └── tooltip.tsx
│   ├── dummy/
│   │   ├── experience.json
│   │   ├── project.json
│   │   └── skill.json
│   └── lib/
│       └── utils.ts
└── tsconfig.json
```

## ▶️ Menjalankan Proyek

Untuk menjalankan server pengembangan lokal:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```
