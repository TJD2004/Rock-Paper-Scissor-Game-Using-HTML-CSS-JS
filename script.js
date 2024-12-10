let heading = document.getElementById("header");
console.dir(heading);

let info = document.getElementsByClassName("info");
console.dir(info);

let elements = document.querySelectorAll("p");
console.dir(elements);

heading.innerText = heading.innerText+" With Apna College!";
heading.getAttribute("h1");

let button = document.createElement("button");
button.innerText = "Click Me!";
button.style.backgroundColor  = "red";

document.querySelector("body").prepend(button);