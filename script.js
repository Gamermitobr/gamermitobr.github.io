const form = document.getElementById('uploadForm');
const cortesDiv = document.getElementById('cortes');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const link = document.getElementById('videoLink').value;
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;

  const response = await fetch('/cut', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ link, start, end }),
  });

  const data = await response.json();
  cortesDiv.innerHTML = `
    <video controls src="${data.url}" width="300"></video>
    <a href="${data.url}" download="corte.mp4">Baixar corte</a>
  `;
});
