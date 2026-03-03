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
    await new Promise((resolve, reject) => {
      ytdl(link)
        .pipe(fs.createWriteStream(videoPath))
        .on('finish', resolve)
        .on('error', reject);
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

    res.json({ url: `/${outputPath}` });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro');
  }
});

app.listen(3000, () => console.log('Server em http://localhost:3000'));
