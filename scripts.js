//Button
var button = document.createElement("button");
    button.innerHTML = "";
    var counter = 0;
    document.body.appendChild(button);
        button.addEventListener ("click", function() {
var div = document.createElement("div");
    div.style.width = "10em";
    div.style.height = "10em";
    div.style.background = "black";
    div.style.color = "white";
    div.style.textAlign = "center";
    div.innerHTML = "";
    div.style.padding = "2em;"
    counter++;
    div.id = counter;
    document.body.appendChild(div);
//Naming DIV classes
var d = document.getElementById("div");
div.className += "someDivs";
div.addEventListener('click', function(){
    div.style.backgroundColor = getRandomColor();
    });

// //# on DIV with mouseover
    div.addEventListener('mouseover', function(){
        div.innerText = div.id;
    div.addEventListener('mouseleave', function(){
        div.innerText = ""
    });
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
};
//Make odd & even DIVs disappear
//
div.nextElementSibling
previousElementSibling
.remove ();
//Alert hints//
if (box is even & it's not the last element then remove next element)
else if (the previous element is not the button then remove previous element)
else [ the previous button is not a button, then alert]

