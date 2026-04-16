import { supabase } from './supabase.js'

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

loadCampaigns()