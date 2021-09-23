var score = 0;

count = (num) =>{

    score += num;

    if(score < 0){
        score = 0;
    }

    console.log("test " + score)

    document.querySelector('h1').innerHTML = score;

    if(score >= 10 && score < 20){
        document.querySelector('#app').style.backgroundColor = "silver";
    } else if ( score >= 20){
        document.querySelector('#app').style.backgroundColor = "gold";
    }  else document.querySelector('#app').style.backgroundColor = "white";
}

document.getElementById('blue-btn').addEventListener('mouseover', mouseOver)
document.getElementById('red-btn').addEventListener('mouseover', mouseOver)
document.getElementById('green-btn').addEventListener('mouseover', mouseOver)

document.getElementById('blue-btn').addEventListener('mouseout', mouseOut)
document.getElementById('red-btn').addEventListener('mouseout', mouseOut)
document.getElementById('green-btn').addEventListener('mouseout', mouseOut)

document.getElementById('blue-btn').addEventListener('mousedown', mouseDown)
document.getElementById('red-btn').addEventListener('mousedown', mouseDown)
document.getElementById('green-btn').addEventListener('mousedown', mouseDown)

document.getElementById('blue-btn').addEventListener('mouseup', mouseUp)
document.getElementById('red-btn').addEventListener('mouseup', mouseUp)
document.getElementById('green-btn').addEventListener('mouseup', mouseUp)

mouseOver = (evt) =>{
    this.style.backgroundColor = "gray";
}

// function mouseOver(evt){
//     console.log(this)
//     this.style.backgroundColor = "gray";
// }

function mouseOut(evt){
    this.style.backgroundColor = "white";
}

function mouseDown(evt){
    this.style.backgroundColor = "red";
}


function mouseUp(evt){
    this.style.backgroundColor = "red";
}




// changeBg = (color) =>{
//     document.querySelector('#app').style.backgroundColor = color;
// }

// overBtn = () => {
//     document.querySelector('.button2').style.backgroundColor = 'gray';
// }

// outBtn = () => {
//     document.querySelector('.button2').style.backgroundColor = 'white';
// }

// downBtn = () => {
//     document.querySelector('.button2').style.backgroundColor = 'red';
// }

// upBtn = () => {     
//     document.querySelector('.button2').style.backgroundColor = 'blue';
// }