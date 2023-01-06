const textarea = document.getElementById('textarea')
// selecting the div that will container created spans
const choicesDiv = document.querySelector('.choices')

// adding event listener on the textarea
textarea.addEventListener('keydown', (e)=>{
    // passing the value of the textarea to the function that will create tags
    creatingTags(e.target.value)
    // fires when you click 'Enter'
    if(e.code == 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        // This is the hero function that do most of work
        randomSelect()
    }
})

// function converting value in textarea to tags and showing them in the UI
function creatingTags(input){
    var arrayOfChoices =input.split(",")
    .filter(tag=>tag.trim() !== '')
    .map(tag => tag.trim())
    choicesDiv.innerHTML = ' '

    arrayOfChoices.forEach(choice => {
        let newSpan = document.createElement('span')
        choicesDiv.append(newSpan)
        newSpan.textContent =choice
        newSpan.classList.add('choice')
    });
}
//  Main Funtion
function randomSelect(){
    const times =30;
    const interval = setInterval(() => {
        const randomChoice = pickRandomChoice()
        heighlightChoice(randomChoice)
        setTimeout(() => {
            unHeighlightChoice(randomChoice)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomChoice = pickRandomChoice()
            heighlightChoice(randomChoice)
        }, 100);
    }, times * 100);
}
// Helping function to choose random one
function pickRandomChoice(){
    let spans = document.querySelectorAll('.choice')
    return  spans[Math.floor(Math.random()*spans.length)]
}

// Helping function to add class
function heighlightChoice(tag){
    tag.classList.add('selected')
}
// Helping function to remove class
function unHeighlightChoice(tag){
    tag.classList.remove('selected')
}
