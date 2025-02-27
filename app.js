const mainMenuDisplayer = document.getElementById("main-menu");
const pvpButton = document.getElementById("PVP");
const rulesButton = document.getElementById("rules");
const pause = document.getElementById("pauseEvent");
const timerDisplay = document.getElementById("timeShower");
const backgroundstyle = document.getElementById("bck-style");

let player1Score = 0;
let player2Score = 0;

function updateScoreDisplay() {
    document.getElementById("player1-score").textContent = player1Score;
    document.getElementById("player2-score").textContent = player2Score;
}

pvpButton.addEventListener("click", () => {
    mainMenuDisplayer.style.display = "none";
    createBoard();
    startTimer();
});

rulesButton.addEventListener("click", () => {
    mainMenuDisplayer.style.display = "none";

    const section = document.createElement("section");
    section.className = "rules-displayer";
    section.style.backgroundColor = "var(--color-purple)";
    section.style.position = "absolute";
    section.style.zIndex = "10";
    section.style.bottom = "0";
    section.style.right = "0";
    section.style.top = "0";
    section.style.left = "0";
    section.style.display = "flex";
    section.style.alignItems = "center";
    section.style.justifyContent = "center";

    const dialog = document.createElement("dialog");
    dialog.id = "rulesDialog";
    dialog.style.width = "30%";
    dialog.style.height = "70%";
    dialog.style.padding = "34px";
    dialog.style.borderRadius = "40px";
    dialog.style.display = "flex";
    dialog.style.gap = "15px";
    dialog.style.margin = "auto";
    dialog.style.flexDirection = "column";
    dialog.style.border = "solid var(--border-width) var(--border-normal)";
    dialog.style.borderBottom = "solid var(--border-bottom-width) var(--border-normal)";
    dialog.style.justifyContent = "space-evenly";
    dialog.style.position = "relative";

    const rulesTitleDiv = document.createElement("div");
    rulesTitleDiv.className = "rules-title";
    rulesTitleDiv.style.display = "flex";
    rulesTitleDiv.style.justifyContent = "center";
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
    objectiveText.textContent = "Be the first player to connect 4 of the same colored discs in a row (vertically, horizontally, or diagonally).";
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

    for (let i = 0; i < howToPlayItems.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = howToPlayItems[i];
        howToPlayList.appendChild(listItem);
    }

    howToPlayDiv.appendChild(howToPlayHeading);
    howToPlayDiv.appendChild(howToPlayList);

    const closeButton = document.createElement("button");
    closeButton.className = "validation";
    closeButton.style.backgroundImage = "url(./assets/icon-check.svg)";
    closeButton.style.backgroundSize = "cover";
    closeButton.style.position = "fixed";
    closeButton.style.bottom = "100px";
    closeButton.style.left = "830px";
    closeButton.style.zIndex = "9999";
    closeButton.style.width = "60px";
    closeButton.style.height = "60px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "50%";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("mouseover", () => {
        closeButton.style.backgroundImage = "url(./assets/icon-check-hover.svg)";
    });
    closeButton.addEventListener("mouseout", () => {
        closeButton.style.backgroundImage = "url(./assets/icon-check.svg)";
    });

    closeButton.addEventListener("click", () => {
        section.remove();
        mainMenuDisplayer.style.display = "flex";
    });

    dialog.appendChild(rulesTitleDiv);
    dialog.appendChild(objectiveDiv);
    dialog.appendChild(howToPlayDiv);
    dialog.appendChild(closeButton);

    section.appendChild(dialog);
    document.body.appendChild(section);

    dialog.showModal();
});

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
    dialog.style.border = "solid var(--border-width) var(--border-normal)";
    dialog.style.borderBottom = "solid var(--border-bottom-width) var(--border-normal)";
    dialog.style.borderRadius = "40px";
    dialog.style.margin = "auto";
    dialog.style.gap = "25px";
    dialog.style.width = "30%";

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
        startTimer();
    });

    quitBtn.addEventListener("click", () => {
        dialog.close();
        section.remove();
        mainMenuDisplayer.style.display = "flex";
        resetGame();
        player1Score = 0;
        player2Score = 0;
        updateScoreDisplay();
    });

    restartBtn.addEventListener("click", () => {
        dialog.close();
        section.remove();
        resetGame();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const secondRestart = document.getElementById('second-restart');
    if (secondRestart) {
        secondRestart.addEventListener("click", resetGame);
    }
});

