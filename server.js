const express = require('express');
const { exec } = require('yt-dlp-exec');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/highlight', async (req, res) => {
  const { link } = req.body;
  const videoPath = `video-${Date.now()}.mp4`;

  try {
    // Baixa o vídeo
    await exec(link, { output: videoPath, format: 'mp4' });

    // Simula highlights (cortes automáticos)
    const highlights = [
      { start: 10, end: 30 },
      { start: 60, end: 90 },
    ];

    // Gera cortes
    const cuts = [];
    for (let i = 0; i < highlights.length; i++) {
      const cutPath = `cut-${i}-${Date.now()}.mp4`;
      await new Promise((resolve, reject) => {
        ffmpeg(videoPath)
          .setStartTime(highlights[i].start)
          .setDuration(highlights[i].end - highlights[i].start)
          .output(cutPath)
          .on('end', resolve)
          .on('error', reject)
          .run();
      });
      cuts.push(cutPath);
    }

    res.json({ cuts });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.get('/download/:file', (req, res) => {
  const file = req.params.file;
  res.download(file, (err) => {
    if (err) console.error(err);
    fs.unlinkSync(file);
  });
});

app.listen(3000, () => console.log('🚀 Server em http://localhost:3000'));
