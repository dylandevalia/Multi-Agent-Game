
// possibles axis to move the camera
var AXIS = {

  NONE: "none",

  HORIZONTAL: "horizontal",

  VERTICAL: "vertical",

  BOTH: "both"

};

class Camera{

  constructor(cameraX, cameraY, viewPortWidth, viewPortHeight, worldWidth, worldHeight){

    this.camera = new SAT.Vector(cameraX || 0, cameraY || 0);

    // distance from followed object to border before camera starts move
    // min distance to horizontal borders
    // min distance to vertical borders
    this.focusOffset = new SAT.Vector(0,0);

    // viewport dimensions
    this.viewPortWidth = viewPortWidth;
    this.viewPortHeight = viewPortHeight;

    // allow camera to move in vertical and horizontal axis
    this.axis = AXIS.BOTH;

    // object that should be followed
    this.focus = null;

  }

  update(){

    if(this.focus != null){
      // if camera axis is locked to horizontal logic or both axis
      if(this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH){

        if(this.focus.pos.x - this.camera.x + this.focusOffset.x > this.viewPortWidth) {

          this.camera.x = this.focus.pos.x - (this.viewPortWidth - this.focusOffset.x);

        } else if(this.focus.pos.x - this.focusOffset.x < this.camera.x) {

          this.camera.x = this.focus.pos.x - this.focusOffset.x;

        }

      }
      // if camera axis is locked to vertical logic or both axis
      if(this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH){

        if(this.focus.pos.y - this.camera.y + this.focusOffset.y > this.viewPortHeight){

          this.camera.y = this.focus.pos.y - (this.viewPortHeight - this.focusOffset.y);
        }

        else if(this.focus.pos.y - this.focusOffset.y < this.camera.y){

          this.camera.y = this.focus.pos.y - this.focusOffset.y;

        }

      }
    }

    this.cameraShake(1);

  }

  setFocus(focus,focusOffset){

    this.focus = focus

    this.focusOffset.set(focusOffset);

  }

  getOffset(){
    return this.camera;
  }

  cameraShake(shakeValue){
    this.camera.add(new SAT.Vector(Utility.Random(-shakeValue,shakeValue),Utility.Random(-shakeValue,shakeValue)));
  }

}
