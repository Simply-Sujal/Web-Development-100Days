// ADD an Element
// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";
//2. Get access to the parent element that should hold the new elment

let firstParagraph = document.querySelector("p");

//3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);
