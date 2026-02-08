const fs = require("fs");

const AFILIADO = "https://collshp.com/l6ucuzrolo235?view=storefront";

const products = [
  {
    title: "Fone Bluetooth TWS",
    price: "89,90",
    old_price: "159,90",
    image: "https://via.placeholder.com/300",
    link: `https://shopee.com.br/${AFILIADO}`
  },
  {
    title: "Smartwatch Esportivo",
    price: "129,90",
    old_price: "219,90",
    image: "https://via.placeholder.com/300",
    link: `https://shopee.com.br/${AFILIADO}`
  }
];

const data = {
  updated_at: new Date().toISOString(),
  products
};

fs.writeFileSync("products.json", JSON.stringify(data, null, 2));
console.log("products.json atualizado");
