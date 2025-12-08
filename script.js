const apiKey = 'AIzaSyD76062dyWycPGBt2zWqOV17kHdx4q9ARM';
const canalId = 'https://youtube.com/@jpfilmes-x4h?si=MG_8AOotO4gJ_TBO'; // ou 'https://www.youtube.com/c/NOME_DO_CANAL'
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${canalId}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    videos.forEach(video => {
      console.log(video.snippet.title);
      console.log(video.snippet.thumbnails.default.url);
      console.log(video.snippet.description);
    });
  })
  .catch(error => console.error(error));
