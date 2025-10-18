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
        const res = await fetch("https://www.course-api.com/javascript-store-product")
        if (!res.ok) throw new Error(`error code: ${res.status}`);
        const data = await res.json();
        function displayProducts(products) {
            products.forEach((product) => {
                console.log(product);                
            });
        }
        displayProducts(data);      
    } catch (error) {
        function handleError(error) {
            console.error("Problem getting items", error.message);
        }
        handleError(error);
    }
};


