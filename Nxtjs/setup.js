import { execSync } from "child_process";
import path from 'path';

const shouldSetupDB = process.argv.includes("--db");

console.log("🔧 Starting project setup...");

if (shouldSetupDB) {
  console.log("🛠 Running DB setup with Prisma...");

  try {
    // Install dependencies
    console.log("⬇ Installing dependencies...");
    execSync("pnpm install --filter=@repo/db", { stdio: "inherit" });

    // Initialize Prisma
    console.log("⬇ Initializing Prisma...");
    execSync("pnpm exec prisma init --db", {
      cwd: path.resolve("packages/db"), // Set the working directory to the @repo/db package
      stdio: "inherit",
    });
    console.log("✅ Prisma DB setup complete.");
  } catch (err) {
    console.error("❌ Error during Prisma DB setup:", err.message);
    process.exit(1); // Exit if any command fails
  }

} else {
  console.log("🤏 Skipping DB setup. Run with --db to enable DB setup.");
}
