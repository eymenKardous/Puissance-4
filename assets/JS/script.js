let isPlaying = true
let player = document.querySelector('#player')
player.innerHTML = "1"
let turn = 1
let winner = document.querySelector('#winner').innerText
let cell = document.querySelectorAll('.cell')
let grid = document.querySelector('#grid')
let whoplay = document.querySelector("#whoPlay")

function checkWin() {
    let tableGame = [...document.getElementsByClassName('cell')]

    for (let i = 0; i < tableGame.length - 1; i++) {
        if (
            (
                tableGame[i].style.backgroundColor == 'khaki' &&
                tableGame[i + 1] &&
                tableGame[i + 1].style.backgroundColor == 'khaki' &&
                tableGame[i + 2] &&
                tableGame[i + 2].style.backgroundColor == 'khaki' &&
                tableGame[i + 3] &&
                tableGame[i + 3].style.backgroundColor == 'khaki'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'khaki' &&
                tableGame[i + 6] &&
                tableGame[i + 6].style.backgroundColor == 'khaki' &&
                tableGame[i + 12] &&
                tableGame[i + 12].style.backgroundColor == 'khaki' &&
                tableGame[i + 18] &&
                tableGame[i + 18].style.backgroundColor == 'khaki'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'khaki' &&
                tableGame[i + 7] &&
                tableGame[i + 7].style.backgroundColor == 'khaki' &&
                tableGame[i + 14] &&
                tableGame[i + 14].style.backgroundColor == 'khaki' &&
                tableGame[i + 21] &&
                tableGame[i + 21].style.backgroundColor == 'khaki'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'khaki' &&
                tableGame[i + 5] &&
                tableGame[i + 5].style.backgroundColor == 'khaki' &&
                tableGame[i + 10] &&
                tableGame[i + 10].style.backgroundColor == 'khaki' &&
                tableGame[i + 15] &&
                tableGame[i + 15].style.backgroundColor == 'khaki'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'khaki' &&
                tableGame[i + 5] &&
                tableGame[i + 5].style.backgroundColor == 'khaki' &&
                tableGame[i + 10] &&
                tableGame[i + 10].style.backgroundColor == 'khaki' &&
                tableGame[i + 15] &&
                tableGame[i + 15].style.backgroundColor == 'khaki'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'khaki' &&
                tableGame[i - 7] &&
                tableGame[i - 7].style.backgroundColor == 'khaki' &&
                tableGame[i - 14] &&
                tableGame[i - 14].style.backgroundColor == 'khaki' &&
                tableGame[i - 21] &&
                tableGame[i - 21].style.backgroundColor == 'khaki'
            )
        ) {
            let winner = document.querySelector('#winner')
            winner.innerHTML = "Joueur 1"
            let audio = new Audio('/assets/tiepasbon.mp3');
            audio.play();

            
            return true
        }

        else if (
            (
                tableGame[i].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 1] &&
                tableGame[i + 1].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 2] &&
                tableGame[i + 2].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 3] &&
                tableGame[i + 3].style.backgroundColor == 'paleturquoise'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 6] &&
                tableGame[i + 6].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 12] &&
                tableGame[i + 12].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 18] &&
                tableGame[i + 18].style.backgroundColor == 'paleturquoise'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 7] &&
                tableGame[i + 7].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 14] &&
                tableGame[i + 14].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 21] &&
                tableGame[i + 21].style.backgroundColor == 'paleturquoise'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 5] &&
                tableGame[i + 5].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 10] &&
                tableGame[i + 10].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 15] &&
                tableGame[i + 15].style.backgroundColor == 'paleturquoise'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 5] &&
                tableGame[i + 5].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 10] &&
                tableGame[i + 10].style.backgroundColor == 'paleturquoise' &&
                tableGame[i + 15] &&
                tableGame[i + 15].style.backgroundColor == 'paleturquoise'
            )
            ||
            (
                tableGame[i].style.backgroundColor == 'paleturquoise' &&
                tableGame[i - 7] &&
                tableGame[i - 7].style.backgroundColor == 'paleturquoise' &&
                tableGame[i - 14] &&
                tableGame[i - 14].style.backgroundColor == 'paleturquoise' &&
                tableGame[i - 21] &&
                tableGame[i - 21].style.backgroundColor == 'paleturquoise'
            )
        ) {
            let winner = document.querySelector('#winner')
            winner.innerHTML = "Joueur 2";
            let audio = new Audio('/assets/1again.mp3');
            audio.play();

            return true
        }

        else {
            winner.innerHTML = "Match nul";
        }
    }
    let audio = new Audio('/assets/voila.mp3');
            audio.play();
}

function color(event) {

    whoPlay()
    let col = event.querySelectorAll('.cell');
    for (let i = col.length - 1; i >= 0; i--) {
        if (col[i].style.backgroundColor != 'khaki' && col[i].style.backgroundColor != 'paleturquoise') {
            if (turn % 2 == 0) {
                col[i].style.backgroundColor = 'paleturquoise'
            } else {
                col[i].style.backgroundColor = 'khaki'
            }
            turn++

            grid.style.display = checkWin() ? "none" : "flex"
            whoplay.style.display = checkWin() ? "none" : "block"
            

            break
        }
    }
}

function whoPlay() {

    if (turn % 2 == 0) {
        player.innerHTML = "1"
    } else {
        player.innerHTML = "2"
    }
}

function restart() {
    let button = document.querySelector('#restart').innerHTML
    let cell = document.querySelectorAll('.cell')
    grid.style.display = "flex"
    whoplay.style.display = "block"
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = ''
        let winner = document.querySelector('#winner')
    }
}