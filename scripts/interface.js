document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi " + symbols[playerTime])
        }, 10);

        if (playerTime == 0) {
            document.getElementById("p1").innerHTML = '';
        }else{
            document.getElementById("p2").innerHTML = '';
        }

        document.getElementById("reiniciar").style.visibility = "visible";
        document.getElementById("reiniciar").style.display = "inline-block";
    };

    if (draw()) {
        setTimeout(() => {
            alert("O jogo empatou!")
        }, 10);

        playerTime = (playerTime == 0) ? 1 : 0;

        document.getElementById("reiniciar").style.visibility = "visible";
        document.getElementById("reiniciar").style.display = "inline-block";
    }
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'><\div>`;
}

function resetGame() {

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = (playerTime == 0) ? 1 : 0;
    gameOver = false;

    updateSquares();

    document.getElementById("reiniciar").style.visibility = "hidden";
    document.getElementById("reiniciar").style.display = "none";


    function updateSquares() {

        let symbol = document.querySelectorAll(".O, .X");

        for (i = 0; i < symbol.length; i++) {
            symbol[i].remove();
        }

    }

}

