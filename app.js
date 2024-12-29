let legalSquares = [];

const boardSquares = document.querySelector(".square");
const pieces = document.querySelector(".pieces");

const piecesImages = document.querySelector("img");

setupBoardSquares();
function setupBoardSquares () {
    for (let i=0; i < boardSquares.clientHeight; i++) {
        boardSquares[i].addEventListener("dragover", allowDrop);
        boardSquares[i].addEventListener("drop", drop);
        let row = 8 - Math.floor(i/8);
        let column = String.fromCharCode (97+(i%8));
        let square = boardSquares[i];
        square.id = column + row;
    }
}

function setupPieces () {
    for (let i = 0; i < pieces.length; i++) {
        pieces[i].addEventListener("dragstart", allowDrop);
        pieces[i].setAttribute("draggable", true);
        pieces[i].id = pieces[i].className.split(" ")[1]+pieces[i].parentElement.id;
    }
}
