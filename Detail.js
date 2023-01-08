// get the ?id=... in the url
const search = window.location.search;
const params = new URLSearchParams(search);
// get id from the query of the url
const IdFromURL = params.get("id");
// api
const apiUrl = `https://fakestoreapi.com/products/${IdFromURL}`;

// add to cart function
const addToCart = (product) => {
  const remainCarts = JSON.parse(localStorage.getItem("cart")) || [];
  const isProductAvailable = remainCarts.filter(
    (cart) => cart.product_id === product.id
  );
  if (isProductAvailable.length > 0) {
    const newCarts = remainCarts.map((cart) => {
      if (cart.product_id === isProductAvailable[0].product_id) {
        return {
          product_id: cart.product_id,
          product_image: cart.product_image,
          product_name: cart.product_name,
          product_price: cart.product_price,
          quantity: cart.quantity + 1,
        };
      } else return cart;
    });
    return localStorage.setItem("cart", JSON.stringify(newCarts));
  }

  const pendingAdd = {
    product_id: product.id,
    product_image: product.image,
    product_name: product.title,
    product_price: product.price,
    quantity: 1,
  };
  const newCarts = [...remainCarts, pendingAdd];
  localStorage.setItem("cart", JSON.stringify(newCarts));
};

//container
const container = document.querySelector(".container");
container.setAttribute("class", "container");

// imageConatiner
const imageContainer = document.querySelector(".image-container");
imageContainer.setAttribute("class", "image-container");

// productDetail
const productDetail = document.querySelector(".product-detail");
productDetail.setAttribute("class", "product-detail");

// buttons container
const buttonsContainer = document.querySelector(".buttons");

// create loading
const loading = document.querySelector(".loading");
loading.setAttribute("class", "loading");

const generateProduct = async () => {
  loading.style.display = "flex";
  const response = await fetch(apiUrl);
  const product = await response.json();

  // check if product is not falsy values
  if (product) {
    loading.style.display = "none";
    // create image and add text
    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    // create title and add text
    const title = document.createElement("h1");
    title.innerText = product.title;

    // create category and add text
    const category = document.createElement("h3");
    category.innerText = product.category;

    // create description and add text
    const description = document.createElement("h3");
    description.innerText = product.description;

    // create price and add text
    const price = document.createElement("h1");
    price.innerText = `$${product.price}`;

    // create addCart button
    const addCartButton = document.createElement("button");
    addCartButton.setAttribute("class", "addCart");
    addCartButton.innerText = "Add to cart";
    // add icon to addCart button
    addCartButton.innerHTML += `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" 
        />
        <circle cx="7" cy="22" r="2" />
        <circle cx="17" cy="22" r="2" />
      </svg>`;
    addCartButton.addEventListener("click", () => addToCart(product));

    // create buyNow button
    const buyNowButton = document.createElement("button");
    buyNowButton.setAttribute("class", "buyNow");
    buyNowButton.innerText = "Buy now";
    // add icon to buyNow button
    buyNowButton.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <g id="_01_align_center" data-name="01 align center">
          <path
              d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z" 
          />
      </g>
    </svg>`;

    // append addCart and buyNow buttons to container
    buttonsContainer.appendChild(addCartButton);
    buttonsContainer.appendChild(buyNowButton);

    // appendChild to each container
    imageContainer.appendChild(img);
    productDetail.appendChild(title);
    productDetail.appendChild(category);
    productDetail.appendChild(description);
    productDetail.appendChild(price);
    productDetail.appendChild(buttonsContainer);

    // appendChild to container
    container.appendChild(imageContainer);
    container.appendChild(productDetail);
  }
};

generateProduct();
