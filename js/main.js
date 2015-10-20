    $(document).ready(function () {

        var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");

        canvas.width = 300;
        canvas.height = 300;

        var x = 150, //player 1 positioning and speed
            y = 150,
            velY = 0,
            velX = 0,
            speed = 3,
            friction = 0.5, //0.98
            keys = [];

        function update() { //player movement

            if (keys[38]) {
                if (velY > -speed) {
                    velY--;
                }
            }

            if (keys[40]) {
                if (velY < speed) {
                    velY++;
                }
            }
            if (keys[39]) {
                if (velX < speed) {
                    velX++;
                }
            }
            if (keys[37]) {
                if (velX > -speed) {
                    velX--;
                }
            }

            velY *= friction; //friction and positioning
            y += velY;
            velX *= friction;
            x += velX;

            if (x >= 285) { // colision with game boarders
                x = 285;
            } else if (x <= 15) {
                x = 15;
            }

            if (y > 285) {
                y = 285;
            } else if (y <= 15) {
                y = 15;
            }



            if (x <= 100 && y >= 90 && y <= 100 && x >= 90) { // player colision with ai
                x = 80;
                y = 80;
            } //else if (x <= 35) {
              // x = 35;
            //}

            //if (y <= 100) {
            //    y = 100;
            //} else if (y <= 15) {
            //    y = 15;
            //}



            
            ctx.beginPath();
            ctx.clearRect(0, 0, 300, 300);
            ctx.fillStyle = "blue";
            ctx.arc(x, y, 15, 0, Math.PI * 2); // draw the player
            ctx.fill();
            ctx.closePath();

            
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(100, 100, 15, 0, Math.PI * 2); // draw the ai
            ctx.fill();
            ctx.closePath();


            setTimeout(update, 10); //refresh the screen
        }

        update();

        document.body.addEventListener("keydown", function (e) {
            keys[e.keyCode] = true;
        });
        document.body.addEventListener("keyup", function (e) {
            keys[e.keyCode] = false;
        });
    });