let grille = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
];
let currentPlayer = "red";
let timer;
let timeLeft = 15;

function startTimer() {
    stopTimer();
    timeLeft = 15;
    timerDisplay.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            switchPlayer();
        }
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function switchPlayer() {
    stopTimer();
    currentPlayer = currentPlayer === "red" ? "yellow" : "red";
    startTimer();
    const playerdisplayed = document.getElementById("player-playing");
    const playerTimeCard = document.getElementById("player-turn");
    if (currentPlayer === "red") {
        playerdisplayed.textContent = "player 1s turn";
        playerTimeCard.className = "player-turn-1";
    } else {
        playerdisplayed.textContent = "player 2s turn";
        playerTimeCard.className = "player-turn-2";
    }
}

function handleMove(event) {
    const col = event.currentTarget.dataset.col;

    for (let r = 5; r >= 0; r--) {
        if (grille[r][col] === "") {
            grille[r][col] = currentPlayer;

            const cell = event.currentTarget.children[r];
            cell.classList.add(currentPlayer);

            const winner = checkWinner(grille);
            if (winner) {
                stopTimer();
                highlightWinningCells(winner);
                displayWinner(winner);
                return;
            } else if (checkDraw()) {
                alert("It's a draw!");
                return;
            }

            switchPlayer();
            break;
        }
    }
}

function highlightWinningCells(winner) {
    const nombreLignes = grille.length;
    const nombreColonnes = grille[0].length;

    for (let ligne = 0; ligne < nombreLignes; ligne++) {
        for (let colonne = 0; colonne <= nombreColonnes - 4; colonne++) {
            if (grille[ligne][colonne] === winner &&
                grille[ligne][colonne] === grille[ligne][colonne + 1] &&
                grille[ligne][colonne] === grille[ligne][colonne + 2] &&
                grille[ligne][colonne] === grille[ligne][colonne + 3]) {
                highlightCells([
                    [ligne, colonne],
                    [ligne, colonne + 1],
                    [ligne, colonne + 2],
                    [ligne, colonne + 3]
                ]);
                return;
            }
        }
    }

    for (let colonne = 0; colonne < nombreColonnes; colonne++) {
        for (let ligne = 0; ligne <= nombreLignes - 4; ligne++) {
            if (grille[ligne][colonne] === winner &&
                grille[ligne][colonne] === grille[ligne + 1][colonne] &&
                grille[ligne][colonne] === grille[ligne + 2][colonne] &&
                grille[ligne][colonne] === grille[ligne + 3][colonne]) {
                highlightCells([
                    [ligne, colonne],
                    [ligne + 1, colonne],
                    [ligne + 2, colonne],
                    [ligne + 3, colonne]
                ]);
                return;
            }
        }
    }

    for (let ligne = 0; ligne <= nombreLignes - 4; ligne++) {
        for (let colonne = 0; colonne <= nombreColonnes - 4; colonne++) {
            if (grille[ligne][colonne] === winner &&
                grille[ligne][colonne] === grille[ligne + 1][colonne + 1] &&
                grille[ligne][colonne] === grille[ligne + 2][colonne + 2] &&
                grille[ligne][colonne] === grille[ligne + 3][colonne + 3]) {
                highlightCells([
                    [ligne, colonne],
                    [ligne + 1, colonne + 1],
                    [ligne + 2, colonne + 2],
                    [ligne + 3, colonne + 3]
                ]);
                return;
            }
        }
    }

    for (let ligne = 3; ligne < nombreLignes; ligne++) {
        for (let colonne = 0; colonne <= nombreColonnes - 4; colonne++) {
            if (grille[ligne][colonne] === winner &&
                grille[ligne][colonne] === grille[ligne - 1][colonne + 1] &&
                grille[ligne][colonne] === grille[ligne - 2][colonne + 2] &&
                grille[ligne][colonne] === grille[ligne - 3][colonne + 3]) {
                highlightCells([
                    [ligne, colonne],
                    [ligne - 1, colonne + 1],
                    [ligne - 2, colonne + 2],
                    [ligne - 3, colonne + 3]
                ]);
                return;
            }
        }
    }
}

