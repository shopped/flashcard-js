var front=[];
var back=[];
var num_cards=0;
var current_card=0;
var flipped=false;

function generate()
{
	var cardcontainer = document.getElementById("card-container");
	var entrycontainer = document.getElementById("entry-container");
	var entrytext = document.getElementById("entry-text");
	var bump = document.getElementById("bump-down");
	var text = document.getElementById("text");
	var samples = document.getElementById("sample-buttons")

	cardcontainer.style.display = "block";
	entrycontainer.style.display = "none";
	entrytext.innerHTML="Edit Cards";
	bump.style.display = "inline-block";
	samples.style.display = "none";

	parse(text.value);
	flipped=false;
	current_card=0;
	next();

	entrytext.onclick=function(){regenerate();};
}
function regenerate()
{
	var cardcontainer = document.getElementById("card-container");
	var entrycontainer = document.getElementById("entry-container");
	var entrytext = document.getElementById("entry-text");
	var bump = document.getElementById("bump-down");
	var samples = document.getElementById("sample-buttons")

	cardcontainer.style.display = "none";
	entrycontainer.style.display = "block";
	entrytext.innerHTML="Generate";
	bump.style.display = "none";
	samples.style.display = "inline";

	entrytext.onclick=function(){generate();};
}
function parse(arg)
{
	var lines = arg.split("\n");
	var temp_num_cards = 0;
	front = [];
	back = [];
	for (i = 0; i < lines.length; i++)
	{
		front.push(lines[i].split(":")[0].trim());
		back.push(lines[i].split(":")[1].trim());
		temp_num_cards++;
	}
	num_cards = temp_num_cards;
}

function next()
{
	card = document.getElementById("card-text");
	current_card++;
	if (current_card > num_cards) {
		current_card = 1;
	}
	flipped=false;
	card.innerHTML = (front[current_card-1]);
}

function flip()
{
	card = document.getElementById("card-text");
	flipped = flipped == false ? true : false;
	card.innerHTML = flipped == false ? (front[current_card-1]) : (back[current_card-1]);
}

function previous()
{
	card = document.getElementById("card-text");
	current_card--;
	if (current_card < 1) {
		current_card = num_cards;
	}
	flipped=false;
	card.innerHTML = (front[current_card-1]);
}

function random()
{
	card = document.getElementById("card-text");
	current_card = Math.ceil(Math.random()*num_cards);
	flipped=false;
	card.innerHTML = (front[current_card-1]);
}

function vocab()
{
	var text = document.getElementById("text");
	text.value=
"to obviate : to remove\n\
demur : raising doubts or showing reluctance\n\
filigree : delicate fine jewellery, usually made of gold or silver thread or beads\n\
convalescence : time spent recovering from an illness\n\
dithyramb : choral song for Dionysus\n\
turbid : cloudy, obscured, opaque\n\
glib : fluent and voluable but insincere and shallow";
}

function reset()
{
	var text = document.getElementById("text");
	text.value=
"First : Reverse\n\
Second : Reverse\n\
Third : Reverse\n\
Fourth : Reverse";
}