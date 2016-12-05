var five = require("johnny-five"); //require johnny-five module
var Tessel = require("tessel-io"); //require tessel-io module
//tessel-io class used by johnny-five to communicate w/tessel2

var board = new five.Board({
    //initialize new instance of the board class, specifiying that
    //io will be provided by a new instance of the tessel class

      io: new Tessel()
});



board.on("ready", () => 
{

  //create ready event handler
  var register = new five.ShiftRegister({
       pins: [ "a3", "a5", "a4" ],
       isAnode: true,
  });

  var number = 0;
        
  board.loop(1000, () => 
  {
    register.display(number);
    number = Math.floor(Math.random() * 10);    //display a random num 0-9 every second
  });
   
});
