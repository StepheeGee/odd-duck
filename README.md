# LAB - Class 13

11.8.23

## Odd-Ducks

The code creates an interactive voting system where users can click on their preferred product, and it tracks the number of clicks and displays the results once the session ends (after 25 clicks).

### Author: Stephanie G Johnson

### Links and Resources

[Event Listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

[Remove Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

[Click Events](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

[DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

[InnnerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

[Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)



### [Submission PR](https://stepheegee.github.io/odd-duck)


### Lighthouse Accessibility Report Score
![Lighthouse](img/lighthouse13.png)



### Comments

How did this go, overall?

Well, first of all, I didn't add the views to my chart. I had to add the views as an object, inside of an array, to my chart. I changed the size of my chart- actually the size of the container so that it would be more clearly viewed and not take away from the rest of the webpage. I changed the colors of the bar chart to match the pallette. 

I also added JSON for my local storage, which is how I discovered that I didn't factor in the views in my chart. I used stringify to change my objects (the products/images) into strings, when stored. 

I also changed some of the margins in my CSS and shading. 

**Set it - Stringify - Store it - Retrieve it - Parse it**


What observations or questions do you have about what you’ve learned so far?

I don't understand the purpose of JSON other than changing the syntax of Javascript so it can be changed in local storage. 

How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?

It took me about 4.5 hours to do this assignment. I thought it would take much longer based on my previous labs. But I'm grateful. 
