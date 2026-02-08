const fs = require("fs");

const products = JSON.parse(
  fs.readFileSync("affiliate_links.json", "utf-8")
);

// embaralha produtos
const shuffled = products.sort(() => 0.5 - Math.random());

// pega 5 ofertas do dia
const daily = shuffled.slice(0, 5);

fs.writeFileSync(
  "public/products.json",
  JSON.stringify(daily, null, 2)
);

console.log("Ofertas do dia geradas com links afiliados");
