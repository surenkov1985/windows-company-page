window.addEventListener("DOMContentLoaded", function () {
	
	const staticMenu = document.getElementById("sticky-static");
	const fixedMenu = document.getElementById("fixed");

	fixedMenu.style.display = "flex";

	function fixedMenuPosition() {
		let stickyMenuDisplay = window.getComputedStyle(staticMenu).display;

		if (stickyMenuDisplay !== "none" && document.documentElement.scrollTop > staticMenu.offsetTop) {
			fixedMenu.style.top = 0;
		} else {
			fixedMenu.style.top = -500 + "px";
		}
	}

	fixedMenuPosition();

	window.addEventListener("scroll", function () { fixedMenuPosition() });

	// /////////////////////////////////////////////////////////// OPEN BURGER MENU
	// ///////////////////////////////////////////////////////////
	const burger = document.querySelector(".nav-bg");
	const burgerMenu = document.querySelector(".burger-nav");
	const background = document.querySelector(".bg");
	const fixedBurgerButton = document.getElementById("fixed-burger");
	const staticBurgerButton = document.getElementById("static-burger");
	const closedButton = document.getElementById("closed-menu");

	function burgerToggle(state) {

		if (state) {

			burger.style.display = "block";
			background.classList.add("bg-open");
			burgerMenu.classList.add("burger-open");

		} else {
			
			burger.style.display = "none";
			background.classList.remove("bg-open");
			burgerMenu.classList.remove("burger-open");
		}
	}

	fixedBurgerButton.addEventListener("click", function() { burgerToggle(true) });
	staticBurgerButton.addEventListener("click", function() { burgerToggle(true) });
	background.addEventListener("click", function() { burgerToggle(false) });
	closedButton.addEventListener("click", function() { burgerToggle(false) });

	// /////////////////////////////////////////////////////////// WINDOW COLOR CHECLBOXES
	// ///////////////////////////////////////////////////////////
	const colorButtons = document.querySelectorAll('input[name="color');
	const windowImage = document.querySelector(".img");

	function setWindowImage(color) {

		windowImage.style.backgroundImage = `url(${color})`;
	}

	setWindowImage(document.querySelector('input[name="color"]:checked').value);

	colorButtons.forEach((colorButton) => colorButton.addEventListener("change", function () {

		setWindowImage(this.value);
	}));
});
