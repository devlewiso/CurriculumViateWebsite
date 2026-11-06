// Genera public/cv.pdf imprimiendo /cv con Chrome headless (mismo formato que el CV en LaTeX).
// Uso: npm run cv:pdf   (compila, levanta el preview, imprime y lo apaga)
import { spawn, execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const PUERTO = 4329;
const CHROME = ["/opt/google/chrome/chrome", "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/brave"].find(existsSync);
if (!CHROME) throw new Error("No encontré Chrome/Chromium para imprimir el PDF");

execFileSync("npx", ["astro", "build"], { stdio: "inherit" });
const preview = spawn("npx", ["astro", "preview", "--port", String(PUERTO)], { stdio: "ignore", detached: true });
try {
    for (let i = 0; i < 40; i++) {
        try { await fetch(`http://localhost:${PUERTO}/cv/`); break; } catch { await new Promise((r) => setTimeout(r, 250)); }
    }
    execFileSync(CHROME, [
        "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--print-to-pdf=public/cv.pdf", `http://localhost:${PUERTO}/cv/`,
    ], { stdio: "inherit" });
    console.log("Listo: public/cv.pdf");
} finally {
    process.kill(-preview.pid);
}
