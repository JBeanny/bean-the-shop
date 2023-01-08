const url = "https://fakestoreapi.com/products";

// fetch button
const button = document.querySelector(".generate-product");

// all product title
const allProducts = document.querySelector(".none");

//loading
const loading = document.querySelector(".loading");
loading.setAttribute("class", "loading");

// button.addEventListener("click", async () => {
//   // remove fetch button
//   button.setAttribute("class", "none");
//   loading.style.display = "flex";

//   const response = await fetch(url);
//   const products = await response.json();

//   if (products.length > 0) {
//     loading.style.display = "none";

//     // set all-product to appear
//     allProducts.setAttribute("class", "all-products");

//     const imageGenerator = (src) => {
//       //create image container
//       const imageContainer = document.createElement("div");
//       imageContainer.setAttribute("class", "image");

//       // create img element
//       const img = document.createElement("img");

//       // set src attribute with image source
//       img.setAttribute("src", src);

//       // append to image container
//       imageContainer.appendChild(img);

//       return imageContainer;
//     };

//     const contentGenerator = (productTitle, productSubTitle, productPrice) => {
//       // create content element
//       const content = document.createElement("div");
//       content.setAttribute("class", "content");

//       // create title element
//       const title = document.createElement("div");
//       title.setAttribute("class", "title");

//       // create subtitle element
//       const subTitle = document.createElement("div");
//       subTitle.setAttribute("class", "subTitle");

//       // create price element
//       const price = document.createElement("div");
//       price.setAttribute("class", "price");

//       // add title to title element
//       const titleText = document.createTextNode(productTitle);
//       //add subtitle to subtitle element
//       const subTitleText = document.createTextNode(productSubTitle);
//       // add price to price element
//       const priceText = document.createTextNode(`$${productPrice}`);

//       // append each text node to each element
//       title.appendChild(titleText);
//       subTitle.appendChild(subTitleText);
//       price.appendChild(priceText);

//       // append everything to content element
//       content.appendChild(title);
//       content.appendChild(subTitle);
//       content.appendChild(price);

//       return content;
//     };

//     products.forEach((product) => {
//       // create card component
//       const card = document.createElement("div");
//       card.setAttribute("class", "card");

//       // create see more button
//       const seeMore = document.createElement("button");
//       seeMore.setAttribute("class", "button");
//       seeMore.innerText = "See more";

//       seeMore.addEventListener("click", () =>
//         window.location.assign(
//           `http://127.0.0.1:5500/Detail.html?id=${product.id}`
//         )
//       );

//       // add image to card component
//       card.appendChild(imageGenerator(product.image));

//       // add contents to card component
//       card.appendChild(
//         contentGenerator(product.title, "No Description Yet", product.price)
//       );

//       // add button to card component
//       card.appendChild(seeMore);

//       // add card component to main-container class
//       document.querySelector(".main-container").appendChild(card);
//     });
//   }
// });

const fetchProducts = async () => {
  // remove fetch button
  button.setAttribute("class", "none");
  loading.style.display = "flex";

  const response = await fetch(url);
  const products = await response.json();

  if (products.length > 0) {
    loading.style.display = "none";

    // set all-product to appear
    allProducts.setAttribute("class", "all-products");

    const imageGenerator = (src) => {
      //create image container
      const imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", "image");

      // create img element
      const img = document.createElement("img");

      // set src attribute with image source
      img.setAttribute("src", src);

      // append to image container
      imageContainer.appendChild(img);

      return imageContainer;
    };

    const contentGenerator = (productTitle, productSubTitle, productPrice) => {
      // create content element
      const content = document.createElement("div");
      content.setAttribute("class", "content");

      // create title element
      const title = document.createElement("div");
      title.setAttribute("class", "title");

      // create subtitle element
      const subTitle = document.createElement("div");
      subTitle.setAttribute("class", "subTitle");

      // create price element
      const price = document.createElement("div");
      price.setAttribute("class", "price");

      // add title to title element
      const titleText = document.createTextNode(productTitle);
      //add subtitle to subtitle element
      const subTitleText = document.createTextNode(productSubTitle);
      // add price to price element
      const priceText = document.createTextNode(`$${productPrice}`);

      // append each text node to each element
      title.appendChild(titleText);
      subTitle.appendChild(subTitleText);
      price.appendChild(priceText);

      // append everything to content element
      content.appendChild(title);
      content.appendChild(subTitle);
      content.appendChild(price);

      return content;
    };

    products.forEach((product) => {
      // create card component
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create see more button
      const seeMore = document.createElement("button");
      seeMore.setAttribute("class", "button");
      seeMore.innerText = "See more";

      seeMore.addEventListener("click", () =>
        window.location.assign(
          `http://127.0.0.1:5500/Detail.html?id=${product.id}`
        )
      );

      // add image to card component
      card.appendChild(imageGenerator(product.image));

      // add contents to card component
      card.appendChild(
        contentGenerator(product.title, "No Description Yet", product.price)
      );

      // add button to card component
      card.appendChild(seeMore);

      // add card component to main-container class
      document.querySelector(".main-container").appendChild(card);
    });
  }
};

fetchProducts();
