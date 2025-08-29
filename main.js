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


   
    let weightInput = document.getElementById('user-weight');
    let dropDown = document.getElementById("planets");
    let output = document.getElementById('output');
    let calcButton = document.getElementById('calculate-button');
    // let reversePlanets = planets.reverse();
    let typingTimer= null;
    let isTyping = false;

    const basePlanets = planets.slice();
    // const radioCheck = document.getElementById('plutoNotPlanet');
    const planetMap = Object.fromEntries(basePlanets);
    const excludeBox = document.getElementById('plutoNotPlanet');
    excludeBox.checked = false;
    
   function renderPlanets (){
    const excludePluto = excludeBox.checked;
    const prev = dropDown.value;
  
    const list = basePlanets
    .filter(([name]) => !(excludePluto && name == 'Pluto'))
    .slice()
    .reverse();

    dropDown.innerHTML = '';
    list.forEach(([name]) =>{
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        dropDown.appendChild(opt);
    });
    if ([dropDown.options].some(op => op.value === prev)) dropDown.value = prev;
}
renderPlanets();
excludeBox.addEventListener('change', renderPlanets);
    
/*reversePlanets.forEach(([name]) => {
        const opt = document.createElement('option');
        opt.textContent = name;
        opt.value = name;
        dropDown.appendChild(opt)
    });*/

function calculateWeight(weight, multiplier) { 
        return weight * multiplier;


} 

function handleClickEvent(e) {
    if (isTyping) return;
    let userWeight = Number(weightInput.value);
    let planetName = dropDown.value;
    let multiplier = planetMap[planetName];
    let result = calculateWeight(userWeight, multiplier);

    let message = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`
    typeText(output, message, 25);

}
calcButton.addEventListener('click', handleClickEvent);

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
