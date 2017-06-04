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
	var button = document.getElementById("entry-text");
	var bump = document.getElementById("bump-down");
	var text = document.getElementById("text");
	cardcontainer.style.display = "block";
	entrycontainer.style.display = "none";
	entrytext.innerHTML="Edit Cards";
	bump.style.display = "block";
	parse(text.value);
	entrytext.onclick=function(){regenerate();};
	
	flipped=false;
	current_card=0;
	next();
}
function regenerate()
{
	var cardcontainer = document.getElementById("card-container");
	var entrycontainer = document.getElementById("entry-container");
	var entrytext = document.getElementById("entry-text");
	var button = document.getElementById("entry-text");
	var bump = document.getElementById("bump-down");
	cardcontainer.style.display = "none";
	entrycontainer.style.display = "block";
	entrytext.innerHTML="Generate";
	bump.style.display = "none";
	entrytext.onclick=function(){generate();};
}
function parse(arg)
{
	var lines = arg.split("\n");
	var temp_num_cards = 0;
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
	console.log('random')
}