// Added function that fetches products from API and console logs all the items
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then((res) => res.json())
    .then((items) => {
        items.forEach((product) => {
            console.log(product);           
        })
    })
    .catch(() => {
        console.log("Error loading data.");        
    })
};

// Added async function and displayProduct to show in console log and handleError if there is a problem loading the API
async function fetchProductsAsync() {
    try {
        const res = await fetch("https://www.course-api.com/javascript-store-products")
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        displayProducts(data);      
    } catch (error) {
        handleError(error);
    }
};

//Changed displayProducts to show images names and price
function displayProducts(products) {
  const items = document.getElementById("product-container");
  items.innerHTML = products.slice(0,5).map ((u) => `
  <div class="product">
  <h2>${u.fields.name}</h2>
  <img src="${u.fields.image[0].url}" alt="${u.fields.name}">
  <p>$${u.fields.price/100}</p>
  </div>`).join("");
}

//Adjusted handleError function so it is reusable and has a clear message in the console
function handleError(error) {
  console.error("An error occurred error code:", error.message);
};

fetchProductsThen();
fetchProductsAsync();