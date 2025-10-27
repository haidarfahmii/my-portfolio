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
```pgsql
FAHMI-PORTFOLIO/
├── .next/
├── .qodo/
├── node_modules/
├── public/
│   ├── icons/
│   ├── images/
│   │   ├── photo.jpg
│   │   ├── profile.jpg
│   │   └── project.png
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │      └── contact/
│   │   │         └── route.ts
│   │   ├── components/
│   │   │   ├── modals/
│   │   │   │   ├── ContactModal.tsx
│   │   │   │   ├── CVModal.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   ├── ui/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── Stairs.tsx
│   │   │   └── StairTransition.tsx
│   │   ├── dummy/
│   │   │   ├── contact.json
│   │   │   ├── experience.json
│   │   │   ├── project.json
│   │   │   ├── skill.json
│   │   │   └── testimonial.json
│   │   ├── feature/
│   │   │   ├── About/components/
│   │   │   │   └── AboutMe.tsx
│   │   │   ├── Contact/
│   │   │   │   └── Components/
│   │   │   │      └── Contact.tsx
│   │   │   │   └── hooks/
│   │   │   │      └── useFormContact.tsx
│   │   │   ├── Experience/components/
│   │   │   │   └── Experience.tsx
│   │   │   ├── Header/components/
│   │   │   │   └── Header.tsx
│   │   │   ├── Hero/components/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Photo.tsx
│   │   │   │   └── SocialLinks.tsx
│   │   │   ├── Navigation/components/
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   └── Nav.tsx
│   │   │   ├── Project/
│   │   │   │   ├── Project.tsx
│   │   │   ├── Skill/
│   │   │   │   ├── Skill.tsx
│   │   │   └── Testimonial/components/
│   │   │       └── Testimonial.tsx
│   │   ├── lib/
│   │   │   └── utils.ts 
│   │   ├── utils
│   │   │   └── axios-instance.ts 
│   │   │   └── backendless.ts 
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── .env
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
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
