const form = document.getElementById('uploadForm');

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

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'corte.mp4';
  a.click();
});
