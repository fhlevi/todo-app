# 📝 Todo App

Aplikasi Todo yang dibangun dengan React, Vite, dan Tailwind CSS untuk membantu Anda mengelola tugas harian secara efisien. Aplikasi ini memungkinkan pengguna untuk menambahkan, mengedit, menyelesaikan, dan menghapus tugas dengan antarmuka yang responsif dan intuitif.

---

## 🚀 Demo

- Lihat aplikasi yang berjalan di: [todo-alpha-list.vercel.app](https://todo-alpha-list.vercel.app/)
- Lihat API di Swagger: [Swagger](https://todo-alpha-list.leapcell.app/swagger/index.html)

---

## 🛠️ Teknologi yang Digunakan

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS + Radix UI**
- **Zod**
- **Clsx** (ClassName Utility)
- **Vercel** (for deployment)

---

## 📦 Instalasi

1. **Clone repository:**

```bash
git clone https://github.com/fhlevi/todo-app.git
cd todo-app
```

2. **Install dependency:**

```bash
pnpm install
# atau
npm install
```

3. **Jalankan aplikasi dalam mode pengembangan:**

```bash
pnpm dev
# atau
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000/` secara default.

---

## 📁 Struktur Proyek

```bash
.
├── 📂 app
├── 📂 components/
│   ├── * atoms
│   ├── * molecules
│   └── * organisms
├── 📂 hooks
├── 📂 public
├── 📂 styles
├── 📂 types
├── 📂 utils
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── main.tsx
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite-env.d.ts
└── vite.config.ts

Notes:
📂: Folder
⚛️: related folder
```

---

## ✅ Skrip yang Tersedia

- `npm run dev`: Menjalankan aplikasi dalam mode pengembangan.
- `npm run build`: Membangun aplikasi untuk produksi.
- `npm run preview`: Menjalankan versi produksi secara lokal.

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda memiliki saran, perbaikan bug, atau fitur baru, silakan buka issue atau pull request.
