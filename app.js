'use strict';

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
      currentRound: 0,
    };
    this.productList = new ProductList();
    this.displayedProducts = [];
    this.productDisplayClickHandler = this.productDisplayClickHandler.bind(this);

    const viewResultsButton = document.getElementById('viewResultsButton');
    viewResultsButton.style.display = 'none';
    viewResultsButton.addEventListener('click', this.displayResults.bind(this));
  }

  displayRandomProducts() {
    if (this.productList.products.length < 3) {
      alert('Not enough products to display.');
      return;
    }

    if (this.state.currentRound >= this.state.clicksAllowed) {
      alert('Voting session ended.');
      const productDisplay = document.getElementById('productDisplay');
      productDisplay.removeEventListener('click', this.productDisplayClickHandler);

      const viewResultsButton = document.getElementById('viewResultsButton');
      viewResultsButton.style.display = 'block';
    }

    this.displayedProducts = [];

    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * this.productList.products.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    for (const index of randomIndices) {
      this.displayedProducts.push(this.productList.products[index]);
    }

    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = '';
    for (const product of this.displayedProducts) {
      const productImage = document.createElement('img');
      productImage.src = product.fileName;
      productImage.alt = product.name;
      productDisplay.appendChild(productImage);
    }

    for (const product of this.displayedProducts) {
      product.timesShown++;
    }
  }

  attachProductClickListeners() {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.addEventListener('click', this.productDisplayClickHandler);
  }

  productDisplayClickHandler(event) {
    if (this.state.currentRound < this.state.clicksAllowed) {
      if (event.target.tagName === 'IMG') {
        this.state.currentRound++;
        const productName = event.target.alt;
        const clickedProduct = this.displayedProducts.find(function (product) {
          return product.name === productName;
        });
        if (clickedProduct) {
          clickedProduct.timesClicked++;
        }
        this.displayRandomProducts();
      }
    } else {
      console.log('Voting session ended.');
      const productDisplay = document.getElementById('productDisplay');
      productDisplay.removeEventListener('click', this.productDisplayClickHandler);
      const viewResultsButton = document.getElementById('viewResultsButton');
      viewResultsButton.style.display = 'block';
    }
  }

  displayResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    for (const product of this.productList.products) {
      const result = document.createElement('p');
      result.textContent = `${product.name} had ${product.timesClicked} votes, and was seen ${product.timesShown} times.`;
      resultsContainer.appendChild(result);
    }
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
app.productList.addProduct("sweep", "img/sweep.png");
app.productList.addProduct("tauntaun", "img/tauntaun.jpg");
app.productList.addProduct("unicorn", "img/unicorn.jpg");
app.productList.addProduct("water-can", "img/water-can.jpg");
app.productList.addProduct("wine-glass", "img/wine-glass.jpg");

// Display the initial set of products
app.displayRandomProducts();

// Attach event listener for clicks on displayed products
app.attachProductClickListeners();
