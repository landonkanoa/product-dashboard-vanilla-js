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


