// require fs
var fs = require("fs");

module.exports = BasicCard;

// constructor for Basic Flash card
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    BasicCard.prototype.create = function() {
        // flashcard object to be appended to file
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
        };
        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });
    };
}
