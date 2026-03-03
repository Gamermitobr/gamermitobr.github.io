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
      { start: 60, end: 90 },
    ];
    res.json({ highlights });
  } catch (err) {
    console.error('❌ ERRO DETALHADO:', err);
    res.status(500).send(err.message);
  }
});

app.post('/cut', async (req, res) => {
  const { link, start, end } = req.body;
  const videoPath = `video-${Date.now()}.mp4`;
  const outputPath = `corte-${Date.now()}.mp4`;

  try {
    await exec(link, {
      output: videoPath,
      format: 'mp4',
    });

    await new Promise((resolve, reject) => {
      ffmpeg(videoPath)
        .setStartTime(start)
        .setDuration(end - start)
        .output(outputPath)
        .on('end', resolve)
        .on('error', reject)
        .run();
    });

    res.download(outputPath, (err) => {
      if (err) console.error(err);
      fs.unlinkSync(videoPath);
      fs.unlinkSync(outputPath);
    });
  } catch (err) {
    console.error('❌ ERRO:', err);
    res.status(500).send('Erro');
  }
});

app.listen(3000, () => console.log('🚀 Server em http://localhost:3000'));
