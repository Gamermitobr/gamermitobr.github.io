fetch("products.json")
  .then(r => r.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.title}</h3>
          <a href="${p.affiliate_link}" target="_blank">
            Comprar na Shopee
          </a>
        </div>
      `;
    });
  });
