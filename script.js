document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const link = document.getElementById('link').value;

  try {
    const res = await fetch('https:                                
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ link }),
    });

    if (!res.ok) throw new Error('Erro no server');

    const data = await res.json();
    data.cuts.forEach((cut) => {
      const a = document.createElement('a');
      a.href = `https:                                    
      a.download = cut;
      a.textContent = `Baixar ${cut}`;
      document.body.appendChild(a);
    });
  } catch (err) {
    console.error(err);
    alert('Erro ao gerar highlights 😢');
  }
});
