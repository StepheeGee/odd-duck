// app.js

class Product {
  constructor(name, fileName) {
    this.name = name;
    this.fileName = fileName;
    this.timesShown = 0;
    this.timesClicked = 0;
  }
}

class ProductList {
  constructor() {
    this.products = [];
  }

  addProduct(name, fileName) {
    const product = new Product(name, fileName);
    this.products.push(product);
  }
}

class App {
  constructor() {
    this.state = {
      clickSoFar: 0,
      clicksAllowed: 25,
    };
    this.productList = new ProductList();
    this.displayedProducts = []; // Array to hold the currently displayed products
  }

  // Function to generate and display three random and unique products
  displayRandomProducts() {
    // Check if you have enough products left to display three unique products
    if (this.productList.products.length < 3) {
      console.log('Not enough products to display.');
      return;
    }

    // Clear the currently displayed products
    this.displayedProducts = [];

    // Generate three random and unique product indices
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * this.productList.products.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Select the products using the generated indices
    for (const index of randomIndices) {
      this.displayedProducts.push(this.productList.products[index]);
    }

    // Display the selected products in the HTML section
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = '';
    for (const product of this.displayedProducts) {
      const productImage = document.createElement('img');
      productImage.src = product.fileName;
      productImage.alt = product.name;
      productDisplay.appendChild(productImage);
    }

    // Increment "timesShown" for the displayed products
    for (const product of this.displayedProducts) {
      product.timesShown++;
    }
  }

  // Method to attach event listener for clicks on displayed products
  attachProductClickListeners() {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
        const productName = event.target.alt;
        const clickedProduct = this.displayedProducts.find(
          (product) => product.name === productName
        );
        if (clickedProduct) {
          clickedProduct.timesClicked++;
        } 
      }
    }.bind(this));
  }
  
}


const app = new App();

// Add products to the product list
app.productList.addProduct("bag", "img/bag.jpg");
app.productList.addProduct("banana", "img/banana.jpg");
app.productList.addProduct("bathroom", "img/bathroom.jpg");
app.productList.addProduct("boots", "img/boots.jpg");
app.productList.addProduct("breakfast", "img/breakfast.jpg");
app.productList.addProduct("bubblegum", "img/bubblegum.jpg");
app.productList.addProduct("chair", "img/chair.jpg");
app.productList.addProduct("cthulhu", "img/cthulhu.jpg");
app.productList.addProduct("dog-duck", "img/dog-duck.jpg");
app.productList.addProduct("dragon", "img/dragon.jpg");
app.productList.addProduct("pen", "img/pen.jpg");
app.productList.addProduct("pet-sweep", "img/pet-sweep.jpg");
app.productList.addProduct("scissors", "img/scissors.jpg");
app.productList.addProduct("shark", "img/shark.jpg");
app.productList.addProduct("sweep", "img/sweep.jpg");
app.productList.addProduct("tauntaun", "img/tauntaun.jpg");
app.productList.addProduct("unicorn", "img/unicorn.jpg");
app.productList.addProduct("water-can", "img/water-can.jpg");
app.productList.addProduct("wine-glass", "img/wine-glass.jpg");


// Display the initial set of products
app.displayRandomProducts();

// Attach event listener for clicks on displayed products
app.attachProductClickListeners();