
class Entity {

  constructor(x,y,sx,sy){

    this.pos = new SAT.Vector(x,y);

    this.size = new SAT.Vector(sx,sy);

    this.colour = new Colour();

  }

  setPos(pos){
    this.pos.set(pos);
  }

  setSize(size){
    this.size.set(size);
  }

  // takes a colour object
  setColour(col){
    this.colour.setColour(col)
  }


  update(){}

  draw(){}

}

var DrawMode = {
  ORIGIN:"origin",
  CENTER:"center"
}


class Circle extends Entity {

  constructor(x,y,r){
    super(x,y,r,r);
  }

  draw(camera){
    Draw.fillCol(this.colour);
    Draw.circle(this.pos.x-camera.x,this.pos.y-camera.y,this.size.x)
  }

  area(){
    return this.size.x*this.size.x*Math.PI;
  }

  checkPointInCircle(otherPoint){
    return Utility.dist(this.pos,otherPoint) < this.size.x;
  }

}

class Rectangle extends Entity {

  constructor(x,y,w,h){
    super(x,y,w,h);
  }

  draw(camera){
    Draw.fillCol(this.colour);
    Draw.rect(this.pos.x-camera.x,this.pos.y-camera.y,this.size.x,this.size.y);
  }

  area(){
    return this.size.x*this.size.y;
  }

  checkPointInRectangle(otherPoint){
    return (otherPoint.x > this.pos.x && otherPoint.x < this.pos.x + this.size.x && otherPoint.y > this.pos.y && otherPoint.y < this.pos.y + this.size.y);
  }

  checkRectangleinRectangle(rectangle){
    return (this.pos.x <= rectangle.pos.x && this.pos.x + this.size.x >= rectangle.pos.x + rectangle.size.x &&
            this.pos.y <= rectangle.pos.y && this.pos.y + this.size.y >= rectangle.pos.y + rectangle.size.y);
  }

}