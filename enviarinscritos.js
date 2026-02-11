const apiKey = 'AIzaSyCntGVfqhqltBi-uqpiS0CSbmaevAPvpMg';
const canalOrigemId = '@robinairdraktutoriais';
const canalDestinoId = '@jpfilmes-x4h';

document.getElementById('transferir-inscritos').addEventListener('click', () => {
  const statusDiv = document.getElementById('status');
  statusDiv.innerHTML = 'Iniciando transferência de inscritos...';

  // Listar inscritos do canal de origem
  fetch(`https:                                                                                                                   
    .then(response => response.json())
    .then(data => {
      const inscritosOrigem = data.items.map(item => item.snippet.resourceId.channelId);
      statusDiv.innerHTML = `//www.googleapis.com/youtube/v3/subscriptions?part=snippet&channelId=${canalOrigemId}&key=${apiKey}&maxResults=50`)
    .then(response => response.json())
    .then(data => {
      const inscritosOrigem = data.items.map(item => item.snippet.resourceId.channelId);
      statusDiv.innerHTML = `Encontrados ${inscritosOrigem.length} inscritos no canal de origem...`;

                                             
      fetch(`// Listar inscritos do canal de destino
      fetch(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&channelId=${canalDestinoId}&key=${apiKey}&maxResults=50`)
        .then(response => response.json())
        .then(data => {
          const inscritosDestino = data.items.map(item => item.snippet.resourceId.channelId);
          statusDiv.innerHTML = `Encontrados ${inscritosDestino.length} inscritos no canal de destino...`;

          // Identificar inscritos que estão no canal de origem, mas não no canal de destino
          const inscritosParaInscrever = inscritosOrigem.filter(id => !inscritosDestino.includes(id));
          statusDiv.innerHTML = `Inscritos para inscrever: ${inscritosParaInscrever.length}`;

          // Inscrever esses usuários no canal de destino
          inscritosParaInscrever.forEach((id, index) => {
            fetch(`https:                                                                            
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                snippet: {
                  resourceId: {
                    kind: 'youtube#channel',
                    channelId: id
                  }
                }
              })
            })
            .then(response => response.json())
            .then(data => {
              statusDiv.innerHTML = `//www.googleapis.com/youtube/v3/subscriptions?part=snippet&key=${apiKey}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                snippet: {
                  resourceId: {
                    kind: 'youtube#channel',
                    channelId: id
                  }
                }
              })
            })
            .then(response => response.json())
            .then(data => {
              statusDiv.innerHTML = `Inscrito ${index + 1} de ${inscritosParaInscrever.length}...`;
            })
            .catch(error => {
              statusDiv.innerHTML = `Erro ao inscrever ${id}: ${error.message}`;
            });
          });
        })
        .catch(error => {
          statusDiv.innerHTML = `Erro ao listar inscritos do canal de destino: ${error.message}`;
        });
    })
    .catch(error => {
      statusDiv.innerHTML = `Erro ao listar inscritos do canal de origem: ${error.message}`;
    });
});