var fs = require("fs");

var ClozeCard = function(text, cloze){
	
	this.fullText = text;
	this.cloze = cloze; 
	this.partial = this.fullText.replace(this.cloze, "_______")
	this.create = function (){
		var data = {
			fullText: this.fullText,
			cloze: this.cloze,
			partial: this.partial,
			type: "cloze"
		};
//add card to log.txt
	fs.appendFile("log.txt", JSON.stringify(data) + ";", "utf8", function(error){
		if (error){
			console.log(error);
		}
	});
	};
}




module.exports = ClozeCard;