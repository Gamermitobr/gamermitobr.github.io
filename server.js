const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const ytdl = require('ytdl-core');

const app = express();
app.use(express.json());

app.post('/highlight', async (req, res) => {
  const { link } = req.body;
  const videoPath = `video-${Date.now()}.mp4`;

  try {
    // Baixa vídeo
    await new Promise((resolve, reject) => {
      ytdl(link)
        .pipe(fs.createWriteStream(videoPath))
        .on('finish', resolve)
        .on('error', reject);
    });

    // Detecta highlights (ex: picos de áudio)
    ffmpeg.ffprobe(videoPath, (err, metadata) => {
      const highlights = [];
      // Exemplo simples: detectar picos (precisa de lib melhor)
      highlights.push({ start: 10, end: 30 }); // mock highlight
      highlights.push({ start: 60, end: 90 });

      res.json({ highlights });
    });
  } catch (err) {
    res.status(500).send('Erro');
  }
});

app.listen(3000, () => console.log('Server em http://localhost:3000'));
