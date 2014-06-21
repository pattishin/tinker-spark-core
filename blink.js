var Spark = require("spark-io");
var board = new Spark({
      //token: '7ecde6be15664694ff478edb91b937dcca3e3e0d',
      token: '88594d4a8ed5b13d14415c86df4fb13f406e2385',
      deviceId: '53ff70065075535123481187'
});

board.on("ready", function() {
    console.log("CONNECTED");
    this.pinMode("D7", this.MODES.OUTPUT);

    var byte = 0;
    // This will "blink" the on board led
    setInterval(function() {
        this.digitalWrite("D7", (byte ^= 1));
    }.bind(this), 500);
});
