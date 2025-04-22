# 🧱 Next.js Full-Stack Baseplate

A modern full-stack starter template built with **Turborepo**, **Next.js**, **Tailwind CSS**, **Prisma**, **Auth.js**, and more — perfect for building scalable apps like payment dashboards, SaaS tools, and beyond.

---

## 🚀 Tech Stack

- ⚡ **Turborepo** – Monorepo and build orchestration
- ⚛️ **Next.js** – Full-stack React framework
- 🎨 **Tailwind CSS** – Utility-first styling framework
- 💅 **shadcn/ui** – Reusable, themeable components powered by Tailwind
- 🛢 **PostgreSQL + Prisma** – Scalable database with type-safe ORM
- 🔐 **Auth.js v5** – Authentication using Prisma Adapter
- 🧠 **Jotai** – Minimalistic and flexible state management
- 🧾 **TypeScript** – Strongly typed for better DX and maintainability

---

## 📁 Folder Structure

```bash
.
├── apps/
│   ├── dev-app/              # Main production app (Next.js)
│   └── web-app/              # Main production app (Next.js)
│
├── packages/
│   ├── db/                   # Prisma schema and DB client (shared)
│   ├── eslint-config/        # Shared ESLint configuration
│   ├── store/                # Jotai-based global state management
│   ├── typescript-config/    # Shared TypeScript config
│   └── ui/                   # Shared UI components (shadcn + Tailwind)
│
├── .turbo/                   # Turborepo cache and pipeline settings
├── .vscode/                  # Editor settings and extensions
├── .gitignore
├── .npmrc
```

---

## 🧪 Features

✅ Shared authentication via Auth.js v5 + Prisma  
✅ Reusable, themeable components using shadcn/ui + Tailwind  
✅ Global shared state with Jotai  
✅ PostgreSQL + Prisma ORM for strong backend support  
✅ Fully typed with TypeScript  
✅ Scalable monorepo structure for team and feature growth  

---

## ⚙️ Get Started

### 1. Clone the Repository

```bash
git clone https://github.com/MukeshAbhi/Starter
cd Nxtjs
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

#### ➤ In `packages/db/.env` (or root if shared):

```env
DATABASE_URL=postgresql://<your-db-url>
```

#### ➤ In `apps/dev-app/.env.local` and `apps/web-app/.env.local`:

```env
AUTH_SECRET=your_auth_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
AUTH_JWT_SECRET=your_jwt_secret
```

---

### 4. Initialize Database

```bash
pnpm prisma migrate dev --name init --filter=packages/db
pnpm prisma generate --filter=packages/db
```

---

### 5. Run Dev Server

```bash
pnpm run dev --filter=apps/web-app
```

---

## 📦 Deployment

Easily deploy to platforms like **Vercel**, **Render**, or any cloud provider that supports PostgreSQL and Node.js. Just ensure your environment variables are configured in the respective dashboard.

---

## 🙌 Credits

- 🧑‍💻 Built and maintained by [@MukeshAbhi](https://github.com/MukeshAbhi)
- 🖌️ UI powered by [shadcn/ui](https://ui.shadcn.com)
- 🔒 Auth via [Auth.js](https://authjs.dev/)
- 🛠 DB layer by [Prisma](https://www.prisma.io/)

---

## 📄 License

MIT License – Free to use and customize.