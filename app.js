import { supabase } from './supabase.js'

// 1. Se o usuário já tá logado, manda direto pro dashboard
const { data: { user } } = await supabase.auth.getUser()
if (user) {
  window.location.href = 'dashboard.html'
  // Para a execução aqui pra não carregar o resto da home à toa
  throw new Error('Redirecting to dashboard')
}

// 2. Se não tá logado, controla os botões da home
const loginLink = document.getElementById('login-link')
const userInfo = document.getElementById('user-info')
const logoutBtn = document.getElementById('logout')

// Garante que só mostra "Entrar" pra quem tá deslogado
if (loginLink) loginLink.style.display = 'inline-block'
if (userInfo) userInfo.style.display = 'none'
if (logoutBtn) logoutBtn.style.display = 'none'