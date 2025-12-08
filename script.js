const apiKey = 'SUA_CHAVE_DE_API';
const videoId = 'VIDEO_ID';
const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
