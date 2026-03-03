document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const link = document.getElementById('link').value;
  const res = await fetch('/highlight', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ link }),
  });
  const data = await res.json();
  document.getElementById('highlights').innerHTML = data.highlights
    .map(h => `
      <p>${h.start}s - ${h.end}s 
        <button onclick="baixarCorte(${h.start}, ${h.end})">Baixar</button>
      </p>
    `)
    .join('');
});

async function baixarCorte(start, end) {
  const link = document.getElementById('link').value;
  const res = await fetch('/cut', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ link, start, end }),
  });
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `corte-${start}-${end}.mp4`;
  a.click();
}
