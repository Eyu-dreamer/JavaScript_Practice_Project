const inputField = document.querySelector("#text-input");
const resultMessage = document.querySelector("#result");
const checkButton = document.querySelector("#check-btn");

checkButton.addEventListener("click", () => {
  // Get the trimmed input
  const inputStr = inputField.value.trim();

  if (inputStr === "") {
    alert("Please input a value.");
    return;
  }

  // Clean the string to remove all non-alphanumeric characters
  const cleanedStr = inputStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to its reversed version
  if (cleanedStr === reversedStr) {
    resultMessage.innerText = `"${inputStr}" is a palindrome.`;
  } else {
    resultMessage.innerText = `"${inputStr}" is not a palindrome.`;
  }
});
