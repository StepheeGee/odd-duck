# LAB - Class 12

11.7.23

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
![Lighthouse](img/lighthouse12.png)



### Comments

How did this go, overall?

I had some serious difficulties getting my chart to display. First, the closing tag was not present when I inspected my console, and that was only remedied when I added some dummy content betwee the canvas tags. Then my console kept producing a module error. Thanksfully, my classmate Ekow took a look at it and determined that if I change the type to module in my app.js file, the error would resolve. And it did. 

I also had trouble adjusting the function for the random products shown (without repeats). But I finally got that to work. I was trying to call the function outside of the constructor and that's why it wasn't working. 

I also had to wrap the results in a results wrapper div because I couldn't find a way to add enough margin between the footer and chart so that the bottom of the chart would be visible above the footer. I had to add padding to the results outermost container - the results wrapper. 

What observations or questions do you have about what you’ve learned so far?

I tried to create a legend and change the color of my bar chart in JS, but it was way too complicated. Every time I made an adjustment, my product display would disappear. So I'd like to know how to accomplish that. 

Also, the console was my best friend today. Because it helped me solve my error codes. 

How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?

Oh, once our instructor informed us that we would have to solve the logic to randomize the product display without repetition, I knew it was going to take me quite a while. And it did. It took me 5.5 hours because I had to take a break to have a meeting with my team. 



