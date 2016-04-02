$(document).ready(function () {
	
	
	
	// Obtain a reference to the canvas element
	// using its id.
	
	
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
	
	document.body.requestFullscreen();//go fullscreen

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
	function redraw() {
		//ctx.strokeStyle = 'blue';
		ctx.lineWidth = '.1';
		ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	}
	// Runs each time the DOM window resize event fires.
	// Resets the canvas dimensions to match window,
	// then draws the new borders accordingly.
	function resizeCanvas() {
		canvas.width = (window.innerWidth) * .67;
		canvas.height = (window.innerHeight) * .69;
		redraw();
	}

        var x = 150, //player 1 positioning and speed
            y = 150,
            velY = 0,
            velX = 0,
            speed = 3,
            friction = 0.5, //0.98
            keys = [];
			
		var buttup = $("#UpButton");
		var timeout;
		
		//---------------------------------touch screen movement-----------------------------------------------//
		
		//$("#UpButton").on("touchstart",function() {
			 //timeout = setInterval(function(){
				//if (velY > -speed) {
						//velY--;
						
                //}
			//}, 10);
			
		//});
		
		$("#UpButton").on("vmouseover",function() { // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			 timeout = setInterval(function(){
				if (velY > -speed) {
						velY--;
						
                }
			}, 10);
			
		});
		
		//$("#UpButton").on("touchend",function(){
			
			//clearInterval(timeout);
			
		//});
		
		$("#UpButton").on("vmouseout",function(){ // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			
			clearInterval(timeout);
			
		});
		
		
		//$("#DwnButton").on("touchstart",function() {
			 //timeout = setInterval(function(){
				//if (velY < speed) {
                   // velY++;
                //}
			//}, 10);
			
		//});
		
		$("#DwnButton").on("vmouseover",function() { // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			 timeout = setInterval(function(){
				if (velY < speed) {
                    velY++;
                }
			}, 10);
			
		});
		
		//$("#DwnButton").on("touchend",function(){
			
			//clearInterval(timeout);
			
		//});
		
		$("#DwnButton").on("vmouseout",function(){ // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			
			clearInterval(timeout);
			
		});
		
		
		//$("#lftButton").on("touchstart",function() {
			 //timeout = setInterval(function(){
				//if (velX > -speed) {
                    //velX--;
                //}
			//}, 10);
			
		//});
		
		$("#lftButton").on("vmouseover",function() { // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			 timeout = setInterval(function(){
				if (velX > -speed) {
                    velX--;
                }
			}, 10);
			
		});
		
		//$("#lftButton").on("touchend",function(){
			
			//clearInterval(timeout);
			
		//});
		
		$("#lftButton").on("vmouseout",function(){ // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			
			clearInterval(timeout);
			
		});
		
		
		//$("#rghtButton").on("touchstart",function() {
			 //timeout = setInterval(function(){
				//if (velX < speed) {
                    //velX++;
                //}
			//}, 10);
			
		//});
		
		$("#rghtButton").on("vmouseover",function() { // an attempt to hit two buttons at once. Good for some kind of drunk maze game
			 timeout = setInterval(function(){
				if (velX < speed) {
                    velX++;
                }
			}, 10);
			
		});
		
		//$("#rghtButton").on("touchend",function(){
			
			//clearInterval(timeout);
			
		//});
		
		$("#rghtButton").on("vmouseout",function(){ // an attempt to hit two buttons at once
			
			clearInterval(timeout);
			
		});
			
		//------------------------Touch screen movement end---------------------------------------------//	

        function update() { //player movement with keyboard

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
			
			//-----------------player movement with keyboard end --------------------------------------------//
			
			
            velY *= friction; //friction and positioning
            y += velY;
            velX *= friction;
            x += velX;
			
			
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
            ctx.arc(100, 100, 15, 0, Math.PI * 2); // draw the ai, ai has hard coded position
            ctx.fill();
            ctx.closePath();


            setTimeout(update, 10); //refresh the screen
        }

        update();// sets the keyboard press loop into motion

        document.body.addEventListener("keydown", function (e) { // these make the keyboard do
            keys[e.keyCode] = true;
        });
        document.body.addEventListener("keyup", function (e) {
            keys[e.keyCode] = false;
        });
    });