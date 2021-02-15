const cases = document.querySelectorAll('.case')
let turn = 0

function whoIsNext() {
    turn++
    return turn % 2 === 0 ? 'O' : 'X'
}
// console.log(whoIsNext());

function play() {
    if (!this.innerHTML) this.innerHTML = whoIsNext()
    this.classList.add("caseBis")
    weHaveAWinner()
}

function weHaveAWinner() {
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        whoIsTheWinner (cases[0].innerHTML)
    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML){
        whoIsTheWinner (cases[3].innerHTML)    
    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML){
        whoIsTheWinner (cases[6].innerHTML)
    } else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML){
        whoIsTheWinner (cases[0].innerHTML)
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML){
        whoIsTheWinner (cases[2].innerHTML)
    } else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML){
        whoIsTheWinner (cases[0].innerHTML)
    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML){
        whoIsTheWinner (cases[1].innerHTML)
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML){
        whoIsTheWinner (cases[2].innerHTML)
    } 
}

function whoIsTheWinner (winner) {
    alert (`${winner} is the WINNNNNNNNER!`)
    cases.forEach(element => element.innerHTML = '')
    cases.forEach(element => element.classList.remove('caseBis'))
}

cases.forEach(element => element.addEventListener('click', play))