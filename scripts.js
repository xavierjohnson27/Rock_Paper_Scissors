var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getCompChoice(){
    const choices = ['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if ( letter === 'r') return 'Rock';
    if ( letter === 'p') return 'Paper';
    if ( letter === 's') return 'Scissors';
}

function win(userChoice,compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + ' beats ' + convertToWord(compChoice) + '. You WIN!'
}

function lose(userChoice,compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(compChoice) + ' beats ' + convertToWord(userChoice) + '. You LOSE!'
}

function tie(userChoice,compChoice) {
    result_p.innerHTML = 'TIE!'
}


function game(userChoice){
    const compChoice= getCompChoice();
    switch (userChoice + compChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,compChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,compChoice)
            break;
        case 'ss':
        case 'rr':
        case 'pp':
            tie(userChoice,compChoice)
            break;

      
    
    }

}


function main(){
    rock_div.addEventListener('click',function() {
    game('r');
    })

    paper_div.addEventListener('click', function(){
    game('p');
    })

    scissors_div.addEventListener('click',function() {
    game('s');
    })
}



main();