function highlightCells(cells) {
    for (let i = 0; i < cells.length; i++) {
        const [row, col] = cells[i];
        const column = document.querySelector(`.grid-col[data-col="${col}"]`);
        const cell = column.children[row];
        cell.classList.add("winning-cell");
    }
}

function checkWinner(grille) {
    const nombreLignes = grille.length;
    const nombreColonnes = grille[0].length;

    for (let ligne = 0; ligne < nombreLignes; ligne++) {
        for (let colonne = 0; colonne <= nombreColonnes - 4; colonne++) {
            if (grille[ligne][colonne] !== "" &&
                grille[ligne][colonne] === grille[ligne][colonne + 1] &&
                grille[ligne][colonne] === grille[ligne][colonne + 2] &&
                grille[ligne][colonne] === grille[ligne][colonne + 3]) {
                return grille[ligne][colonne];
            }
        }
    }

    for (let colonne = 0; colonne < nombreColonnes; colonne++) {
        for (let ligne = 0; ligne <= nombreLignes - 4; ligne++) {
            if (grille[ligne][colonne] !== "" &&
                grille[ligne][colonne] === grille[ligne + 1][colonne] &&
                grille[ligne][colonne] === grille[ligne + 2][colonne] &&
                grille[ligne][colonne] === grille[ligne + 3][colonne]) {
                return grille[ligne][colonne];
            }
        }
    }

    for (let ligne = 0; ligne <= nombreLignes - 4; ligne++) {
        for (let colonne = 0; colonne <= nombreColonnes - 4; colonne++) {
            if (grille[ligne][colonne] !== "" &&
                grille[ligne][colonne] === grille[ligne + 1][colonne + 1] &&
                grille[ligne][colonne] === grille[ligne + 2][colonne + 2] &&
                grille[ligne][colonne] === grille[ligne + 3][colonne + 3]) {
                return grille[ligne][colonne];
            }
        }
    }

    for (let ligne = 3; ligne < nombreLignes; ligne++) {
        for (let colonne = 0; colonne <= nombreColonnes - 4; colonne++) {
            if (grille[ligne][colonne] !== "" &&
                grille[ligne][colonne] === grille[ligne - 1][colonne + 1] &&
                grille[ligne][colonne] === grille[ligne - 2][colonne + 2] &&
                grille[ligne][colonne] === grille[ligne - 3][colonne + 3]) {
                return grille[ligne][colonne];
            }
        }
    }

    return "";
}

