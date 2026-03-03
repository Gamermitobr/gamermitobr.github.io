document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  alert('🔍 Form enviado!');
  const link = document.getElementById('link').value;
  console.log('🔍 Chamando API com link:', link);
  try {
    const res = await fetch('/.netlify/Functions/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link }),
    });
    if (!res.ok) throw new Error('Erro no server');
    const data = await res.json();
    console.log('✅ Resposta da API:', data);
    if (data.cuts && data.cuts.length > 0) {
      data.cuts.forEach((cut) => {
        const a = document.createElement('a');
        a.href = cut;
        a.download = cut.split('/').pop();
        a.textContent = `Baixar ${cut.split('/').pop()}`;
        document.body.appendChild(a);
        a.click();
      });
    } else {
      alert('Nenhum clipe gerado 😕');
    }
  } catch (err) {
    console.error('❌ Erro:', err);
    alert('Erro ao gerar highlights 😢');
  }
});
