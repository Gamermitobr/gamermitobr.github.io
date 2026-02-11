const axios = require('axios');

// Configurações da API do YouTube
const apiKey = 'SUA_API_KEY';
const canalId = 'SEU_CANAL_ID';

// Configurações da base de dados
const db = [
 { nome: 'João', email: 'joao@example.com' },
 { nome: 'Maria', email: 'maria@example.com' },
 // ...
];

// Função para enviar inscritos
function enviarInscritos() {
 const inscrito = db[Math.floor(Math.random() * db.length)];
 axios.post(`https:                                                                            
 snippet: {
 resourceId: {
 channelId: inscrito.email
 }
 }
 })
 .then(response => {
 console.log(`//www.googleapis.com/youtube/v3/subscriptions?part=snippet&key=${apiKey}`, {
 snippet: {
 resourceId: {
 channelId: inscrito.email
 }
 }
 })
 .then(response => {
 console.log(`Inscrito enviado para o canal ${canalId}`);
 })
 .catch(error => {
 console.error(error);
 });
}

// Enviar inscritos a cada 10 minutos
setInterval(enviarInscritos, 600000);