function checkDraw() {
    for (let r = 0; r < grille.length; r++) {
        for (let c = 0; c < grille[r].length; c++) {
            if (grille[r][c] === "") {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    grille = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ];
    currentPlayer = "red";
    createBoard();
    startTimer();
}

function createBoard() {
    const boardDiv = document.querySelector(".game-board-medium-layer");
    boardDiv.innerHTML = "";

    for (let c = 0; c < 7; c++) {
        const column = document.createElement("div");
        column.className = "grid-col";
        column.dataset.col = c;
        column.addEventListener("click", handleMove);

        for (let r = 0; r < 6; r++) {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            column.appendChild(cell);
        }

        boardDiv.appendChild(column);
    }
}

createBoard();

function displayWinner(winner) {
    timerDisplay.style.display = "none";
    const playerTimeCard = document.getElementById("player-turn");
    playerTimeCard.style.display = "none";

    if (winner === "red") {
        player1Score++;
    } else {
        player2Score++;
    }
    updateScoreDisplay();

    const winnerDisplayer = document.createElement("div");
    winnerDisplayer.classList.add("winner-displayer");

    Object.assign(winnerDisplayer.style, {
        width: "270px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0px",
        borderRadius: "20px",
        border: "solid 3px var(--border-normal)",
        backgroundColor: "var(--color-white)",
        position: "absolute",
        zIndex: "5",
        bottom: "-10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    });

    const playerText = document.createElement("p");
    playerText.classList.add("heading-XS");
    playerText.textContent = winner === "red" ? "PLAYER 1" : "PLAYER 2";

    const winText = document.createElement("p");
    winText.classList.add("heading-L");
    winText.textContent = "WINS";

    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("menus-btn");
    playAgainButton.textContent = "PLAY AGAIN";
    Object.assign(playAgainButton.style, {
        padding: "10px 20px",
        border: "none",
        backgroundColor: "var(--color-purple)",
        color: "white",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "16px",
    });

    playAgainButton.addEventListener("click", () => {
        winnerDisplayer.remove();
        timerDisplay.style.display = "flex";
        playerTimeCard.style.display = "flex";
        backgroundstyle.style.backgroundColor = "var(--color-dark-purple)";

        resetGame();
    });

    winnerDisplayer.appendChild(playerText);
    winnerDisplayer.appendChild(winText);
    winnerDisplayer.appendChild(playAgainButton);

    document.body.appendChild(winnerDisplayer);

    if (winner === "red") {
        backgroundstyle.style.backgroundColor = "var(--color-red)";
    } else {
        backgroundstyle.style.backgroundColor = "var(--color-yellow)";
    }
}

updateScoreDisplay();

document.addEventListener("keydown", handleKeyPress);

let currentColumn = 0;

function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
        moveCursorRight();
    } else if (event.key === "ArrowLeft") {
        moveCursorLeft();
    } else if (event.key === " ") {
        placeToken();
    }
}

function moveCursorRight() {
    if (currentColumn < 6) {
        currentColumn++;
        updateCursorPosition();
    }
}

function moveCursorLeft() {
    if (currentColumn > 0) {
        currentColumn--;
        updateCursorPosition();
    }
}

function updateCursorPosition() {
    const columns = document.querySelectorAll(".grid-col");
    const cursor = document.getElementById("cursor");
    const columnRect = columns[currentColumn].getBoundingClientRect();
    cursor.style.left = `${columnRect.left + window.scrollX}px`;
}

function placeToken() {
    const columns = document.querySelectorAll(".grid-col");
    const column = columns[currentColumn];
    const event = new Event("click", { bubbles: true });
    column.dispatchEvent(event);

}
createBoard();
updateCursorPosition();

function checkWinner(grille) {
    const rows = grille.length;
    const cols = grille[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c <= cols - 4; c++) {
            if (grille[r][c] !== "" &&
                grille[r][c] === grille[r][c + 1] &&
                grille[r][c] === grille[r][c + 2] &&
                grille[r][c] === grille[r][c + 3]) {
                return grille[r][c];
            }
        }
    }

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r <= rows - 4; r++) {
            if (grille[r][c] !== "" &&
                grille[r][c] === grille[r + 1][c] &&
                grille[r][c] === grille[r + 2][c] &&
                grille[r][c] === grille[r + 3][c]) {
                return grille[r][c];
            }
        }
    }

    for (let r = 0; r <= rows - 4; r++) {
        for (let c = 0; c <= cols - 4; c++) {
            if (grille[r][c] !== "" &&
                grille[r][c] === grille[r + 1][c + 1] &&
                grille[r][c] === grille[r + 2][c + 2] &&
                grille[r][c] === grille[r + 3][c + 3]) {
                return grille[r][c];
            }
        }
    }

    for (let r = 3; r < rows; r++) {
        for (let c = 0; c <= cols - 4; c++) {
            if (grille[r][c] !== "" &&
                grille[r][c] === grille[r - 1][c + 1] &&
                grille[r][c] === grille[r - 2][c + 2] &&
                grille[r][c] === grille[r - 3][c + 3]) {
                return grille[r][c];
            }
        }
    }

    return "";
}