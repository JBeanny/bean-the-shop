const totalItem = document.querySelector(".total-items");
const container = document.querySelector(".container");
const noCart = document.querySelector(".no-cart");
const totalCost = document.querySelector(".total-cost");

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

let totalInItems = 0;
let totalInCost = 0;

//clear cart
const clearCart = () => {
  localStorage.removeItem("cart");
  window.location.reload();
};

//remove single item from cart
const removeSingleItem = (item) => {
  if (cartItems.length === 1) clearCart();
  else {
    const newCart = cartItems.filter((cart) => {
      if (cart?.product_id !== item.product_id) {
        return cart;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  window.location.reload();
};

// increase cart item
const incrementCart = (item) => {
  const newCart = cartItems.map((cart) => {
    if (cart.product_id === item.product_id) {
      return { ...item, quantity: item.quantity + 1 };
    } else return cart;
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
  window.location.reload();
};

// decrease cart item
const decrementCart = (item) => {
  if (item.quantity > 1) {
    const newCart = cartItems.map((cart) => {
      if (cart.product_id === item.product_id) {
        return { ...item, quantity: item.quantity - 1 };
      } else return cart;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.location.reload();
  } else removeSingleItem(item);
};

//generate cart item
if (cartItems && cartItems.length > 0) {
  cartItems.forEach((item) => {
    // to sum total cost
    totalInCost += item?.product_price * item?.quantity;
    // to sum total items in each unit
    totalInItems += item?.quantity;

    const itemContainer = document.createElement("div");
    itemContainer.className = "item-container";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const img = document.createElement("img");
    img.src = item?.product_image;
    imageContainer.appendChild(img);

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = item?.product_name;

    const price = document.createElement("div");
    price.className = "price";
    price.innerHTML = `$${item?.product_price}`;

    const quantityContainer = document.createElement("div");
    quantityContainer.className = "quantity-container";

    const increaseBtn = document.createElement("button");
    increaseBtn.innerText = "+";
    //add event listener to + btn
    increaseBtn.onclick = () => incrementCart(item);

    const decreaseBtn = document.createElement("button");
    decreaseBtn.innerText = "-";
    // add event listener to - btn
    decreaseBtn.onclick = () => decrementCart(item);

    const span = document.createElement("span");
    span.innerText = item?.quantity;

    quantityContainer.appendChild(decreaseBtn);
    quantityContainer.appendChild(span);
    quantityContainer.appendChild(increaseBtn);

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.innerHTML = `remove  <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path
              d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z"
            />
            <path
              d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
            />
          </svg>`;
    // add event listener to remove btn
    removeBtn.onclick = () => removeSingleItem(item);

    itemContainer.appendChild(imageContainer);
    itemContainer.appendChild(name);
    itemContainer.appendChild(price);
    itemContainer.appendChild(quantityContainer);
    itemContainer.appendChild(removeBtn);

    container.appendChild(itemContainer);
  });

  let totalInUnit = cartItems.length;
  totalItem.innerText = `Cart: ${totalInUnit} unit(s) - ${totalInItems} item(s)`;
  totalCost.innerText = `Total:  $${totalInCost.toFixed(2)}`;
} else {
  totalItem.innerText = "Cart: 0";
  noCart.style.display = "block";
  totalCost.innerText = "Total: $0";
}
