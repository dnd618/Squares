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
    div.innerHTML = "1";
    document.body.appendChild(div);
});
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeDivColor() {
    var div = document.getElementById("div");
    var color = getRandomColor();
    div.style.backgroundColor = color;
};

