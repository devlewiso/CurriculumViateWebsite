// Genera los PDF del CV (español e inglés) en pdf/ imprimiendo /cv y /en/cv con Chrome headless.
// No van en public/: se suben a Google Drive y el sitio enlaza ahí.
// Uso: npm run cv:pdf   (compila, levanta el preview, imprime y lo apaga)
import { spawn, execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";

const PUERTO = 4329;
const CHROME = ["/opt/google/chrome/chrome", "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/brave"].find(existsSync);
if (!CHROME) throw new Error("No encontré Chrome/Chromium para imprimir el PDF");

execFileSync("npx", ["astro", "build"], { stdio: "inherit" });
const preview = spawn("npx", ["astro", "preview", "--port", String(PUERTO)], { stdio: "ignore", detached: true });
try {
    for (let i = 0; i < 40; i++) {
        try { await fetch(`http://localhost:${PUERTO}/cv/`); break; } catch { await new Promise((r) => setTimeout(r, 250)); }
    }
    mkdirSync("pdf", { recursive: true });
    for (const [ruta, archivo] of [["/cv/", "Iran_Lewis_Trinidad_Ortiz_CV_ES.pdf"], ["/en/cv/", "Iran_Lewis_Trinidad_Ortiz_CV_EN.pdf"]]) {
        execFileSync(CHROME, [
            "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
            `--print-to-pdf=pdf/${archivo}`, `http://localhost:${PUERTO}${ruta}`,
        ], { stdio: "ignore" });
        console.log(`Listo: pdf/${archivo}`);
    }
} finally {
    process.kill(-preview.pid);
}
