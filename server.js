const express = require('express');
const { exec } = require('yt-dlp-exec');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/highlight', async (req, res) => {
  const { link } = req.body;
  const videoPath = `video-${Date.now()}.mp4`;

  try {
    await exec(link, { output: videoPath });
    res.json({ message: 'Vídeo baixado!', path: videoPath });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('🚀 Server em http://localhost:3000'));
