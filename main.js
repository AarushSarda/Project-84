canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");
car1_width = 120 ;
car1_height = 70 ;
car1_x = 10 ;
car1_y = 10 ;
car1_image = "car_1.png" ;

car2_width = 120 ;
car2_height = 70 ;
car2_x = 10 ;
car2_y = 100 ;
car2_image = "car_2.png" ;

background_image = "racing_img.jpg";

function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image ;
    car1_img = new Image();
    car1_img.onload = uploadCar1;
    car1_img.src = car1_image;

    car2_img = new Image();
    car2_img.onload = uploadCar2;
    car2_img.src = car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_img , 0 , 0 , canvas.width , canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1_img , car1_x , car1_y , car1_width , car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_img , car2_x , car2_y , car2_width , car2_height);
}
window.addEventListener("keydown" , My_Key_Down);
function My_Key_Down(e) {
    keyPressed = e.keyCode;
    console.log (keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log ("up");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log ("right");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log ("down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log ("left");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log ("car2_up");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log ("car2_down");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log ("car2_left");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log ("car2_right");
    }
}