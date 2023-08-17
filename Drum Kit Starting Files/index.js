var noOfClicks = document.querySelectorAll(".drum").length;

function clickButton(){
    this.style.color = "white";
}

for (var i = 0; i < noOfClicks; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",
clickButton);
}