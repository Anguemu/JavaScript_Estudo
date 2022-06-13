function toggledice(){
    let dice1 = document.querySelector(".img1")
    let dice2 = document.querySelector(".img2")
    let winner = document.querySelector("h1")
    
    let  randomnumber1 = Math.floor(Math.random()*6) + 1
    let  randomnumber2 = Math.floor(Math.random()*6) + 1
    
    let image1 = "images/dice" + randomnumber1 + ".png"
    let image2 = "images/dice" + randomnumber2 + ".png"
    
    dice1.setAttribute("src", image1)
    dice2.setAttribute("src", image2)
    
    if (randomnumber1 > randomnumber2){
        winner.innerHTML = "Player 1 Wins!"
    }else if(randomnumber2 > randomnumber1){
    
            winner.innerHTML = "Player 2 Wins!"
    }else{
        winner.innerHTML = "Draw!"
    }
}



  


//function toggledice(){
/*
let dice1 = document.querySelector(".img1")
let dice2 = document.querySelector(".img2")
let winner = document.querySelector("h1")

let  randomnumber1 = Math.floor(Math.random()*6) + 1
let  randomnumber2 = Math.floor(Math.random()*6) + 1

console.log(randomnumber1);

switch(randomnumber1){
    case 1:
        dice.setAttribute("src", "images/dice1.png");
        break
    case 2:
        dice.setAttribute("src", "images/dice2.png");
        break
    case 3:
        dice.setAttribute("src", "images/dice3.png");
        break
    case 4:
        dice.setAttribute("src", "images/dice4.png");
        break
    case 5:
        dice.setAttribute("src", "images/dice5.png");
        break
    case 6:
        dice.setAttribute("src", "images/dice6.png");
        break
}

switch(randomnumber2){
    case 1:
        dice2.setAttribute("src", "images/dice1.png");
        break
    case 2:
        dice2.setAttribute("src", "images/dice2.png");
        break
    case 3:
        dice2.setAttribute("src", "images/dice3.png");
        break
    case 4:
        dice2.setAttribute("src", "images/dice4.png");
        break
    case 5:
        dice.setAttribute("src", "images/dice5.png");
        break
    case 6:
        dice2.setAttribute("src", "images/dice6.png");
        break
}


*/
//}
