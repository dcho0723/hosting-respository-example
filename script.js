const h2 = document.createElement('h2');
h2.textContent = "This content added by Javascript";

const h3 = document.createElement('h3');
h3.textContent = "This is also added by js";


document.querySelector('body').appendChild(h2);
document.querySelector('body').appendChild(h3);