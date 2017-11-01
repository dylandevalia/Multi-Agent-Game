class LevelManager {

  constructor(){
    this.levels = [];
  }

  loadLevel(src){
    this.loadJSON(src,(function(level){
      this.levels.push(level);
      console.log("Level Added",level);
    }).bind(this));
  }

  loadJSON(src, callback) {

  		var xobj = new XMLHttpRequest();
  		xobj.overrideMimeType("application/json");
  		xobj.open('GET', src, true);
  		xobj.onreadystatechange = function ()
  		{
  			if (xobj.readyState == 4 && xobj.status == "200")
  			{
  				callback(xobj.responseText);
  			}
  		}

  		xobj.send(null);
	}



}
