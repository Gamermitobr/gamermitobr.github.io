import { supabase } from './supabase.js'

async function loadCampaigns() {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: false })

  const container = document.getElementById('campaigns')

  if (error) {
    container.innerHTML = "Erro ao carregar"
    console.log(error)
    return
  }

  container.innerHTML = data.map(c => `
    <div class="card">
      <h2>${c.title}</h2>
      <p>${c.description}</p>
      <p>R$ ${c.current_amount} / ${c.goal}</p>
    </div>
  `).join('')
}

loadCampaigns()