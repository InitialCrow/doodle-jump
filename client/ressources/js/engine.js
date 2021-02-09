
export const gameLoop = (fpsInterval, then, canvas, callback)=>{
	
    requestAnimationFrame(()=>{
    	gameLoop(fpsInterval, then, canvas, callback)
    })

    let now = Date.now();
 
    let elapsed = now - then;

    // if enough time has elapsed, draw the next frame
   
    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        canvas.ctx.clearRect(0, 0, canvas.c.width, canvas.c.height);

        callback()

    }
}
export const gameEngine = (fps, canvas ,callback)=>{
	let fpsInterval = 1000/fps
	let then = Date.now()
	
	gameLoop(fpsInterval, then, canvas ,callback)
}

