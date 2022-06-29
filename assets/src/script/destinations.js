import data from "../../../data.json" assert { type: "json" };
const img = document.querySelector(".main--moon");
const title = document.querySelector(".main--destinations--planet--heading");
const text = document.querySelector(".main--destinations--planet--info_text");
let distance = document.querySelector("#km");
let time = document.querySelector("#days");
const btnContainer = document.querySelector(".main--destinations--slider_list");

btnContainer.addEventListener("click", (e) => {
	if (!e.target.classList.contains("main--slider_list--item")) return;
	const btnClicked = e.target;
});

const moonData = function () {
	const moonBtn = document.querySelector("#moon");

	moonBtn.addEventListener("click", () => {
		title.innerHTML = "Moon";
		img.src = data.destinations[0].images.webp;
		text.innerHTML = data.destinations[0].description;
		distance.innerHTML = data.destinations[0].distance;
		time.innerHTML = data.destinations[0].travel;
	});
};

const marsData = function () {
	const marsBtn = document.querySelector("#mars");

	marsBtn.addEventListener("click", () => {
		title.innerHTML = "Mars";
		img.src = data.destinations[1].images.webp;
		text.innerHTML = data.destinations[1].description;
		distance.innerHTML = data.destinations[1].distance;
		time.innerHTML = data.destinations[1].travel;
	});
};

const europaData = function () {
	const europaBtn = document
		.querySelector("#europa")
		.addEventListener("click", () => {
			title.innerHTML = "Europa";
			img.src = data.destinations[2].images.webp;
			text.innerHTML = data.destinations[2].description;
			distance.innerHTML = data.destinations[2].distance;
			time.innerHTML = data.destinations[2].travel;
		});
};

const titanData = function () {
	const titanBtn = document
		.querySelector("#titan")
		.addEventListener("click", () => {
			title.innerHTML = "Titan";
			img.src = data.destinations[3].images.webp;
			text.innerHTML = data.destinations[3].description;
			distance.innerHTML = data.destinations[3].distance;
			time.innerHTML = data.destinations[3].travel;
		});
};

const init = function () {
	moonData();
	marsData();
	europaData();
	titanData();
};

init();

export * as destinations from "./destinations.js";
