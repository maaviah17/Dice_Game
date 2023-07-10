
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2); 


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Maaviah has Won 🤪🔝";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Sadia has Won 🤪🔝";
}
else{
    document.querySelector("h1").textContent = "Oops, Draw !!";
}


