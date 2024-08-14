const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn")
const results = document.getElementById("results-div")


const checkUserInput = () => {
    if (userInput.value === "") {
        alert('Please provide a phone number')
        return
    }

    const validNumber = validatePhoneNumber(userInput.value)

    results.textContent = validNumber ? `Valid US number: ${userInput.value}` : `invalid US number: ${userInput.value}`
}

checkButton.addEventListener("click", checkUserInput)

clearButton.addEventListener("click", () => {
    results.textContent = "";
})

function validatePhoneNumber(number) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    return regex.test(number);
}