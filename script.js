
cards = {};
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
	var front = [];
	var back = [];
	var num_cards = 0;
	for (i = 0; i < lines.length; i++)
	{
		front.push(lines[i].split(":")[0].trim());
		back.push(lines[i].split(":")[1].trim());
		num_cards++;
	}
}

function next()
{
	console.log('next')
}

function flip()
{
	console.log('flip')
}

function previous()
{
	console.log('previous')
}

function random()
{
	console.log('random')
}