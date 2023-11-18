const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // datas hex array color

const btn = document.getElementById("hexDefaultBtn");
const colorHex = document.querySelector(".colorText");

btn.addEventListener("click", function () {
	// on Click #hexDefaultBtn
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumberHex()]; //generate color after randomize
	}
	colorHex.textContent = hexColor;
	document.body.style.backgroundColor = hexColor; // apply color on body
});

function getRandomNumberHex() {
	return Math.floor(Math.random() * hex.length); // randomize color
}
