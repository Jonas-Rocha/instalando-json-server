// UTILIZANDO O FETCH COM O THEN

// fetch("http://localhost:3000/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// UTILIZANDO O ASYNC AWAIT
async function fetchProducts(params) {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  console.log(data);
}

fetchProducts();
