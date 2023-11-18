// Change Button into Simple color
function showSimple() {
	var hex = document.getElementById("hexDefaultBtn");
	var simple = document.getElementById("simpleBtn");
	hex.style.display = "none";
	simple.style.display = "inline";
}

// Change Button into Hex Color
function showHex() {
	var hex = document.getElementById("hexDefaultBtn");
	var simple = document.getElementById("simpleBtn");
	hex.style.display = "inline";
	simple.style.display = "none";
}
