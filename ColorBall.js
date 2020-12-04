const button = document.querySelector('button');
const display = document.querySelector('.display');
const directions = document.querySelector('.directions');

let start = false;
let playArea = {};

function showBox(){
    playArea.timer = setTimeout(myBox, random(2000));
}

function myBox(){
    //create a shape element
    let element = document.createElement('div');
    element.classList.add('box');
    element.style.top = random(setTopMargin()) + 'px';
    element.style.left = random(setLeftMargin()) + 'px';
    element.style.backgroundColor = getColor();
    element.start = new Date().getTime();
    element.addEventListener('click', hit);
    display.appendChild(element);
}

// Pick a random hex color
function getColor(){
    function col(){
        let hex = random(255).toString(16);
        //always return 2 values, even if a 0 is apended
        return ('0' + String(hex)).substr(-2);
    }
    return '#' + col() + col() + col();
}

 //Adjust top margin so circle is not on the edge
function setTopMargin(){
    let maxHeight = display.clientHeight;
    if (maxHeight <= 100){
        maxHeight = maxHeight + 200;
    } else {
        maxHeight = maxHeight - 200;
    }
    return maxHeight;
}

//Adjust left margin so circle is not on the edge
function setLeftMargin(){
    let maxWidth = display.clientWidth;
    if (maxWidth <= 100){
        maxWidth = maxWidth + 200;
    } else {
        maxWidth = maxWidth - 200;
    }
    
    return maxWidth;
}

function hit(e){
        display.children[0].remove();
        playArea.timer = setTimeout(myBox, random(100));    
}


function random(number){
    let tempVal = Math.floor(Math.random()*number);
    return tempVal;  
}

button.addEventListener('click', function(){
        start = true;
        button.style.display = 'none';
        directions.style.display = 'none';      
    showBox();
})