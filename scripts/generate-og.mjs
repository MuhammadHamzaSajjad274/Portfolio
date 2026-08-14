import { createCanvas } from "canvas";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WIDTH = 1200;
const HEIGHT = 630;
const FONT = "system-ui, -apple-system, BlinkMacSystemFont, sans-serif";

function hexToRgba(hex) {
  const h = hex.replace("#", "");
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const a = parseInt(h.slice(6, 8), 16) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawAurora(ctx, cx, cy, radius, opacity) {
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  grad.addColorStop(0, `rgba(224, 169, 94, ${opacity})`);
  grad.addColorStop(1, "rgba(224, 169, 94, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#08070a";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

ctx.strokeStyle = hexToRgba("#e0a95e0d");
ctx.lineWidth = 1;
for (let x = 0; x <= WIDTH; x += 40) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, HEIGHT);
  ctx.stroke();
}
for (let y = 0; y <= HEIGHT; y += 40) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(WIDTH, y);
  ctx.stroke();
}

drawAurora(ctx, 150, 100, 350, 0.06);
drawAurora(ctx, 950, 315, 400, 0.05);
drawAurora(ctx, 600, 580, 350, 0.03);

const borderGrad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
borderGrad.addColorStop(0, "#e0a95e");
borderGrad.addColorStop(1, "#a97b3c");
ctx.fillStyle = borderGrad;
ctx.fillRect(0, 0, 4, HEIGHT);

ctx.textBaseline = "top";

ctx.font = `600 13px ${FONT}`;
ctx.fillStyle = "#e0a95e";
const labelText = "PORTFOLIO";
ctx.fillText(labelText, 80, 180);
const labelWidth = ctx.measureText(labelText).width;
const lineY = 180 + 6.5;
ctx.strokeStyle = "#e0a95e";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(80 + labelWidth + 16, lineY);
ctx.lineTo(80 + labelWidth + 16 + 40, lineY);
ctx.stroke();

ctx.font = `800 72px ${FONT}`;
ctx.fillStyle = "#f4f0e9";
ctx.fillText("Muhammad Hamza", 80, 240);
ctx.fillText("Sajjad", 80, 320);

ctx.font = `500 22px ${FONT}`;
ctx.fillStyle = "#e0a95e";
ctx.fillText("AI/ML Engineer  ·  LLM Developer", 80, 390);

ctx.font = `400 17px ${FONT}`;
ctx.fillStyle = "#8f8779";
ctx.fillText(
  "Building intelligent systems with PyTorch, LangGraph & FastAPI",
  80,
  435,
);

const pills = ["Machine Learning", "LLM Applications", "Multi-Agent Systems"];
let pillX = 80;
ctx.font = `400 13px ${FONT}`;
for (const pill of pills) {
  const textWidth = ctx.measureText(pill).width;
  const padX = 16;
  const padY = 8;
  const pillW = textWidth + padX * 2;
  const pillH = 13 + padY * 2;
  const pillY = 560;

  roundRect(ctx, pillX, pillY, pillW, pillH, pillH / 2);
  ctx.fillStyle = hexToRgba("#e0a95e14");
  ctx.fill();
  ctx.strokeStyle = hexToRgba("#e0a95e47");
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = "#b8afa1";
  ctx.fillText(pill, pillX + padX, pillY + padY);
  pillX += pillW + 12;
}

const cardX = 820;
const cardY = (HEIGHT - 340) / 2;
const cardW = 280;
const cardH = 340;

roundRect(ctx, cardX, cardY, cardW, cardH, 24);
ctx.fillStyle = hexToRgba("#18161c8c");
ctx.fill();
ctx.strokeStyle = hexToRgba("#e0a95e24");
ctx.lineWidth = 1;
ctx.stroke();

const avatarCx = cardX + cardW / 2;
const avatarCy = cardY + 70;
const avatarR = 50;

ctx.beginPath();
ctx.arc(avatarCx, avatarCy, avatarR, 0, Math.PI * 2);
ctx.fillStyle = "rgba(224, 169, 94, 0.2)";
ctx.fill();

ctx.font = `700 36px ${FONT}`;
ctx.fillStyle = "#e0a95e";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("HS", avatarCx, avatarCy);
ctx.textAlign = "left";
ctx.textBaseline = "top";

ctx.textAlign = "center";
ctx.font = `400 13px ${FONT}`;
ctx.fillStyle = "#8f8779";
ctx.fillText("Available for", avatarCx, avatarCy + 70);

ctx.font = `600 18px ${FONT}`;
ctx.fillStyle = "#f4f0e9";
ctx.fillText("AI/ML Roles", avatarCx, avatarCy + 92);

ctx.beginPath();
ctx.arc(avatarCx, avatarCy + 125, 4, 0, Math.PI * 2);
ctx.fillStyle = "#7fc7c4";
ctx.fill();

const stats = [
  ["3+", "Internships"],
  ["4", "Projects"],
  ["25+", "Technologies"],
];
let statY = avatarCy + 145;
for (const [num, label] of stats) {
  ctx.font = `700 24px ${FONT}`;
  const numW = ctx.measureText(num).width;
  ctx.font = `400 12px ${FONT}`;
  const labelW = ctx.measureText(label).width;
  const totalW = numW + 8 + labelW;
  const startX = avatarCx - totalW / 2;

  ctx.textAlign = "left";
  ctx.font = `700 24px ${FONT}`;
  ctx.fillStyle = "#e0a95e";
  ctx.fillText(num, startX, statY);
  ctx.font = `400 12px ${FONT}`;
  ctx.fillStyle = "#8f8779";
  ctx.fillText(label, startX + numW + 8, statY + 10);
  statY += 36;
}

ctx.textAlign = "left";
ctx.font = `400 14px ${FONT}`;
ctx.fillStyle = "#8f8779";
ctx.fillText("hamzasajjad.vercel.app", 880, 590);

const outPath = path.join(__dirname, "..", "public", "hamzaa.png");
fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
console.log(`OG image saved to ${outPath}`);
