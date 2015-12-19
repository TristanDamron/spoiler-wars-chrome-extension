/*
 * @author Tristan Damron (github.com/tristandamron)
 * @license GNU General Public License v. 2
*/

var flags = [
    "Star Wars",
    "Episode 7",
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
    "Anakin Skywalker",
    "Chewbacca",
    "Emporer Palpatine",
    "Darth Plagueis",
    "Poe Dameron",
    "Rey",
    "Finn"
];

console.log("Checking page...");

var counter = 0;

for (var i = 0; i < flags.length; i++) {
    if (document.body.innerText.indexOf(flags[i]) != -1) {
	counter++;
    }
}

if (counter > 5) {
    console.log("It's a trap!");
    window.location = "http://www.clickable.me/spoiler-wars.html";
} else {
    console.log("This page should be spoiler free!");
}
