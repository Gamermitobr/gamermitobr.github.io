document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const link = document.getElementById('link').value;
  console.log('🔍 Chamando API com link:', link);
  try {
    const res = await fetch('/.netlify/functions/api.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link }),
    })
    .then(res => {
      console.log('✅ Resposta do fetch:', res);
      return res.json();
    })
    .catch(err => {
      console.error('❌ Erro no fetch:', err);
      alert('Erro ao conectar com a API 😢');
    });

    console.log('✅ Resposta da API:', res);
    if (res && res.cuts) {
      res.cuts.forEach((cut) => {
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
    console.error('❌ Erro geral:', err);
    alert('Erro ao gerar highlights 😢');
  }
});
