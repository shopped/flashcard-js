var front=[];
var back=[];
var num_cards=0;
var right, wrong;
var current_card=0;
var flipped=false;
var cards = [];
var cards_per_chapter = {'6':26, '7':0, '8':0, '10':0, '11':0};

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
	num_cards = 0;
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
	right = wrong = 0;
	next();
}

//cards array will hold all of these
function parse_images_and_make_dictionary(chapter)
{
	//starts a loop
	for (var i=1;i<cards_per_chapter[chapter]+1;i++)
	{
		var card = {};
		card.chapter = chapter;
		//generates a front and back and saves in object
		card.front = dir+"/$/$".replace("$", chapter).replace("$", chapter)+".$.png".replace("$", i);
		card.back = dir+"/$/$".replace("$", chapter).replace("$", chapter)+".$b.png".replace("$", i);
		//checking for hints
		card.hint = dir+"/$/$".replace("$", chapter).replace("$", chapter)+".$h.png".replace("$", i);
		cards.push(card); //adds that object to the cards array
		num_cards++;
	}
	
}
//var num_cards
//var current_card
//array cards
function next(){
	console.log(cards);
	console.log(num_cards);
	current_card++;
	if (current_card == num_cards - 1)
		current_card = 0
	var card = cards[current_card];
	console.log(card);
	document.getElementById('front_img').src = card.front;
	document.getElementById('back_img').src = card.back;
	document.getElementById("back_img").style.display = "none";
	//generate hint
	document.getElementById('hint-btn').onclick=hint;
	document.getElementById('hint_img').src = card.hint;
	document.getElementById('hint-btn').style.backgroundColor = 'steelblue';
	document.getElementById('hint-btn').style.color = 'white';
	//will throw nohint on error
	document.getElementById('hint_img').style.display = "none";
}
function nohint(){
	document.getElementById('hint-btn').onclick="";
	document.getElementById('hint_img').src = '';
	document.getElementById('hint-btn').style.backgroundColor = 'gray';
	document.getElementById('hint-btn').style.color = 'black';

}
function correct(){
	next();
	right++;
	//Will remove the card
	//Will add one to correct
	//Will call next function
}
function missed(){
	next();
	wrong++;
	//Will place the missed card at the end of the deck
	//Will add one to missed
	//Will call next function
}
function help(){
	//This function will show a bunch of hidden elements
}
function flip(){
	var back = document.getElementById("back_img");
	back.style.display = "block";
}
function hint(){
	console.log("hint");
	var hint = document.getElementById("hint_img");
	hint.style.display = "block";
}
function shuffle(){
	//Will randomize the IDs of the remaining cards
}
