# LAB - Class 15

11.10.23

## Odd-Ducks

The code creates an interactive voting system where users can click on their preferred product, and it tracks the number of clicks and displays the results in a chart, once the session ends (after 25 clicks). This project focuses on random product selection, limited rounds of product interaction, and results visualization, displayed with a dynamic interface. 

### Author: Stephanie G Johnson

### Links and Resources

[Event Listeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

[Remove Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

[Click Events](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

[DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

[InnnerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

[Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)



### [Submission](https://stepheegee.github.io/odd-duck)


### Lighthouse Accessibility Report Score
![Lighthouse](img/lighthouse15.png)



### Comments

How did this go, overall?

This required a lot of reading and learning new ways of doing things in JavaScript. I finally got my logic to work so that the photos aren't duplicated in the current or previous display. I used a built in JavaScript object called Set. And made store new Set in the variable randomIndices. Then I made a while loop that checked for three unique photos to display. And made a recursive call to the function to try again from the beginning to make sure. 

It was challenging. 

I made sure that my local storage was working properly and that my CSS was cleaned up. 

What observations or questions do you have about what you’ve learned so far?

I wanted to use the .index method to check for duplicates, but I didn't know how to use it. So that's why I decided on this route. I'm interested in knowing how that method works. 

How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?

I worked on this for five and a half hours today. I knew it would take me quite a while, which is why I decided against taking "off" today. 
