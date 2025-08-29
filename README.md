1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:

getElementById("id") → একটা element যার ID match করে return করে।
getElementsByClassName("class") →htmlcollection retrun kore, একটা list (array), যেটাতে একাধিক element থাকতে পারে।
querySelector → প্রথম matching element return করে।
querySelectorAll → nodeList return করে, সবগুলো matching element list আকারে return করে।


2. How do you create and insert a new element into the DOM?
Answer:

Create element → let div = document.createElement("div");
Add content/attributes → div.textContent = "Hello World";
Insert into DOM → document.body.appendChild(div); 


3. What is Event Bubbling and how does it work?
Answer:

Event Bubbling মানে হলো যখন একটা child element এ event ঘটে, সেটা উপরে parent element গুলোতেও propagate হয়।



4. What is Event Delegation in JavaScript? Why is it useful?
Answer:

Event Delegation হলো parent element এ একটা event listener বসানো, যাতে তার ভিতরের child element গুলার event automatically handle হয়।


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() → element এর default behavior বন্ধ করে।
