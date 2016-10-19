
//Przycisk zainicjowania nowej gry
var newGameBtn = document.getElementById('js-newGameButton'); 

newGameBtn.addEventListener('click', newGame);

//Wybor gracza
var 	pickRock = document.getElementById('js-playerPick_rock'), 
		pickPaper = document.getElementById('js-playerPick_paper'),
		pickScissors = document.getElementById('js-playerPick_scissors'); 
 
pickRock.addEventListener('click', function() { 	playerPick('rock') });
pickPaper.addEventListener('click', function() {	playerPick('paper')});
pickScissors.addEventListener('click', function() { playerPick('scissors') });


//Logika gry
var 	gameState = 'notStarted', //started // ended 
		player = { 
			name: '', 
			score: 0 
		}, 
		computer = { 
			score: 0
		};
		
		// Wyświetlanie elementów gry
var 	newGameBtn = document.getElementById('js-newGameButton'), 
		newGameElem = document.getElementById('js-newGameElement'),
		pickElem = document.getElementById('js-playerPickElement'), 
		resultsElem = document.getElementById('js-resultsTableElement');
		
	//Rozpoczecie gry
var 	playerPointsElem = document.getElementById('js-playerPoints'),
		playerNameElem = document.getElementById('js-playerName'),
		computerPointsElem = document.getElementById('js-computerPoints');
		
	
 //Wybór
var 	playerPickElem = document.getElementById('js-playerPick'),
		computerPickElem = document.getElementById('js-computerPick'),
		playerResultElem = document.getElementById('js-playerResult'),
		computerResultElem = document.getElementById('js-computerResult');
		
function setGameElements() { 
	switch(gameState) { 
		case 'started': 
				newGameElem.style.display = 'none'; 
				pickElem.style.display = 'block'; 
				resultsElem.style.display = 'block'; 
			break; 
		case 'ended': 
				newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted': 
		default: 
			newGameElem.style.display = 'block'; 
			pickElem.style.display = 'none'; 
			resultsElem.style.display = 'none';
	 } 
 }

 
 //losowanie przez komputer
 function getComputerPick() {
	 
	 var possiblePicks = ['rock', 'paper', 'scissors'];
	 return possiblePicks[Math.floor(Math.random()*3)]; 
}


function checkRoundWinner(playerPick, computerPick) { 
	playerResultElem.innerHTML = computerResultElem.innerHTML = ''; 
	
	var winnerIs = 'player'; 
	
		if (playerPick == computerPick) { 
		winnerIs = 'none'; // remis 
		} else if ( 
			(computerPick == 'rock' && playerPick == 'scissors') ||
			(computerPick == 'scissors' && playerPick == 'paper') ||
			(computerPick == 'paper' && playerPick == 'rock') ) {
			 
			 winnerIs = 'computer'; 
		}
		
		 if (winnerIs == 'player') { 
			playerResultElem.innerHTML = "Wygrana!"; 
			player.score++; 
		} else if (winnerIs == 'computer') { 
			computerResultElem.innerHTML = "Wygrana!";
			computer.score++;
		 } 
}

function setGamePoints() {

	playerPointsElem.innerHTML = player.score; 
	computerPointsElem.innerHTML = computer.score; 
}

//funkcja rozpoczynajaca gre, pobiera imie, ustawia 
function newGame() { 

	player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza'); 
	if (player.name) { 
		player.score = computer.score = 0; 
		// Te dwie linijki dodałem po to aby po nacisnieciu przycisku "Jeszcze raz" kosowały sie poprzednie rezultaty, bez tych linjek pozostawały poprzednie wybory
		playerResultElem.innerHTML = computerResultElem.innerHTML = ''; 
		computerPickElem.innerHTML = playerPickElem.innerHTML = '';
		//
		gameState = 'started'; 
		setGameElements(); 
		playerNameElem.innerHTML = player.name;
		setGamePoints(); 
		// tutaj funkcja za usatwianie punktów jest po to aby wynik się zerował przy starcie gry
		
	 } 
 }	
 
 //Funkcja odpowiadajaca za zakonczenie gry i wyswietlenie komunikatu kto wygral
 function end() {
	 
	 if (player.score == 10) {
			gameState = 'ended';
			alert("Wygrał " + player.name);
			setGameElements(); 
	 } else if(computer.score == 10) {
			gameState = 'ended';
			alert("Wygrał komputer");
			setGameElements(); 
	 }
 }
 
 function playerPick(playerPick) {
	
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
	
	 checkRoundWinner(playerPick, computerPick);
	 end();
	//dodałem tutaj funkcej ustawiajaca punkty, zeby punkty byla aktualizowane po akzdym kliknieciu
	 setGamePoints(); 
}