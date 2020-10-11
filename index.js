// Remove items from the shopping cart

function removeButtonClicked(className) {
  const removeClicked = document.querySelector(className);
  removeClicked.remove();
}

const removeItem = document.getElementsByClassName("remove-item");

for (let r = 0; r < removeItem.length; r++) {
  const removeButton = removeItem[r];
  removeButton.addEventListener("click", () => {
    removeButtonClicked(".item-information")
  });
}


// Creates a title for the New Item Input

const newItemTitle = document.createElement("H2");
const newTitleText = document.createTextNode("New Item");
newItemTitle.classList.add("new-item-title");
newItemTitle.appendChild(newTitleText);

// Creates a remove new items input button

const removeNewItemButton = document.createElement("button");
const removeNewItem = document.createElement("img");
removeNewItem.setAttribute("src", "Symbols/removeItem.svg");
removeNewItemButton.appendChild(removeNewItem);
newItemTitle.appendChild(removeNewItemButton);
removeNewItemButton.addEventListener("click", () => {
  removeButtonClicked("section")
});

// Creates a button to add new items

const newItemButton = document.createElement("button");
newItemButton.classList.add("add-new-item-button");
const plusSymbol = document.createElement("img");
plusSymbol.setAttribute("src", "Symbols/addItem.svg");
const itemButtonText = document.createTextNode("Add item");
newItemButton.appendChild(plusSymbol);
newItemButton.appendChild(itemButtonText);

// Add items to the shopping cart

const newItemContainer = document.createElement("section")
const addItem = document.querySelector(".add-item-button");
const productsContainer = document.querySelector(".cart-items");
const createInputName = document.createElement("input");
const createInputQuantity = document.createElement("input");
const createInputPrice = document.createElement("input");
const productsStorage = document.querySelector("#products-storage")

const addItemInput = () => {
  createInputName.setAttribute("placeholder", "e.g: Banana, Apple");
  createInputQuantity.setAttribute("placeholder", "e.g: 1un, 12un");
  createInputPrice.setAttribute("placeholder", "e.g: $4.00, $10.99");

  createInputName,
    createInputQuantity,
    createInputPrice.getAttribute("type", "text");

  createInputName.classList.add("new-input-items", "unit-item");
  createInputQuantity.classList.add("new-input-items", "unit-item");
  createInputPrice.classList.add("new-input-items", "unit-item");

  newItemContainer.append(
    newItemTitle,
    createInputName,
    createInputQuantity,
    createInputPrice,
    newItemButton
  )

  productsContainer.prepend(
    newItemContainer
  );
};

newItemButton.addEventListener("click", () => {
  const newName = document.createTextNode(createInputName.value);
  const newQuantity = document.createTextNode(createInputQuantity.value);
  const newPrice = document.createTextNode(createInputPrice.value);
  productsArray.innerHTML = newProductArray(newName, newQuantity, newPrice);

})

addItem.addEventListener("click", () => {
  addItemInput();
});



// Increment and Decrement to an item quantity

// Total amount in quantity

