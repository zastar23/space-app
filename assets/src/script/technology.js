import data from "../../../data.json" assert { type: "json" };

const headingName = document.querySelector(".name");
const text = document.querySelector(".main--crew--info_text");
const img = document.querySelector(".main--technology--vehicle");
const btnsContainer = document.querySelector(".main--technology-btns");

btnsContainer.addEventListener("click", (e) => {
	if (!e.target.classList.contains("btn")) return;
	const button = e.target;

	if (button.dataset.nr === "1") {
		img.src = data.technology[0].images.landscape;
		headingName.innerHTML = data.technology[0].name;
		text.innerHTML = data.technology[0].description;
	}

	if (button.dataset.nr === "2") {
		img.src = data.technology[1].images.landscape;
		headingName.innerHTML = data.technology[1].name;
		text.innerHTML = data.technology[1].description;
	}

	if (button.dataset.nr === "3") {
		img.src = data.technology[2].images.landscape;
		headingName.innerHTML = data.technology[2].name;
		text.innerHTML = data.technology[2].description;
	}
});
