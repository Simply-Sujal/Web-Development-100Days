// ADD an Element
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";
//2. Get access to the parent element that should hold the new elment

let firstParagraph = document.querySelector("p");

//3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// Remove element
// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");
// 2. Remove it !
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); // for older browser

// Move Elements
firstH1Element.parentElement.append(firstParagraph);

// InnerHTML Property
console.log(firstParagraph.innerHTML);
