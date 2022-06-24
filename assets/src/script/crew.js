import data from "../../../data.json" assert { type: "json" };

console.log(data);
const img = document.querySelector(".main--moon");
const role = document.querySelector(".role");
const headingName = document.querySelector(".name");
const text = document.querySelector(".main--crew--info_text");

const dotContainer = document.querySelector(".dot-container");

// create dots
const createDots = function () {
	for (let i = 0; i <= 3; i++) {
		const dot = document.querySelector(".main--crew-dots");

		dotContainer.insertAdjacentHTML(
			"beforeend",
			`<div class="main--crew-dots" data-set = ${i + 1} ></div>`
		);
	}
};

createDots();

// add event delegation

dotContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("main--crew-dots")) {
		const dot = e.target.dataset;
		if ((dot.dataset = "2")) {
			role.innerHTML = data.crew[1].role;
			headingName.innerHTML = data.crew[1].name;
			img.src = data.crew[1].images.webp;
			text.innerHTML = data.crew[1].bio;
		}
	}
});
