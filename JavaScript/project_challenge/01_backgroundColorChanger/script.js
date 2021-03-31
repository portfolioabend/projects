
const btnChangeColor = document.querySelector(".btnChangeColor");
const container = document.querySelector(".container");

const colors = new Array();

function init(){
    btnChangeColor.addEventListener("click", changeColor);

    // Adding colors to our array
    colors.push('AiceBlue');
    colors.push('AntiqueWhite');
    colors.push('Aqua');
    colors.push('Aquamarine');
    colors.push('Azure');
    colors.push('Beige');
    colors.push('Bisque');
    colors.push('BlanchedAlmond');
    colors.push('BlueViolet');
    colors.push('Brown');
    colors.push('CadetBlue');
    colors.push('Chocolate');
    colors.push('Coral');
    colors.push('CornflowerBlue');
    colors.push('Cyan');
    colors.push('DarkBlue');
    // ...
}

function changeColor(e){
    e.preventDefault;
    let randomNumber = Math.floor(Math.random()*colors.length);
    let randomColor = colors[randomNumber];
    document.body.style.backgroundColor = `${randomColor}`;
}

init();
