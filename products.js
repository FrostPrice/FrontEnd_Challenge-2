const products = [
  {
    itemName: "Banana",
    unit: 1,
    itemPrice: (3.8).toFixed(2),
    quantity: 2,
  },
  {
    itemName: "Milk",
    unit: 1,
    itemPrice: (2.99).toFixed(2),
    quantity: 6,
  },
  {
    itemName: "Ground beef",
    unit: 1,
    itemPrice: (15.5).toFixed(2),
    quantity: 2,
  },
  {
    itemName: "Apple",
    unit: 1,
    itemPrice: (2.1).toFixed(2),
    quantity: 1,
  },
  {
    itemName: "Cheddar",
    unit: 1,
    itemPrice: (8.25).toFixed(2),
    quantity: 2,
  },
  {
    itemName: "Orange",
    unit: 1,
    itemPrice: (1.2).toFixed(2),
    quantity: 1,
  },
  {
    itemName: "Spinach",
    unit: 1,
    itemPrice: (3.29).toFixed(2),
    quantity: 1,
  },
  {
    itemName: "Letuce",
    unit: 1,
    itemPrice: (6.95).toFixed(2),
    quantity: 1,
  },
  {
    itemName: "Frozen Pizza",
    unit: 1,
    itemPrice: (10.99).toFixed(2),
    quantity: 2,
  },
  {
    itemName: "Clother Softner",
    unit: 1,
    itemPrice: (11.9).toFixed(2),
    quantity: 1,
  },
  {
    itemName: "Chicken Breast",
    unit: 1,
    itemPrice: (12.59).toFixed(2),
    quantity: 1,
  },
  {
    itemName: "Pasta",
    unit: 1,
    itemPrice: (3.29).toFixed(2),
    quantity: 1,
  },
];

function newProductArray(name, quantity, price, total) {
  return `<article class="item-information">
<div class="item-identification">
  <img src="Symbols/itemImage.svg" style="padding-right: 24px" />
  <div>
    <p class="text-item">${name}</p>
    <p class="unit-item">1un.</p>
  </div>
</div>
<p class="price-item text-item">$${quantity}</p>
<div class="item-quantity">
  <button class="increment-button" id="">
    <img
      src="Symbols/addQuantity.svg"
      alt="An icon that means addition"
    />
  </button>
  <span class="text-item" id="item-quantity">${price}</span>
  <div class="item-quantity">
    <button class="increment-button" id="decrement-button">
      <img
        src="Symbols/removeQuantity.svg"
        alt="An icon that will remove the quantity"
      />
    </button>
  </div>
</div>
<div class="total-remove-item">
  <p class="text-item" id="total-price-item">$${total}</p>
  <button class="remove-item">
    <img src="Symbols/removeItem.svg" />
  </button>
</div>
</article>
`;
}

const productsArray = products.map((p) => {
  name = p.itemName
  price = p.itemPrice
  quantity = p.quantity
  return newProductArray(name, price, quantity, (price * quantity))
})
const section = document.querySelector("section");
section.innerHTML = productsArray.join("");