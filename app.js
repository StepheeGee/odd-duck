'use strict';

class App {
  constructor() {
    this.state = {
      clickSoFar: 0,
      clicksAllowed: 25,
      currentRound: 0,
    };
    this.products = [];
    this.displayedProducts = [];
    this.productDisplayClickHandler = this.productDisplayClickHandler.bind(this);

    const viewResultsButton = document.getElementById('viewResultsButton');
    viewResultsButton.style.display = 'none';
    viewResultsButton.addEventListener('click', function () {
      this.displayResults();
    }.bind(this));

    
    this.retrieveProductsFromLocalStorage();

    if (this.products.length === 0) {
      
      this.addProduct("bag", "img/bag.jpg");
      this.addProduct("banana", "img/banana.jpg");
      this.addProduct("bathroom", "img/bathroom.jpg");
      this.addProduct("boots", "img/boots.jpg");
      this.addProduct("breakfast", "img/breakfast.jpg");
      this.addProduct("bubblegum", "img/bubblegum.jpg");
      this.addProduct("chair", "img/chair.jpg");
      this.addProduct("cthulhu", "img/cthulhu.jpg");
      this.addProduct("dog-duck", "img/dog-duck.jpg");
      this.addProduct("dragon", "img/dragon.jpg");
      this.addProduct("pen", "img/pen.jpg");
      this.addProduct("pet-sweep", "img/pet-sweep.jpg");
      this.addProduct("scissors", "img/scissors.jpg");
      this.addProduct("shark", "img/shark.jpg");
      this.addProduct("sweep", "img/sweep.png");
      this.addProduct("tauntaun", "img/tauntaun.jpg");
      this.addProduct("unicorn", "img/unicorn.jpg");
      this.addProduct("water-can", "img/water-can.jpg");
      this.addProduct("wine-glass", "img/wine-glass.jpg");
    }
  }

  addProduct(name, fileName) {
    const product = {
      name,
      fileName,
      timesShown: 0,
      timesClicked: 0,
    };
    this.products.push(product);
    
    this.saveProductsToLocalStorage();
  }

  displayRandomProducts() {
    if (this.products.length < 3) {
      alert('Not enough products to display.');
      return;
    }

    if (this.state.currentRound >= this.state.clicksAllowed) {
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

    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = '';

    for (const index of randomIndices) {
      this.displayedProducts.push(this.products[index]);
    }

    for (const product of this.displayedProducts) {
      const productLink = document.createElement('a');
      productLink.href = '#';
      productLink.addEventListener('click', (event) => {
        this.productDisplayClickHandler(event);
      });

      const productImage = document.createElement('img');
      productImage.src = product.fileName;
      productImage.alt = product.name;
      productImage.classList.add('image-shadow');

      productLink.appendChild(productImage);
      productDisplay.appendChild(productLink);
    }

    for (const product of this.displayedProducts) {
      product.timesShown++;
    }
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
      alert('Voting session ended.');
    }
  }

  displayResults() {
    const resultsContainer = document.getElementById('resultsContainer');

    const labels = [];
    const votes = [];
    const views = [];

    for (const product of this.products) {
      labels.push(product.name);
      votes.push(product.timesClicked);
      views.push(product.timesShown);
    }

    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Votes',
          data: votes,
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          borderWidth: 1
        },
      { 
        label: 'Views',
        data: views,
        borderColor: 'blue',
        backgroundColor: 'lightblue',
        borderWidth: 2
      }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  retrieveProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const app = new App();

  app.displayRandomProducts();
});
