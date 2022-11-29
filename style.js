
function changeColor() {
    var headText = document.getElementById("asciiHeader");
    var mainColor = "rgb(250, 203, 106)";
    var secondColor = "rgb(234,250,250)"
    headText.style.color = headText.style.color == mainColor?secondColor:mainColor;
}

window.setInterval(changeColor,800);