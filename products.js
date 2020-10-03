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

const newProductsArray = products.map((p) => {
  return `<article class="item-information">
  <div class="item-identification">
    <img src="Symbols/itemImage.svg" style="padding-right: 24px" />
    <div>
      <p class="text-item">${p.itemName}</p>
      <p class="unit-item">${p.unit + "un."}</p>
    </div>
  </div>
  <p class="price-item text-item">$${p.itemPrice}</p>
  <div class="item-quantity">
    <button class="increment-button">
      <img
        src="Symbols/addQuantity.svg"
        alt="An icon that means addition"
      />
    </button>
    <span class="text-item" id="item-quantity">${p.quantity}</span>
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
    <p class="text-item">$${(p.itemPrice * p.quantity).toFixed(2)}</p>
    <button class="remove-item">
      <img src="Symbols/removeItem.svg" />
    </button>
  </div>
</article>
`;
});

const section = document.querySelector("section");
section.innerHTML = newProductsArray.join("");
