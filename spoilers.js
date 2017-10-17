/*
 * @author Tristan Damron (github.com/tristandamron)
 * @license GNU General Public License v. 2
*/


var flags = [
    "Star Wars",
    "Episode 8",
    "Episode VII",
    "The Force Awakens",
    "Mark Hamil",
    "George Lucas",
    "Harrison Ford",
    "J. J. Abrams",
    "Carrie Fisher",
    "Kylo Ren",
    "Oscar Isaac",
    "John Boyega",
    "Dead",
    "Killed",
    "Died",
    "Luke Skywalker",
    "Han Solo",
    "Leia Skywalker",
    "Leia Organa",    
    "Anakin Skywalker",
    "Chewbacca",
    "Emporer Palpatine",
    "Darth Plagueis",
    "Poe Dameron",
    "Snoke",
    "Emporer",
    "Rey",
    "Finn",
    "The Last Jedi",
    "Episode VIII",
    "Episode 8",
    "Daughter",
    "Poe",
    "Dameron",
    "Poe Dameron",
    "Spoilers",
    "Pogs",
    "BB-8",
    "C3PO",
    "R2D2",
    "Adam Driver",
];

document.onload = checkPage();

function checkPage() {
    console.log("Checking page...");

    var counter = 0;
    
    for (var i = 0; i < flags.length; i++) {
	if (document.body.innerText.indexOf(flags[i]) != -1) {
	    counter++;
	}
    }
    
    if (counter > 5) {
	var div = document.createElement("div");
	var image_holder = document.createElement("div");
	var message = document.createTextNode("It's a trap! We've detected that there may be Star Wars spoilers on this page.");
	var choice_text = document.createElement("p");

	var image = document.createElement("img");	
	var escape_button = document.createElement("button");
	var continue_button = document.createElement("button");	
	var escape_message = document.createTextNode("Leave this page!");
	var continue_message = document.createTextNode("Never tell me the odds!");

	choice_text.innerHTML = "Do you want to go back to a safe place?";
	choice_text.className = "choice_text";
	
	image.src = chrome.extension.getURL("img/ackbar.jpeg");
	
	escape_button.appendChild(escape_message);
	continue_button.appendChild(continue_message);
	
	div.className = "box";
	div.appendChild(message);
	image_holder.appendChild(image);
	div.appendChild(image_holder);
	div.appendChild(choice_text);
	div.appendChild(escape_button);
	div.appendChild(continue_button);
	document.body.appendChild(div);

	escape_button.onclick = function() { window.location = "https://www.google.com"; }
	continue_button.onclick = function() { div.className = ""; }
    } 
}
