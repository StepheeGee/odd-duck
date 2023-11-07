'use strict';

class App {
  constructor() {
    this.state = {
      clickSoFar: 0,
      clicksAllowed: 25,
      currentRound: 0,
    };
    this.products = []; // An array to hold all product objects
    this.displayedProducts = [];
    this.productDisplayClickHandler = this.productDisplayClickHandler.bind(this);

    const viewResultsButton = document.getElementById('viewResultsButton');
    viewResultsButton.style.display = 'none';
    viewResultsButton.addEventListener('click', this.displayResults.bind(this));
  }

  // Method to add a product to the products array
  addProduct(name, fileName) {
    const product = {
      name,
      fileName,
      timesShown: 0,
      timesClicked: 0
    };
    this.products.push(product);
  }

  // Display random products and update timesShown and pushes them into displayedProducts
  displayRandomProducts() {
    if (this.products.length < 3) {
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
      const randomIndex = Math.floor(Math.random() * this.products.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    for (const index of randomIndices) {
      this.displayedProducts.push(this.products[index]);
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

  // Attach product click event listener
  attachProductClickListeners() {
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.addEventListener('click', this.productDisplayClickHandler);
  }

  // Handle product click events
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

  // Display voting results
  displayResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    for (const product of this.products) {
      const result = document.createElement('p');
      result.textContent = `${product.name} had ${product.timesClicked} votes, and was seen ${product.timesShown} times.`;
      resultsContainer.appendChild(result);
    }
  }
}

const app = new App();

// Add products to the product list
app.addProduct("bag", "img/bag.jpg");
app.addProduct("banana", "img/banana.jpg");
app.addProduct("bathroom", "img/bathroom.jpg");
app.addProduct("boots", "img/boots.jpg");
app.addProduct("breakfast", "img/breakfast.jpg");
app.addProduct("bubblegum", "img/bubblegum.jpg");
app.addProduct("chair", "img/chair.jpg");
app.addProduct("cthulhu", "img/cthulhu.jpg");
app.addProduct("dog-duck", "img/dog-duck.jpg");
app.addProduct("dragon", "img/dragon.jpg");
app.addProduct("pen", "img/pen.jpg");
app.addProduct("pet-sweep", "img/pet-sweep.jpg");
app.addProduct("scissors", "img/scissors.jpg");
app.addProduct("shark", "img/shark.jpg");
app.addProduct("sweep", "img/sweep.png");
app.addProduct("tauntaun", "img/tauntaun.jpg");
app.addProduct("unicorn", "img/unicorn.jpg");
app.addProduct("water-can", "img/water-can.jpg");
app.addProduct("wine-glass", "img/wine-glass.jpg");

// Display the initial set of products
app.displayRandomProducts();

// Attach event listener for clicks on displayed products
app.attachProductClickListeners();
