function novoPedido() {
  const servico = document.getElementById("servico").value;
  const link = document.getElementById("link").value;
  const quantidade = document.getElementById("quantidade").value;

  const pedido = {
    servico,
    link,
    quantidade,
    status: "Processando",
    id: Date.now()
  };

  let lista = JSON.parse(localStorage.getItem("pedidos")) || [];
  lista.push(pedido);

  localStorage.setItem("pedidos", JSON.stringify(lista));

  alert("Pedido criado com sucesso!");
}

function listarPedidos() {
  const historicoBox = document.getElementById("historicoBox");
  historicoBox.innerHTML = "";

  let lista = JSON.parse(localStorage.getItem("pedidos")) || [];

  lista.forEach(p => {
    historicoBox.innerHTML += `
      <div class="card">
        <h3>${p.servico}</h3>
        <p>Link: ${p.link}</p>
        <p>Qtd: ${p.quantidade}</p>
        <p>Status: ${p.status}</p>
        <small>ID: ${p.id}</small>
      </div>
    `;
  });
}
