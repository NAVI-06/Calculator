// Get the input box element where the calculation results will be displayed
let input = document.getElementById('inputBox');

// Get all the button elements on the calculator
let buttons = document.querySelectorAll('button');

// Initialize an empty string to keep track of the input
let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons);

// Loop through each button and add a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the clicked button is the equals sign
        if(e.target.innerHTML == '='){
            // Evaluate the string expression and update the input value with the result
            string = eval(string);
            input.value = string;
        }
        // Check if the clicked button is the "AC" (All Clear) button
        else if(e.target.innerHTML == 'AC'){
            // Clear the string and update the input value
            string = "";
            input.value = string;
        }
        // Check if the clicked button is the "DEL" (Delete) button
        else if(e.target.innerHTML == 'DEL'){
            // Remove the last character from the string and update the input value
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // For any other button (numbers and operators)
        else{
            // Append the clicked button's content to the string and update the input value
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
