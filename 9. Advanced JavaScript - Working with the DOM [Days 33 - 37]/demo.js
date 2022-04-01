const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingChrarcters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingChrarcters);
