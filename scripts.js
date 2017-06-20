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
