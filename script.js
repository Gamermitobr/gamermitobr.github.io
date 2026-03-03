const form = document.getElementById('uploadForm');
const video = document.getElementById('videoPreview');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = document.getElementById('videoUpload').files[0];
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;

  const formData = new FormData();
  formData.append('video', file);
  formData.append('start', start);
  formData.append('end', end);

  const response = await fetch('/cut', {
    method: 'POST',
    body: formData,
  });

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'corte.mp4';
  a.click();
});
