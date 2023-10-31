// create image element
let img = document.createElement("img");

// select div in html to insert image into 
let div = document.querySelector("div");

// set styling for img element
img.style = "width: 100%; height: 100%; margin: auto;"

// set image source attribute
img.src = "https://i.pinimg.com/originals/e4/18/c0/e418c07009871848e33c2126c33056c8.jpg";

// append image element to div
div.append(img);

// call the remove() method on your img to remove it from the page
// img.remove();