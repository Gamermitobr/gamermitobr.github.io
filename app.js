import { supabase } from './supabase.js'

async function checkUser() {
  const { data } = await supabase.auth.getUser()
  const user = data.user

  const loginLink = document.getElementById('login-link')
  const userInfo = document.getElementById('user-info')
  const logoutBtn = document.getElementById('logout')

  if (user) {
    loginLink.style.display = "none"
    logoutBtn.style.display = "inline"
    userInfo.innerText = "Logado: " + user.email
  } else {
    loginLink.style.display = "inline"
    logoutBtn.style.display = "none"
    userInfo.innerText = ""
  }

  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      await supabase.auth.signOut()
      location.reload()
    }
  }
}

async function loadCampaigns() {
  const container = document.getElementById('campaigns')

  container.innerHTML = "Carregando..."

  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    container.innerHTML = "Erro ao carregar campanhas"
    return
  }

  if (!data || data.length === 0) {
    container.innerHTML = "Nenhuma vaquinha criada ainda"
    return
  }

  container.innerHTML = data.map(c => `
    <div class="card">
      <h2>${c.title}</h2>
      <p>${c.description || ''}</p>
      <p><strong>R$ ${c.current_amount} / ${c.goal}</strong></p>

      <a href="campaign.html?id=${c.id}">
        Ver vaquinha
      </a>
    </div>
  `).join('')
}

checkUser()
loadCampaigns()