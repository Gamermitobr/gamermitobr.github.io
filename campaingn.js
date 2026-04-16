import { supabase } from './supabase.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function loadCampaign() {
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    alert("Erro ao carregar vaquinha")
    return
  }

  document.getElementById('title').innerText = data.title
  document.getElementById('description').innerText = data.description

  document.getElementById('amount').innerText =
    `R$ ${data.current_amount} / ${data.goal}`

  const percent = (data.current_amount / data.goal) * 100
  document.getElementById('progress').style.width = percent + "%"

  // PIX
  document.getElementById('pix').onclick = () => {
    const chavePix = "SEU-PIX-AQUI"
    const valor = prompt("Digite o valor da doação:")

    if (!valor) return

    const texto = `Pagamento para vaquinha: ${data.title}
Valor: R$ ${valor}
Chave PIX: ${chavePix}`

    navigator.clipboard.writeText(texto)

    alert("PIX copiado! Cole no app do banco.")
  }
}

// copiar link
document.getElementById('copy').onclick = () => {
  navigator.clipboard.writeText(window.location.href)
  alert("Link copiado!")
}

loadCampaign()