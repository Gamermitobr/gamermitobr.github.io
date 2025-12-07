// script.js
const formPix = document.getElementById('form-pix');

formPix.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const valor = document.getElementById('valor').value;
    // Integração com a API do Pix
    fetch('https:                           
        method: '//api.pix.com.br/v1/pix', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            email,
            valor
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
                                                
        window.location.href = '// Redireciona para a página de sucesso
        window.location.href = 'sucesso.html';
    })
    .catch((error) => {
        console.error(error);
    });
});
