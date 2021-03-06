// require fs
var fs = require("fs");

module.exports = ClozeCard;

// constructor for Cloze Flash Card
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '_____');
    // ADDING PROTOTYPE
    ClozeCard.prototype.create = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze"
        };
        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            // if there is an error, log the error ;)
            if (error) {
                console.log(error);
            }
        });
    };
}
