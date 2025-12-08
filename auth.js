function register() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const user = { nome, email, senha };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Cadastro realizado!");
  window.location.href = "index.html";
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return alert("Usuário não encontrado!");

  if (email === user.email && senha === user.senha) {
    localStorage.setItem("logged", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Dados incorretos!");
  }
}

function logout() {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
}

function loadUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("userName").textContent = user.nome;
}

function loadProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("perfilNome").value = user.nome;
  document.getElementById("perfilEmail").value = user.email;
}

function salvarPerfil() {
  const nome = document.getElementById("perfilNome").value;
  const email = document.getElementById("perfilEmail").value;

  const user = JSON.parse(localStorage.getItem("user"));
  user.nome = nome;
  user.email = email;

  localStorage.setItem("user", JSON.stringify(user));
  alert("Perfil atualizado!");
}
