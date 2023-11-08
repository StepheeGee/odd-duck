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
    viewResultsButton.addEventListener('click', function() {
      this.displayResults();
    }.bind(this));
  }

  addProduct(name, fileName) {
    const product = {
      name,
      fileName,
      timesShown: 0,
      timesClicked: 0,
    };
    this.products.push(product);
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

    for (const product of this.products) {
      labels.push(product.name);
      votes.push(product.timesClicked);
    }

    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Votes',
          data: votes,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
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
}

document.addEventListener('DOMContentLoaded', function () {
  const app = new App();

  // Add your product data here
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

  app.displayRandomProducts();
});
