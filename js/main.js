
$(document).ready(function () {

    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
		
		
		
		
		
		
		
	// Obtain a reference to the canvas element
	// using its id.
	//htmlCanvas = document.getElementById('c'),
   // Obtain a graphics context on the
   // canvas element for drawing.
   //context = htmlCanvas.getContext('2d');

	// Start listening to resize events and
	// draw canvas.
	initialize();

	function initialize() {
	// Register an event listener to
	// call the resizeCanvas() function each time
	// the window is resized.
		window.addEventListener('resize', resizeCanvas, false);
	// Draw canvas border for the first time.
		resizeCanvas();
	}
	// Display custom canvas.
	// In this case it's a blue, 5 pixel border that
	// resizes along with the browser window.
	function redraw() {
		//ctx.strokeStyle = 'blue';
		ctx.lineWidth = '.1';
		ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	}
	// Runs each time the DOM window resize event fires.
	// Resets the canvas dimensions to match window,
	// then draws the new borders accordingly.
	function resizeCanvas() {
		canvas.width = (window.innerWidth) * .75;
		canvas.height = (window.innerHeight) * .70;
		redraw();
	}
			
		
		
		
		
		
		//var ctx = (a canvas context);
		//ctx.canvas.width  = window.innerWidth;
		// ctx.canvas.height = window.innerHeight;
  
		//canvas.width = window.innerWidth;
		//canvas.height = window.innerHeight;
        //canvas.width = 300;
        //canvas.height = 300;

        var x = 150, //player 1 positioning and speed
            y = 150,
            velY = 0,
            velX = 0,
            speed = 3,
            friction = 0.5, //0.98
            keys = [];
			
		var buttup = $("#UpButton");
			
		$("#UpButton").on("taphold",function() {
			 timeout = setInterval(function(){
				if (velY > -speed) {
						velY--;
						console.log("message!!!");
                }
			}, 10);
			
		});
		
		$("#UpButton").mouseup(function(){
			console.log("clear");
			clearInterval(timeout);
			
		});
			
			

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

            //if (x >= 285) { // colision with game boarders
                //x = 285;
            //} else if (x <= 15) {
                //x = 15;
            //}
			
			
			if (x >= canvas.width - 15) { // colision with game boarders x-axis
                x = canvas.width - 15;
            } else if (x <= 15) {
                x = 15;
            }
			
			if (y > canvas.height - 15) { // colision with game boarders y-axis
                y = canvas.height - 15;
            } else if (y <= 15) {
                y = 15;
            }
			
			
			

            //if (y > 285) {
                //y = 285;
            //} else if (y <= 15) {
                //y = 15;
            //}



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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
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