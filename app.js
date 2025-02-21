const mainMenuDisplayer = document.getElementById("main-menu");
const pvpButton = document.getElementById("PVP");
const rulesButton = document.getElementById("rules");
const rulesDisplay = document.getElementById("rulesCard");
const pause = document.getElementById("pauseEvent");

/* main menu code */

pvpButton.addEventListener("click", () => {
	mainMenuDisplayer.style.display = "none";
});

rulesButton.addEventListener("click", () => {
	mainMenuDisplayer.style.display = "none";

	// Supprimer l'élément rulesCard s'il existe déjà
	const existingSection = document.getElementById("rulesCard");
	if (existingSection) {
		existingSection.remove();
	}

	// Créer un nouvel élément rulesCard
	const section = document.createElement("section");
	section.id = "rulesCard";
	section.className = "rules-displayer";
	section.style.backgroundColor = "var(--color-purple)";
	section.style.position = "absolute";
	section.style.zIndex = "10";
	section.style.bottom = "0px";
	section.style.top = "0px";
	section.style.right = "0px";
	section.style.left = "0px";
	section.style.display = "flex";
	section.style.alignItems = "center";
	section.style.display = "flex";

	const rulesTitleDiv = document.createElement("div");
	rulesTitleDiv.className = "rules-title";
	rulesTitleDiv.style.width = "100%";
	rulesTitleDiv.style.textAlign = "center";
	const rulesTitle = document.createElement("p");
	rulesTitle.className = "heading-L";
	rulesTitle.textContent = "RULES";
	rulesTitleDiv.appendChild(rulesTitle);

	const objectiveDiv = document.createElement("div");
	objectiveDiv.className = "text-rules-organizer";
	objectiveDiv.style.display = "flex";
	objectiveDiv.style.flexDirection = "column";
	objectiveDiv.style.gap = "16px";
	const objectiveHeading = document.createElement("p");
	objectiveHeading.className = "heading-S";
	objectiveHeading.style.color = "var(--color-purple)";
	objectiveHeading.textContent = "OBJECTIVE";
	const objectiveText = document.createElement("p");
	objectiveText.className = "body-text";
	objectiveText.textContent =
		"Be the first player to connect 4 of the same colored discs in a row (vertically, horizontally, or diagonally).";
	objectiveDiv.appendChild(objectiveHeading);
	objectiveDiv.appendChild(objectiveText);

	const howToPlayDiv = document.createElement("div");
	const howToPlayHeading = document.createElement("p");
	howToPlayHeading.className = "heading-S";
	howToPlayHeading.style.color = "var(--color-purple)";
	howToPlayHeading.textContent = "HOW TO PLAY";
	const howToPlayList = document.createElement("ol");
	howToPlayList.className = "body-text";
	howToPlayList.style.padding = "16px";
	const howToPlayItems = [
		"Red goes first in the first game.",
		"Players must alternate turns, and only one disc can be dropped in each turn.",
		"The game ends when there is a 4-in-a-row or a stalemate.",
		"The starter of the previous game goes second on the next game.",
	];
	howToPlayItems.forEach((itemText) => {
		const listItem = document.createElement("li");
		listItem.textContent = itemText;
		howToPlayList.appendChild(listItem);
	});
	howToPlayDiv.appendChild(howToPlayHeading);
	howToPlayDiv.appendChild(howToPlayList);

	const validationButton = document.createElement("button");
	validationButton.className = "validation";
	validationButton.style.background =
		"center / cover url(../assets/icon-check.svg)";
	validationButton.style.padding = "35px";
	validationButton.style.border = "none";
	validationButton.style.borderRadius = "50%";

	validationButton.addEventListener("mouseover", () => {
		validationButton.style.background =
			"center / cover url(../assets/icon-check-hover.svg)";
	});

	validationButton.addEventListener("mouseout", () => {
		validationButton.style.background =
			"center / cover url(../assets/icon-check.svg)";
	});

	validationButton.addEventListener("click", () => {
		section.remove();
		mainMenuDisplayer.style.display = "flex";
	});

	const dialog = document.createElement("div");
	dialog.appendChild(rulesTitleDiv);
	dialog.appendChild(objectiveDiv);
	dialog.appendChild(howToPlayDiv);
	dialog.appendChild(validationButton);

	section.appendChild(dialog);
	document.body.appendChild(section);
});

