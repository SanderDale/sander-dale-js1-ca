const aboutContainer = document.querySelector(".container.content");
let aboutText = aboutContainer.innerHTML;

function updateAbout() {
	aboutContainer.innerHTML = aboutText
		.replace("the", "replaced")
		.replace("The", "Replaced")
		.replace(" The", " Replaced");
}

setTimeout(updateAbout, 4000);
