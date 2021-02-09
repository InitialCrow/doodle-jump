import {gameEngine} from "./engine.js"
//import * as Matter from 'matter-js'

// --- Importation des images --- :
// blob ou ennemi
var imgBlob = new Image()
imgBlob.src = "../assets/sprites/slime.png"

// Ninja ou Doodle
var imgDoodleRight = new Image()
imgDoodleRight.src = "../assets/sprites/Ninja/idle.png"
var imgDoodleLeft = new Image()
imgDoodleLeft.src = "../assets/sprites/Ninja/idle_left.png"
// platform ou gateway
var imgPlatform = new Image()
imgPlatform.src = "../assets/sprites/Platform/ground0.png"
var imgPlatformII = new Image()
imgPlatformII.src = "../assets/sprites/Platform/ice.png"
// booster
var imgBooster = [];

imgBooster.push(new Image())
imgBooster[0].src = "../assets/sprites/PowerUp/goldCoin2.png"
imgBooster.push(new Image())
imgBooster[1].src = "../assets/sprites/PowerUp/goldCoin3.png"
imgBooster.push(new Image())
imgBooster[2].src = "../assets/sprites/PowerUp/goldCoin4.png"
imgBooster.push(new Image())
imgBooster[3].src = "../assets/sprites/PowerUp/goldCoin5.png"
imgBooster.push(new Image())
imgBooster[4].src = "../assets/sprites/PowerUp/goldCoin6.png"



let canvas = {c : document.getElementById("doodle-canvas"), ctx :document.getElementById("doodle-canvas").getContext("2d")}

class doodle {
    constructor() {
        this.x = 0
        this.y = 0
        this.direction = "right"
        this.life = true
    }
    left(px=2) {
        this.direction = "left"
        if (this.x >= 0) {
            this.x -= px
        }
    }
    right(px=2) {
        this.direction = "right"
        if (this.x <= canvas.c.clientWidth) {
            this.x += px
        }
    }
    attack() {
        // lancement du projectile (autre classe)
    }
    show() {
        if (this.direction === "right") {
            canvas.ctx.drawImage(imgDoodleRight, 0, 0, 88, 88, this.x, this.y, 88, 88);
        } else {
            canvas.ctx.drawImage(imgDoodleLeft, 0, 0, 88, 88, this.x, this.y, 88, 88);
        }
    }
}

class ennemi {
    constructor() {
        this.width = 1
        this.x = 0
        this.y = 0
        this.life = 0
    }
    left(px=2) {
        if (this.x >= 0) {
            this.x += px
        }
    }
    right(px=2) {
        if (this.y <= canvas.c.clientWidth) {
            this.y += px
        }
    }
    touch(player) {
        player.life = false
    }
    show() {
        canvas.ctx.drawImage(imgBlob, 0, 50, 25, 75, this.x, this.y, 75, 225);
    }
}
class gateway {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = 1
    }
    left(px=1) {
        if (this.x >= 0) {
            this.x += px
        }
    }
    right(px=1) {
        if (this.y <= canvas.c.clientWidth) {
            this.y += px
        }
    }
    show() {
        for (var i=0; i != this.width; i++) {
            canvas.ctx.drawImage(imgPlatform, 0, 0, 128, 128, this.x+((i)*70), this.y, 70, 70);
        }
    }
}
class booster {
    constructor() {
        this.frame = 5
        this.x = 0
        this.y = 0
        this.life = true
    }
    playerTake(player) {
        player.y += 100
        this.life = false
    }
    show() {
        this.frame ++;
        if (this.frame === 25) {
            this.frame = 5
        }
        canvas.ctx.drawImage(imgBooster[Math.round(this.frame/5)-1], 0, 0, 128, 128, this.x, this.y, 250, 250);
    }
}


gameEngine(20,canvas,()=>{
    // canvas.ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
})