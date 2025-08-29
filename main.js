  // Write your JavaScript code here! 
const planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 

    
];


    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
    let weightInput = document.getElementById('user-weight');
    let dropDown = document.getElementById("planets");
    let output = document.getElementById('output');
    let calcButton = document.getElementById('calculate-button');
    let reversePlanets = [...planets].reverse();

    const planetMap = Object.fromEntries(planets);
    
    reversePlanets.forEach(([name, multiplier]) => {
        const opt = document.createElement('option');
        opt.textContent = name;
        opt.value = name;
        dropDown.appendChild(opt)
    });
function calculateWeight(weight, multiplier) { 
        return weight * multiplier;
    // 2. Write the code to return the correct weight 

} 
const IS_TEST = location.port === '8888'; // the test serves at http://localhost:8888

function handleClickEvent(e) {
    if (isTyping) return;
    let userWeight = Number(weightInput.value);
    let planetName = dropDown.value;
    let multiplier = planetMap[planetName];
    let result = calculateWeight(userWeight, multiplier);

    let message = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`
    typeText(output, message, 25);

    if (IS_TEST) {
        output.textContent = message;      // immediate for tests
      } else {
        typeText(output, message, 25);     // typewriter for normal use
      }
}
calcButton.addEventListener('click', handleClickEvent);


    // 3. Declare a variable called userWeight and assign the value of the user's weight. 

    // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 

    // 5. Declare a variable called result and assign the value of the new calculated weight. 

    // 6. Write code to display the message shown in the screenshot. 



    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.

    let typingTimer= null;
    let isTyping = false;
  

    function typeText (el, text, speed = 25){
        if (typingTimer) { clearInterval(typingTimer); typingTimer = null;}
        isTyping = true;
        el.textContent = '';
        let i = 0;
        typingTimer = setInterval (() => {
            el.textContent += text[i++];
            if (i>= text.length) {
                clearInterval(typingTimer);
                typingTimer = null;
                isTyping= false;
            }
        }, speed);
    }