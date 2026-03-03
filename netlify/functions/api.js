const fetch = require('node-fetch');

exports.handler = async (event) => {
  console.log('🚀 Função API.js chamada!');
  console.log('🔍 Event recebido:', event);

  try {
    const { link } = JSON.parse(event.body);
    console.log('🔗 Link recebido:', link);

    // Exemplo de processamento (ajuste conforme sua lógica)
    const videoId = link.split('v=')[1];
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
