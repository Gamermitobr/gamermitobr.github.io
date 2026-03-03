const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const ytdl = require('ytdl-core');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/cut', async (req, res) => {
  const { link, start, end } = req.body;
  const videoPath = `video-${Date.now()}.mp4`;
  const outputPath = `corte-${Date.now()}.mp4`;

  try {
    // Baixa vídeo
    await new Promise((resolve, reject) => {
      ytdl(link)
        .pipe(fs.createWriteStream(videoPath))
        .on('finish', resolve)
        .on('error', reject);
    });

    // Corta vídeo
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
    console.error(err);
    res.status(500).send('Erro no processamento');
  }
});

app.listen(3000, () => console.log('Server em http://localhost:3000'));
