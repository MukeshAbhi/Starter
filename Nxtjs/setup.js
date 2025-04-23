import { execSync } from "child_process";

const shouldSetupDB = process.argv.includes("--db");

console.log("🔧 Starting project setup...");

if (shouldSetupDB) {
  console.log("🛠 Running DB setup with Prisma...");

  try {
    execSync("pnpm prisma init --db =packages/db", {
      stdio: "inherit",
    });
    execSync("turbo db:migrate --filter=@repo/db", {
        stdio: "inherit",
      });
    execSync("turbo db:generate --filter=@repo/db", {
        stdio: "inherit",
    });
    console.log("✅ Prisma DB setup complete.");
  } catch (err) {
    console.error("❌ Error during Prisma DB setup:", err.message);
    process.exit(1);
  }

} else {
  console.log("🤏 Skipping DB setup. Run with --db to enable DB setup.");
}
