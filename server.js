const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/cut', upload.single('video'), (req, res) => {
  const { start, end } = req.body;
  const videoPath = req.file.path;
  const outputPath = `corte-${Date.now()}.mp4`;

  ffmpeg(videoPath)
    .setInputFormat('mp4')
    .setStartTime(start)
    .setDuration(end - start)
    .output(outputPath)
    .on('end', () => {
      res.download(outputPath, (err) => {
        if (err) console.error(err);
        fs.unlinkSync(videoPath);
        fs.unlinkSync(outputPath);
      });
    })
    .run();
});

app.listen(3000, () => console.log('Server em 3000'));
