## Instructions for Odd-Duck app


1. **Create Constructor Function for Products:**
   - Create a constructor function that will generate product objects with the following properties: 
     - Name of the product
     - File path of the image
     - Times the image has been shown
     - Number of times the product has been clicked
   - Initialize an array to store these product objects.

2. **Display Three Unique Products:**
   - Create an algorithm to randomly select three unique product images from the images directory.
   - Display these three products side-by-side in the browser window.
   - Increment the "times shown" property of each of the displayed products by one.

        1. **Create an Array to Hold the Currently Displayed Products:**
          - You'll need an array in your `App` class to keep track of the currently displayed products.

        2. **Generate Three Random and Unique Products:**
          - Create a function or method in your `App` class that generates three random and unique products from your product list.
          - You can use a random number generator to select the products from the list.

        3. **Display the Selected Products:**
          - Display the selected products side by side in the browser window. You can use HTML and CSS to achieve this. create a section in your HTML where these products will be displayed.

        4. **Increment "timesShown" for Displayed Products:**
          - For each of the three displayed products, increment their "timesShown" property by one.


3. **Attach Event Listener for Clicks:**
   - Attach an event listener to the section of the HTML page where the images are displayed. This event listener should listen for clicks on the displayed products.
   - When a user clicks on a product, increment the "times clicked" property for that product.

    **Event Listener Attachment:**

    In your App class, you can add a method that attaches an event listener to the section of the HTML page where the product images are displayed. This event listener will listen for clicks on the displayed products.

    **Handling User Clicks:**

    When a user clicks on one of the displayed products, the event listener function is triggered. Inside this function, you can increment the "timesClicked" property for the clicked product.

4. **Control the Number of Rounds:**
   - Set up a variable to control the number of rounds a user is presented with. By default, it should be 25 rounds. This variable can be easily changed for debugging and testing purposes.

5. **End the Voting Session:**
   - Create logic to end the voting session after the specified number of rounds (e.g., 25 rounds).
   - Remove the event listeners on the product images to prevent further voting.

6. **View Results:**
   - Create a button with the text "View Results."
   - Add a click event listener to this button.
   - When the button is clicked, display a report of results that includes:
     - A list of all the products being considered, using their file names (e.g., "dog-duck").
     - The number of votes received for each product.
     - The number of times each product was shown.
     - Calculate and display the percentage of votes received for each product.

