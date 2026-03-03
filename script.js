document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const link = document.getElementById('link').value;

  const res = await fetch('/highlight', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ link }),
  });

  const data = await res.json();
  data.cuts.forEach((cut) => {
    const a = document.createElement('a');
    a.href = `/download/${cut}`;
    a.download = cut;
    a.textContent = `Baixar ${cut}`;
    document.body.appendChild(a);
  });
});
