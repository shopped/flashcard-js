var front=[];
var back=[];
var num_cards=0;
var current_card=0;
var flipped=false;
var cards = [];

var loc;
var dir;

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
	loc = window.location.pathname;
	dir = loc.substring(0, loc.lastIndexOf('/'));
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
	document.getElementById('front_img').src = dir +'/6/6.1.png';
	var chapters = [6, 7, 8, 10];
	var first = true;
	var label = document.getElementById("header-label");
	label.innerHTML = "Chapters: ";
	for (var i=0; i<4; i++){
		{
			parse_images_and_make_dictionary(chapters[i].toString())
			if (!first)
				label.innerHTML += ", "
			label.innerHTML += chapters[i].toString();
			first = false;
		}
	}
	current_card = -1;
	next();
}

//cards array will hold all of these
function parse_images_and_make_dictionary(chapter)
{
	num_cards = 0;
	//starts a loop from 1 to 1000
	for (var i=1;i<25;i++) //$$$FIX THIS
	{
		//checks that a card
		//try{
		//	open();//cwd/chapter/chapter.i.png
		//} catch {
		//	return;
		//}

		var card = {};
		card.chapter = chapter;
		card.front = dir+"/$/$".replace("$", chapter).replace("$", chapter)+".$.png".replace("$", i);
		card.back = dir+"/$/$".replace("$", chapter).replace("$", chapter)+".$b.png".replace("$", i);
		//generates a front and back and saves in object
		if (false){ //hint exists
			//store hint
			card.hint = true;
		} else {
			card.hint = false;
		}
		cards.push(card); //adds that object to the cards array
		num_cards++;
	}
	
}
//var num_cards
//var current_card
//array cards
function next(){
	current_card++;
	if (current_card == num_cards - 1)
		current_card = 0
	var card = cards[current_card];
	console.log(card);
	document.getElementById('front_img').src = card.front;
	document.getElementById('back_img').src = card.back;
	//document.getElementById('hint_img').src = dir +'/6/6.1.png';
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
