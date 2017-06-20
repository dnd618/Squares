function button_click(color) {
     document.getElementById("box").style.backgroundColor = color;
     document.getElementById("box1").style.backgroundColor = color;
};
('body').on('click', '.change-color', function(){
    var color = $(this).data('color');
    $('.global-class-'+color).css('background-color', color);
});