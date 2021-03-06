/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

init();

// Click button Roll Dice
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
        // 1.Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice + '.png';
        // 3. Update the round score
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //next player
            nextPlayer();
        }
    }
});

// Click button HOLD
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (gamePlaying) {
        // Add Current score to Global Score
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        // Undefined, 0, null or "" are CORECED to FALSE
        // Anything else is COERCED true
        if(input){
            winningScore = input;
        } else {
            winningScore = 100;
        } 
        //Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.getElementById('dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // Ustawienie zmiennej na false aby przyciski nie działały
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

// Funkcja zmieniąjaca aktywnego gracza
function nextPlayer() {
    
    //Zmiana aktywnego plaera na przeciwny
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Wyzerowanie wartosci current
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // parametr toggle dodaje klase jesli jej nie ma, a jesli jest to ja usuwa
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // Wyłączenie widoku kostki
    document.getElementById('dice-1').style.display = 'none';
}

// Click button NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

// funkcja zerująca wszytskie zmienne, czyszcząca wszystko
// rozpoczęcie nowej gry
function init() {
    
    //wyzerowanie wszytskich wyników
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    // Włączenie przycisków roll i hold
    gamePlaying = true;
     // Wyłączenie widoku kostki
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    //Wyzerowanie wszytskich wyników
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //zmiana nazw użytkowników na startowe
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //usuniecie klasy active i winner
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //ustawieni klasy active dla player 1
    document.querySelector('.player-0-panel').classList.add('active');

}


// Przykłady jak możemy dodawać sam text (textContnet) lub text razem ze struktura HTML  (innerHTML)
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




















