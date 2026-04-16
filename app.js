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

checkUser()