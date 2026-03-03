document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const link = document.getElementById('link').value;
  try {
    const res = await fetch('/.netlify/functions/API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link }),
    });
    if (!res.ok) throw new Error('Erro no server');
    const data = await res.json();
    data.cuts.forEach((cut) => {
      const a = document.createElement('a');
      a.href = cut; // supondo que 'cut' é a URL completa
      a.download = cut.split('/').pop(); // pega só o nome do arquivo
      a.textContent = `Baixar ${cut.split('/').pop()}`;
      document.body.appendChild(a);
      a.click(); // já aciona o download
    });
  } catch (err) {
    console.error(err);
    alert('Erro ao gerar highlights 😢');
  }
});
