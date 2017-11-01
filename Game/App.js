
// object that stores game
var game = null;

// global mouse position object
var mousePos = null;

// canvas size and width
var CW = 0,CH = 0;

// function that runs on window load
window.onload =  (function(){

  // settting canvas dimensions based on DOM inner width/height
  CW = window.innerWidth;
  CH = window.innerHeight;

  // create mouse position vector
  mousePos = new SAT.Vector(0,0);

  // instantiating game object
  game = new Game();

});


class Game {

  constructor(){

    // define canvas
  	this.canvas = document.getElementById("game_canvas");

  	// define canvas context
  	this.ctx = this.canvas.getContext("2d");

    // setting canvas context height and width for rendering
    this.ctx.canvas.width = CW;
    this.ctx.canvas.height = CH;

    // defining world object
    this.world = new World(5000,5000);

    // Begin game loop with loop object instantiation
    this.gameLoop = new GameLoop(30.0,Utility.Now(),this.tick.bind(this));

  }

  // method that runs everytime game loop returns tick
  tick(deltaTime){
    // updating and updating world
    this.world.update(deltaTime);
    this.world.draw();
  }
}

class GameLoop {


  constructor(fps,lastTime,callBack){

      // fps as a value over 1000 ms (1 second)
      this.fps = fps/1000.0;
      // variable to store time of current tick
      this.now = lastTime;
      // variable to store time of last tick
      this.lastTime = lastTime;
      // call back to run on tick fire
      this.callBack = callBack;
      // beginning tick method
      this.tick();
  }

  // recursive tick call back
  tick(){
    // getting current time
    this.now = Date.now();
    // setting delta as current time minus previous time in seconds
    var deltaTime = (this.now - this.lastTime) / 1000.0;

    // checking if delta time is greater then fps requirement
    if(deltaTime >= this.fps){
      // setting previous tick to the current tick time
      this.lastTime = this.now;
      // running callback with delta time
      if(typeof this.callBack == "function") {
        this.callBack(deltaTime);
      }
    }

    // requesting next frame
    window.requestAnimationFrame(this.tick.bind(this));

  }


}
