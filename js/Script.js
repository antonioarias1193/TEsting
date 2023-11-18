window.addEventListener("scroll", function () {
	var gambar = document.querySelector(".gambar");
	var container_fluid = document.querySelector(".container-fluid");

	if (window.scrollY < 5) {
		container_fluid.classList.add("my-5");
	} else {
		container_fluid.classList.remove("my-5");
	}

	if (window.scrollY < 5) {
		gambar.classList.add("sizingonscroll");
	} else {
		gambar.classList.remove("sizingonscroll");
	}
});

var navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
	link.addEventListener("click", function () {
		// Menutup Navbar dengan menghapus class "show" dari elemen dengan class "navbar-collapse"
		document.querySelector(".navbar-collapse").classList.remove("show");
	});
});
