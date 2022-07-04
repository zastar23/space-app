import data from "../../../data.json" assert { type: "json" };

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
			`<div class="main--crew-dots innactive" data-nr= ${i + 1} ></div>`
		);
	}
};

createDots();

const activateDot = function (dataNr) {
	document
		.querySelectorAll(".main--crew-dots")
		.forEach((dot) => dot.classList.remove("active"));

	document
		.querySelector(`.main--crew-dots[data-nr='${dataNr}']`)
		.classList.add("active");
};

// add event delegation

dotContainer.addEventListener("click", (e) => {
	if (!e.target.classList.contains("main--crew-dots")) return;

	const dotClicked = e.target;

	if (dotClicked.dataset.nr === "1") {
		role.innerHTML = data.crew[0].role;
		headingName.innerHTML = data.crew[0].name;
		img.src = data.crew[0].images.webp;
		text.innerHTML = data.crew[0].bio;
		activateDot(1);
	}

	if (dotClicked.dataset.nr === "2") {
		role.innerHTML = data.crew[1].role;
		headingName.innerHTML = data.crew[1].name;
		img.src = data.crew[1].images.webp;
		text.innerHTML = data.crew[1].bio;
		activateDot(2);
	}

	if (dotClicked.dataset.nr === "3") {
		role.innerHTML = data.crew[2].role;
		headingName.innerHTML = data.crew[2].name;
		img.src = data.crew[2].images.webp;
		text.innerHTML = data.crew[2].bio;
		activateDot(3);
	}

	if (dotClicked.dataset.nr === "4") {
		role.innerHTML = data.crew[3].role;
		headingName.innerHTML = data.crew[3].name;
		img.src = data.crew[3].images.webp;
		text.innerHTML = data.crew[3].bio;
		activateDot(4);
	}
});
