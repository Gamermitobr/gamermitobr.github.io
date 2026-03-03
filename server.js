const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const ytdl = require('ytdl-core');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/highlight', async (req, res) => {
  const { link } = req.body;
  console.log('🔍 Link recebido:', link);
  const videoPath = `video-${Date.now()}.mp4`;

  try {
    if (!ytdl.validateURL(link)) {
      console.error('❌ Link inválido');
      return res
