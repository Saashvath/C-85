
var canvas = new fabric.Canvas('Canvas1')
ctx = canvas.getContext("2d");
Car1_width = 125;
Car1_height = 75;
car1_img = "Car1.jpg"
Car1_x = 1
Car1_y = 10;

Car2_width = 125;
Car2_height = 75;
car2_img = "download.jpg"
Car2_x = 1
Car2_y = 10; 

var car1_value = ""
var car2_value = ""
car_update_value = ""
car2_update_value = ""

function car1_update() {

    fabric.Image.fromURL("Car1.jpg", function (Img) {
        car_update_value = Img;

        car_update_value.scaleToWidth(150);
        car_update_value.scaleToHeight(150);
        car_update_value.set({
            top: Car1_y,
            left: Car1_x
        });
        canvas.add(car_update_value);
    });
}
function car2_update() {

    fabric.Image.fromURL("download.jpg", function (Img) {
        car2_update_value = Img;

        car2_update_value.scaleToWidth(150);
        car2_update_value.scaleToHeight(150);
        car2_update_value.set({
            top: Car2_y,
            left: Car2_x
        });
        canvas.add(car2_update_value);



    });
}





background_img = "racing.jpg"





function upload_Car1() {

    ctx.drawImage(Car1_img, 0, 0, canvas.width, canvas.height)
}

function upload_Car2() {

    ctx.drawImage(Car2_img, 0, 0, canvas.width, canvas.height)
}

window.addEventListener("keydown", keydown_1);

function keydown_1(e) {
    var key_pressed = e.keyCode;



    if (key_pressed == '76') {

        car2_update("download.jpg")
        console.log("Car Will Moving Towards D-right  ")

    }



    if (key_pressed == '82') {


        car1_update("Car1.jpg")
        console.log("Car Will Moving Towards -right  ")
    }

    if (key_pressed == '39') {

        Car1_right()
        console.log("Right")
        console.log(Car1_x)
    }

    if(key_pressed=='37'){

        Car1_left()
        console.log("Left")
        console.log(Car1_x)
    }


    if(key_pressed=='65'){

        Car2_left()
        console.log("A")
        console.log(Car2_x)

    }

    if(key_pressed=='68'){

        Car2_right()
        console.log("D")
        console.log(Car2_x)

    }


}








function Car1_left() {

    if (Car1_x > 10) {
        Car1_x = Car1_x - 10;
        canvas.remove(car_update_value)
        console.log("When Left Arrow Is Pressed , X = " + Car1_x + " | Y = " + Car1_y);
        car1_update();
    }

}

function Car1_right() {

    if (Car1_x < 900) {
        Car1_x = Car1_x + 10;
        canvas.remove(car_update_value)
        console.log("When right Arrow Is Pressed , X = " + Car1_x + " | Y = " + Car1_y);
        car1_update();
    }

}




function Car2_left() {

    if (Car2_x > 10) {
        Car2_x = Car2_x - 10;
        canvas.remove(car2_update_value)
        console.log("When Left Arrow Is Pressed , X = " + Car2_x + " | Y = " + Car2_y);
        car2_update();
    }

}


function Car2_right(){

    if (Car2_x < 900) {
        Car2_x = Car2_x + 10;
        canvas.remove(car2_update_value)
        console.log("When right Arrow Is Pressed , X = " + Car2_x + " | Y = " + Car2_y);
        car2_update();
        
    }

}