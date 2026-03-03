exports.handler = async (event) => {
  console.log('🚀 API chamada!');
  console.log('🔍 Event recebido:', event);

  try {
    const { link } = JSON.parse(event.body);
    console.log('🔗 Link recebido:', link);

    // Exemplo de resposta (ajuste conforme sua lógica)
    const cuts = [
      `https:                        
      `https://example.com/cut2.mp4`,
    ];

    return {
      statusCode: 200,
      body: JSON.stringify({ cuts }),
    };
  } catch (err) {
    console.error('❌ Erro:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro interno' }),
    };
  }
};
