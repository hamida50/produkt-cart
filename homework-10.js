import { products } from "./products.js";
console.log("homework-10 работает");

console.log(
  products.reduce((result, product) => {
    result.push({
      [product.title]: product.description,
    });
    return result;
  }, []),
);

const productList = document.querySelector(".product-list");

productList.innerHTML = "";

function renderProducts(productsToRender) {
  productsToRender.forEach((product) => {
    const productCard = document.createElement("li");

    productCard.classList.add("product-card");

    productCard.innerHTML = ` 
    


  <img
    src="${product.image}"
    alt="${product.alt}"

    class="product-card__image"   
  />
  <span class="product-card__category">${product.category}</span>
  <h2 class="product-card__title">${product.title}</h2>
  <p class="product-card__description">${product.description}</p>
  <span class="product-card__compound">Состав:</span>
  <ul class="product-card__compound-list">
    ${product.compound
      .map(
        (item) => `
      <li class="product-card__compound-item">${item}</li>
    `,
      )
      .join("")}
  </ul>
  <div class="product-card__price-block">
    <b>Цена:</b>
    <span class="product-card__price">${product.price}₽</span>
  </div>
`;

    productList.append(productCard);
  });
}
function getProductsCount() {
  let count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

  if (count >= 1 && count <= 5 && Number.isInteger(count)) {
    return count;
  }

  return 5;
}
renderProducts(products.slice(0, getProductsCount()));
