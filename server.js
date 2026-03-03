const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const { exec } = require('yt-dlp-exec');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/highlight', async (req, res) => {
  const { link } = req.body;
  console.log('🔍 Link recebido:', link);
  const videoPath = `video-${Date.now()}.mp4`;

  try {
    await exec(link, {
      output: videoPath,
      format: 'mp4',
    });
    console.log('✅ Vídeo baixado');

    // Mock highlights (precisa de lógica real)
    const highlights = [
      { start: 10, end: 30 },
      { start: 60
