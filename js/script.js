/**
 * 
 * L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
 * in cui ogni cella contiene un numero tra quelli compresi in un range:
    
    con difficoltà 1 => tra 1 e 100
    con difficoltà 2 => tra 1 e 81
    con difficoltà 3 => tra 1 e 49
    
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

    Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
    Ad esempio:  di cosa ho bisogno per generare i numeri?
    Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
    Le validazioni e i controlli possiamo farli anche in un secondo momento.
 * 
 */

const grid = document.getElementById('grid');
const gameSelection = document.querySelector('.form-select').value;

const playBtn = document.getElementById('play');

// Click event for play button
playBtn.addEventListener('click', function () {
    grid.innerHTML = ''; 

    if (gameSelection == 'easy') {
        createGrid(100);
    } else if (gameSelection == 'medium') {
        createGrid(81);
    } else if (gameSelection == 'hard') {
        createGrid(49);
    }
});

// Creates new square grid element according to game selection
function createGrid (max) {
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('grid-square');
    

    for (let i = 1; i <= max; i++) {
        const currentSquare = document.createElement('div');
        currentSquare.classList.add('grid-square');
        currentSquare.innerHTML = i;
        grid.appendChild(currentSquare);

        if (max == 100) {
            currentSquare.classList.add('easy');
        } else if (max == 81) {
            currentSquare.classList.add('medium');
        } else {
            currentSquare.classList.add('hard');
        }

        currentSquare.addEventListener('click', function() {
            this.classList.toggle('clicked');
        })
    }
}

