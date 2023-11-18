const colors = [
	"green",
	"red",
	"hotpink",
	"aquamarine",
	"chocolate",
	"deepskyblue",
	"azure",
	"aqua",
]; // color datas
const simplebtn = document.getElementById("simpleBtn");
const color = document.querySelector(".colorText");

simplebtn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber]; // apply color name on body
	color.textContent = colors[randomNumber]; // apply color name on text content
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length); //randomize color
}
