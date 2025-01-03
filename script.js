const gameBoard = (function () {
    const board = Array.from(Array(3), () => Array(3));
    const placeMarker = (row, col, marker) => {
        board[row][col] = marker;
    }

    const displayBoard = () => console.log(board);

    return {board, placeMarker, displayBoard};
})();

function createPlayer(name, marker) {
    return { name, marker };
}

const gameController = (function () {
    const player1 = createPlayer("josh", "X");
    const player2 = createPlayer("timmy", "O");

    let currentPlayer = player1;

    const playTurn = (row, col) => {
        gameBoard.placeMarker(row, col, currentPlayer.marker);
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        gameBoard.displayBoard();
    }
    return { playTurn };
})();

gameController.playTurn(0, 0); 
gameController.playTurn(1, 1);