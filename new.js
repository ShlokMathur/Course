// RESTART GAME
var restart = document.querySelector("#b");

// GRAB ALL THE SQUARES
var squares = document.querySelectorAll('td');

// CLEAR ALL SQUARES
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);

// CHECK THE SQUARE MARKER
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }

    // Check for a winner after every move
    if (checkForWinner()) {
        alert("We have a winner!");
        clearBoard();
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}


