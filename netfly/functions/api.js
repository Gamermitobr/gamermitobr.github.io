const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const { url, start, end } = JSON.parse(event.body);

  // Gera o nome do arquivo
  const filename = `clip-${Date.now()}.mp4`;
  const command = `yt-dlp --download ${url} --output ${filename} --start ${start} --end ${end}`;

  try {
    await new Promise((resolve, reject) => {
      exec(command, (err, stdout) => {
        if (err) reject(err);
        else resolve(stdout);
      });
    });

    // Lê o arquivo gerado
    const filePath = path.join('/tmp', filename);
    const file = fs.readFileSync(filePath);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
      body: file.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};