var front=[];
var back=[];
var num_cards=0;
var current_card=0;
var flipped=false;
var cards = {};

function new_deck(){
	//Show Selection
	var a = document.getElementById("chapter-selection");
	var b = document.getElementById("generate-button");
	a.style.display = "block";
	b.style.display = "block";
	//Hide Deck
	var header= document.getElementById("deck-header");
	var body= document.getElementById("deck-body");
	header.style.display = "none";
	body.style.display = "none";
}

function generate_deck(){
	//Hide Selection
	var a = document.getElementById("chapter-selection");
	var b = document.getElementById("generate-button");
	a.style.display = "none";
	b.style.display = "none";
	//Show Deck
	var header= document.getElementById("deck-header");
	var body= document.getElementById("deck-body");
	header.style.display = "block";
	body.style.display = "block";

	var chapters = [6, 7, 8, 10];
	var first = true;
	var label = document.getElementById("header-label");
	label.innerHTML = "Chapters: ";
	for (var i=0; i<4; i++){
		if (document.getElementById(chapters[i].toString()).checked)
		{
			if (!first)
				label.innerHTML += ", "
			label.innerHTML += chapters[i].toString();
			first = false;
		}
	}
}
function next(){

}
function correct(){
	//Will remove the card
	//Will add one to correct
	//Will call next function
}
function wrong(){
	//Will place the missed card at the end of the deck
	//Will add one to missed
	//Will call next function
}
function help(){
	//This function will show a bunch of hidden elements
}
function hint(){
	//Will show hint to visible
}
function shuffle(){
	//Will randomize the IDs of the remaining cards
}
