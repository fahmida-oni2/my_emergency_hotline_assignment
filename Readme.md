1.Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: *getElementById:Selects an unique single element which returns at most one element.
*getElementsByClassName:Selects same class elements which returns html collections
*querySelector / querySelectorAll: querySelector selects first element and returns first element and querySelectorAll selects all elements and returns Nodelist .

2.Question:How do you create and insert a new element into the DOM?
Answer: For creating a new element we use document.createElement("tag") and for inserting a new element we use some different types like parent.appendChild(element) for adding at the end ,parent.prepend(element) for adding at the start or parent.append(element) for adding multiple nodes/strings .

3.Question:What is Event Bubbling and how does it work?
Answer: when an event on a child element automatically propagates upward through its parent elements in the DOM but it can be stopped anytime with event.stopPropagation() is called event bubbling.
It follows the flow: target element → parent → body → document → window.

4.Question:What is Event Delegation in JavaScript? Why is it useful?
Answer:Event Delegation attaches a single event listener to a parent element and using event bubbling to manage events on its child elements .
It is useful for Better performance,handling dynamically added elements.

5.Question:What is the difference between preventDefault() and stopPropagation() methods?
Answer:preventDefault() stops default browser behavior and stopPropagation() stops event from bubbling through the DOM process.
