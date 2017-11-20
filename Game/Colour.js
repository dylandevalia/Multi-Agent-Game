
class Colour {

  constructor(r = 255,g = 255,b = 255,a = 1.0){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  getR(){
    return this.r;
  }

  getG(){
    return this.g;
  }

  getB(){
    return this.b;
  }

  getA(){
    return this.a;
  }

  setR(r){
    this.r = r;
  }

  setG(g){
    this.g = g;
  }

  setB(b){
    this.b = b;
  }

  setA(a){
    this.a = a;
  }

  getHex(){
    return "#"+this.r.toString(16).toUpperCase() +
               this.g.toString(16).toUpperCase() +
               this.b.toString(16).toUpperCase() +
               this.a.toString(16).toUpperCase();
  }

  getRGBA(){
    return 'rgba('+Math.floor(this.r)+','+Math.floor(this.g)+','+Math.floor(this.b)+','+this.a+')';
  }

  random(min = 0,max = 255){
      this.r = Math.floor(Utility.Random(min,max));
      this.g = Math.floor(Utility.Random(min,max));
      this.b = Math.floor(Utility.Random(min,max));
    return this;
  }

  randomR(min = 0,max = 255){
      this.r = Math.floor(Utility.Random(min,max));
      this.g = 0;
      this.b = 0;
    return this;
  }

  randomG(min = 0,max = 255){
      this.r = 0;
      this.g = Math.floor(Utility.Random(min,max));
      this.b = 0;
    return this;
  }

  randomG(min = 0,max = 255){
      this.r = 0;
      this.g = 0;
      this.b = Math.floor(Utility.Random(min,max));
    return this;
  }

  randomGrey(min = 0,max = 255){
      let grey = Math.floor(Utility.Random(min,max))
      this.r = grey;
      this.g = grey;
      this.b = grey;
    return this;
  }

  setColour(colour){
    this.r = colour.r || 255;
    this.g = colour.g || 255;
    this.b = colour.b || 255;
    this.a = colour.a || 1.0;
    return this;
  }

}

class PulseColour {

  constructor(primary,secondary,step){

  }

  getColour(){
  }

}
