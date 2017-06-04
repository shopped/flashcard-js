
cards = {};
function generate()
{
	var cardcontainer = document.getElementById("card-container");
	var entrycontainer = document.getElementById("entry-container");
	var entrytext = document.getElementById("entry-text");
	var button = document.getElementById("entry-text");
	var bump = document.getElementById("bump-down");
	cardcontainer.style.display = "block";
	entrycontainer.style.display = "none";
	entrytext.innerHTML="Edit Cards";
	bump.style.display = "block";
	parse();
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
function parse()
{
	console.log('parse');
}