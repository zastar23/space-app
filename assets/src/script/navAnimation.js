export const navAnimation = function () {
	const hamburgerDiv = document.querySelector(".nav--hamburger");
	const hamburgerIcon = document.querySelector(".hamburger");
	const nav = document.querySelector(".nav--ul");
	const blur = document.querySelector(".blur");
	const cross = document.querySelector(".cross");

	hamburgerDiv.addEventListener("click", () => {
		// nav.classList.toggle("hidden");
		hamburgerIcon.classList.toggle("hidden");
		cross.classList.toggle("hidden");
		nav.classList.toggle("move-in");
		nav.classList.toggle("move-out");
		// blur.classList.toggle("hidden");
		blur.classList.toggle("move-in");
		blur.classList.toggle("move-out");
	});
};

navAnimation();
