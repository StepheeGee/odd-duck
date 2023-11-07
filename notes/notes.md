# Odd-Duck: Building an Interactive Voting Application

## Step-by-Step Instructions

### Step 1: Create the App Class

1. Start by defining a class named `App`.
2. In the constructor method, initialize the application's state:
   - `clickSoFar` is set to 0, representing the current count of clicks.
   - `clicksAllowed` is set to 25, indicating the maximum number of clicks allowed for the voting session.
   - `currentRound` is set to 0, representing the current round of voting.
3. Create an empty array `this.products` to hold product objects.
4. Create an empty array `this.displayedProducts` to store the products currently being displayed for voting.
5. Bind the `productDisplayClickHandler` method to ensure it can access the application's state.

### Step 2: Prepare the "View Results" Button

1. Get a reference to the "View Results" button element from the HTML by its id, 'viewResultsButton'.
2. Initially, hide the button by setting its display style to 'none'.
3. Attach a click event listener to the "View Results" button. When clicked, this button will trigger the `displayResults` method.

### Step 3: Add Products to the Product List

1. Create a method named `addProduct` within the `App` class to add individual products to the `this.products` array.
2. The `addProduct` method takes two parameters: `name` and `fileName`, representing the name of the product and the image file name, respectively.
3. In the method, a new product object is created with the provided `name` and `fileName`. The `timesShown` and `timesClicked` properties are initialized to 0.
4. The newly created product object is pushed into the `this.products` array.

### Step 4: Display Random Products for Voting

1. Create the `displayRandomProducts` method within the `App` class. This method is responsible for displaying random products for voting.
2. Check if there are at least 3 products in the `this.products` array. If not, show an alert indicating that there aren't enough products to display and return.
3. Check if the current round of voting has reached the limit defined by `clicksAllowed`. If it has, show an alert indicating that the voting session has ended, remove the click event listener, and display the "View Results" button.
4. Initialize an empty array `randomIndices` to keep track of randomly selected product indices.
5. Use a loop to randomly select three unique product indices from the `this.products` array. Ensure that the selected indices are unique and not already present in `randomIndices`.
6. Store the selected products in the `this.displayedProducts` array.
7. Clear the product display area in the HTML and then display the selected products as images. For each displayed product, increment its `timesShown` property to keep track of how often it has been displayed.

### Step 5: Attach Click Event Listeners to Products

1. Implement the `attachProductClickListeners` method within the `App` class.
2. Use this method to attach a click event listener to the product display area in the HTML. This allows the application to detect clicks on displayed products.

### Step 6: Handle Product Click Events

1. Create the `productDisplayClickHandler` method within the `App` class to handle click events on displayed products.
2. Inside this method, check if the current round of voting is still within the allowed number of rounds.
3. If a product image is clicked (indicated by `event.target.tagName === 'IMG'`), increment the `timesClicked` property of the clicked product.
4. Increment the current round and proceed to display a new set of random products for the user to vote on.
5. If the voting session has ended (reached the click limit), log a message indicating that the session has ended, remove the click event listener, and display the "View Results" button.

### Step 7: Display Voting Results

1. Implement the `displayResults` method within the `App` class.
2. In this method, update the HTML content of a results container element to display the names of each product, the number of votes received (`timesClicked`), and the number of times each product was shown (`timesShown`).

### Step 8: Initialize the Application

1. Create an instance of the `App` class using `const app = new App();`.

### Step 9: Add Products

1. Use the `addProduct` method to add various products to the `this.products` array, specifying the name and image file name for each product.

### Step 10: Display the Initial Set of Products

1. Use the `displayRandomProducts` method to display the initial set of random products to the user.

### Step 11: Attach Event Listeners

1. Attach event listeners for clicks on displayed products using the `attachProductClickListeners` method.

By following these steps, you'll build an interactive voting application that displays and tracks products, handles user votes, and provides voting results at the end of the session.
