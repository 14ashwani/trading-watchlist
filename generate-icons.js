#!/usr/bin/env node
// Run: node generate-icons.js
// Requires: npm install canvas

const { createCanvas } = require('canvas');
const fs = require('fs');

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const r = size * 0.15;

  // Background
  ctx.fillStyle = '#0f1117';
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.quadraticCurveTo(size, 0, size, r);
  ctx.lineTo(size, size - r);
  ctx.quadraticCurveTo(size, size, size - r, size);
  ctx.lineTo(r, size);
  ctx.quadraticCurveTo(0, size, 0, size - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.fill();

  // Grid lines (subtle)
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = size * 0.01;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath(); ctx.moveTo(0, size * i / 4); ctx.lineTo(size, size * i / 4); ctx.stroke();
  }

  // Chart bars
  const bars = [0.4, 0.7, 0.55, 0.85, 0.65, 0.9];
  const bw = size * 0.07;
  const gap = size * 0.04;
  const startX = size * 0.12;
  const baseY = size * 0.78;
  const maxH = size * 0.48;

  bars.forEach((h, i) => {
    const x = startX + i * (bw + gap);
    const barH = maxH * h;
    const color = i < 3 ? '#3b82f6' : '#22c55e';
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x, baseY - barH, bw, barH, size * 0.015);
    ctx.fill();
  });

  // Trend line
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = size * 0.025;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  bars.forEach((h, i) => {
    const x = startX + i * (bw + gap) + bw / 2;
    const y = size * 0.78 - maxH * h;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dot at end
  const lastX = startX + (bars.length - 1) * (bw + gap) + bw / 2;
  const lastY = size * 0.78 - maxH * bars[bars.length - 1];
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(lastX, lastY, size * 0.035, 0, Math.PI * 2);
  ctx.fill();

  return canvas.toBuffer('image/png');
}

[192, 512].forEach(size => {
  fs.writeFileSync(`icon-${size}.png`, drawIcon(size));
  console.log(`Created icon-${size}.png`);
});
