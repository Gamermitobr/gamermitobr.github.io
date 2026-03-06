let carrinho = []

let contas = JSON.parse(localStorage.getItem("contas")) || [

{nome:"Conta FF Diamante",preco:25,login:"ff1@email.com",senha:"123"},
{nome:"Conta FF Veterana",preco:30,login:"ff2@email.com",senha:"123"},
{nome:"Conta FF Rara",preco:40,login:"ff3@email.com",senha:"123"},
{nome:"Conta FF Mestre",preco:45,login:"ff4@email.com",senha:"123"},
{nome:"Conta FF Elite",preco:50,login:"ff5@email.com",senha:"123"},
{nome:"Conta FF Lendária",preco:60,login:"ff6@email.com",senha:"123"},
{nome:"Conta FF Antiga",preco:35,login:"ff7@email.com",senha:"123"},
{nome:"Conta FF Pro",preco:70,login:"ff8@email.com",senha:"123"},
{nome:"Conta FF Premium",preco:80,login:"ff9@email.com",senha:"123"},
{nome:"Conta FF Full Skin",preco:100,login:"ff10@email.com",senha:"123"}

]

let vendas = localStorage.getItem("vendas") || 0

document.getElementById("vendas").innerText = vendas

function carregar(){

let area = document.getElementById("produtos")

area.innerHTML=""

contas.forEach((c,i)=>{

area.innerHTML += `

<div class="card">

<h3>${c.nome}</h3>

<p>R$ ${c.preco}</p>

<button onclick="comprar(${i})">Comprar</button>

</div>

`

})

}

function comprar(i){

carrinho=[contas[i]]

document.getElementById("cart").innerText=1

document.getElementById("checkout").classList.remove("hidden")

}

function copiarPix(){

navigator.clipboard.writeText("SUA-CHAVE-PIX")

alert("Pix copiado")

}

function receberConta(){

let c = carrinho[0]

alert("Login: "+c.login+"\nSenha: "+c.senha)

contas.splice(contas.indexOf(c),1)

localStorage.setItem("contas",JSON.stringify(contas))

vendas++

localStorage.setItem("vendas",vendas)

document.getElementById("vendas").innerText=vendas

carregar()

}

function adminLogin(){

let senha = prompt("Senha admin")

if(senha=="1234"){

let nome = prompt("Nome conta")

let preco = prompt("Preço")

let login = prompt("Login")

let senhaConta = prompt("Senha")

contas.push({nome,preco,login,senha:senhaConta})

localStorage.setItem("contas",JSON.stringify(contas))

carregar()

}

}

carregar()