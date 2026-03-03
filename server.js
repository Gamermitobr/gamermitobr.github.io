const express = require('express');
const { exec } = require('yt-dlp-exec');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/highlight', async (req, res) => {
  const { link } = req.body;
  console.log('🔍 Link recebido:', link);
  const videoPath = `video-${Date.now()}.mp4`;

  try {
    // Baixa o vídeo
    await exec(link, { output: videoPath, format: 'mp4' });
    console.log('✅ Vídeo baixado');

    // Simula highlights (cortes automáticos)
    const highlights = [
      { start: 10,
