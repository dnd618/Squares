//Button
var button = document.createElement("button");
    button.innerHTML = "";
    document.body.appendChild(button);
        button.addEventListener ("click", function() {
var div = document.createElement("div");
    div.style.width = "10em";
    div.style.height = "10em";
    div.style.background = "black";
    div.style.color = "white";
    div.innerHTML = "";
    div.style.padding = "2em;"
    document.body.appendChild(div);
//Naming DIV classes
var d = document.getElementById("div");
div.className += "someDivs";
div.addEventListener('click', function(){
    div.style.backgroundColor = getRandomColor();
    });
});
//Function for div random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
