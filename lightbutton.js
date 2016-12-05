var five = require("johnny-five"); //require johnny-five module
var Tessel = require("tessel-io"); //require tessel-io module
//tessel-io class used by johnny-five to communicate w/tessel2

var board = new five.Board({
    //initialize new instance of the board class, specifiying that
    //io will be provided by a new instance of the tessel class

      io: new Tessel()
});


board.on("ready", () => {
      var register = new five.ShiftRegister({       //register pins for tessel
              pins: [ "a3", "a5", "a4" ],
                  isAnode: true,
      });
      var light = new five.Light("b0");
      var button = new five.Button("b1");
      var number = 0;

      light.on("change", () => number = (light.level));     
      //read light(resistance) level to number on a scale of 0-1, 0 is brightest (least resistance)
      //and 1 is complete darkness (most resistance)
      

      button.on("release", () => console.log("Button Released!")); 
      button.on("press", () => register.display(Math.floor(10*(1-number))));

});
      
    
