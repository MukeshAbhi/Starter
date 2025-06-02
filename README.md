# 🧱 Next.js Full-Stack Baseplate

A modern full-stack starter template built with **Turborepo**, **Next.js**, **Node.js** ,**Tailwind CSS**, **Prisma**, **Auth.js**, and more — perfect for building scalable apps like payment dashboards, SaaS tools, and beyond.

---

## 🚀 Tech Stack

- ⚡ **Turborepo** – Monorepo and build orchestration
- 🌐 **Node.js** – Server-side JavaScript runtime
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
│   └── node-app/             # Node.js API (Express)
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

✅ Two Next.js apps (dev and web)  
✅ One Node.js API (Express)  
✅ Shared authentication via Auth.js v5 + Prisma  
✅ Reusable, themeable components using shadcn/ui + Tailwind  
✅ Global shared state with Jotai  
✅ PostgreSQL + Prisma ORM for strong backend support  
✅ Fully typed with TypeScript  
✅ Scalable monorepo structure for team and feature growth  

---

## 🚀 Project Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/MukeshAbhi/Starter
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Prisma PostgreSQL Database

This step initializes your database and Prisma schema.

```bash
pnpm setup:db
```

This command will:

- Install required packages for `@repo/db`
- Sets up a Prisma PostgresSQL Database
- Initialize Prisma
- Create the `.env` and `schema.prisma` files in `packages/db`

> 🔧 If this fails with Prisma not found, ensure Prisma is installed in `@repo/db`:
>
> ```bash
> pnpm add prisma --save-dev --filter=@repo/db
> ```

### 4. Setup Environment Variables

#### ➔ In `packages/db/.env`  

Automatically generated in Step 3. Make sure it includes your PostgreSQL `DATABASE_URL`.

#### ➔  change .env.example to .env.local In `apps/dev-app` , `apps/web-app` and `node-app`

#### ➔ In `apps/dev-app/.env.local` , `apps/web-app/.env.local` and `node-app/.env.local`

Add Database URL from `packages/db/.env`

#### To generate AUTH_SECRET

```bash
    npx auth secret
```

### 5. Add Prisma Schema

Visit [Prisma Adapter Schemas](https://authjs.dev/getting-started/adapters/prisma) and copy the **PostgreSQL schema**.

Paste it into:

```bash

packages/db/prisma/schema.prisma

```

---

### 6. Initialize Database

```bash
pnpm turbo db:generate --filter=@repo/db
pnpm turbo db:migrate --filter=@repo/db
```

> Make sure your PostgreSQL server is running and your `DATABASE_URL` is correct in `packages/db/.env`.

---

### 7. Run Dev Server

```bash
pnpm run dev --filter=apps/dev-app
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