/* Code dialog */

const dialog = document.createElement("dialog");
dialog.id = "rulesDialog";
dialog.style.width = "30%";
dialog.style.padding = "34px";
dialog.style.borderRadius = "40px";
dialog.style.display = "flex";
dialog.style.gap = "25px";
dialog.style.margin = "auto";
dialog.style.flexDirection = "column";
dialog.style.border = "solid var(--border-width)";
dialog.style.borderColor = "var(--border-normal)";
dialog.style.borderBottom = "solid var(--border-bottom-width)";
dialog.style.borderBottomColor = "var(--border-normal)";
dialog.style.justifyContent = "space-evenly";

/* code pause */

pause.addEventListener("click", () => {
	const section = document.createElement("section");
	section.className = "pause-displayer";
	section.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
	section.style.position = "absolute";
	section.style.zIndex = "90";
	section.style.bottom = "0px";
	section.style.top = "0px";
	section.style.right = "0px";
	section.style.left = "0px";
	section.style.display = "flex";
	section.style.alignItems = "center";
	section.style.justifyContent = "center";

	const dialog = document.createElement("dialog");
	dialog.className = "pauseDialog";
	dialog.style.display = "flex";
	dialog.style.flexDirection = "column";
	dialog.style.alignItems = "center";
	dialog.style.justifyContent = "center";
	dialog.style.backgroundColor = "var(--color-purple)";
	dialog.style.color = "var(--color-white)";
	dialog.style.padding = "20px";
	dialog.style.borderRadius = "40px";
	dialog.style.borderColor = "var(--border-normal)";
	dialog.style.borderBottom = "solid var(--border-bottom-width)";
	dialog.style.borderBottomColor = "var(--border-normal)";

	const pauseTitleDiv = document.createElement("div");
	pauseTitleDiv.className = "pauseTitle";

	const pauseTitle = document.createElement("p");
	pauseTitle.className = "heading-L";
	pauseTitle.textContent = "PAUSE";

	pauseTitleDiv.appendChild(pauseTitle);

	const pauseButtonsDiv = document.createElement("div");
	pauseButtonsDiv.className = "pauseButtons";
	pauseButtonsDiv.style.width = "100%";
	pauseButtonsDiv.style.display = "flex";
	pauseButtonsDiv.style.flexDirection = "column";
	pauseButtonsDiv.style.gap = "10px";

	const continueBtn = document.createElement("button");
	continueBtn.className = "continue-btn";
	continueBtn.textContent = "CONTINUE GAME";
	continueBtn.style.width = "100%";

	const restartBtn = document.createElement("button");
	restartBtn.className = "continue-btn";
	restartBtn.textContent = "RESTART";
	restartBtn.style.width = "100%";

	const quitBtn = document.createElement("button");
	quitBtn.className = "quit-btn";
	quitBtn.textContent = "QUIT GAME";
	quitBtn.style.width = "100%";

	pauseButtonsDiv.appendChild(continueBtn);
	pauseButtonsDiv.appendChild(restartBtn);
	pauseButtonsDiv.appendChild(quitBtn);

	dialog.appendChild(pauseTitleDiv);
	dialog.appendChild(pauseButtonsDiv);
	section.appendChild(dialog);
	document.body.appendChild(section);

	dialog.showModal();

	continueBtn.addEventListener("click", () => {
		dialog.close();
		section.remove();
	});

	quitBtn.addEventListener("click", () => {
		dialog.close();
		section.remove();
		mainMenuDisplayer.style.display = "flex";
	});

	restartBtn.addEventListener("click", () => {
		dialog.close();
		section.remove();
	});
});
