var r = Math.floor(Math.random()*6)+1;//random number from 1 to 6
var randomimg1 = "images/dice" + r + ".png";  //random image from images/dice1.png to images/dice6.png

var img1 = document.getElementsByTagName("img")[0];

img1.setAttribute("src",randomimg1);

var r1 = Math.floor(Math.random()*6)+1;//random number from 1 to 6
var randomimg2 = "images/dice" + r1 + ".png";  //random image from images/dice1.png to images/dice6.png

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src",randomimg2);

if(r>r1)
{
    document.querySelector("h1").innerHTML="Winner is Player 1 !";
}

else if(r<r1)
{
    document.querySelector("h1").innerHTML="Winner is Player 2 !";
}

else{
    document.querySelector("h1").innerHTML="Draw !";
}