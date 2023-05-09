const options = [
    "rock",
    "paper",
    "scissors"
];

const optionsLS = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
];

export function rps(playerChoice) {
    const opponentChoice = options[ Math.floor(Math.random() * 3)];
    if (!options.includes(playerChoice)) {
        console.error('${playerChoice} is not a valid choice! Please try again!')
        rules();
        h();
        return;
    }
    if(playerChoice == "null") {
		return { player: opponent };
    }
    var finalResult = winChecker(playerChoice, opponentChoice);
    return { 
        player: playerChoice, 
        opponent: opponentChoice, 
        result: finalResult 
    };
}

export function rpsls(playerChoice) {
    const opponentChoice = optionsLS[ Math.floor(Math.random() * 5)];
    if (!optionsLS.includes(playerChoice)) {
        console.error('${playerChoice} is not a valid choice! Please try again!')
        rulesLS();
        hLS();
        return;
    }
    if(playerChoice == "null"){
		return { player: opponent };
    }
    var finalResult = winChecker(playerChoice, opponentChoice);
    return { 
        player: playerChoice, 
        opponent: opponentChoice, 
        result: finalResult 
    };
}

function winChecker(inputLC, opponent){
    if (inputLC == opponent) var finalResult = 'tie';
	if (inputLC == 'paper' && opponent == 'scissors') var finalResult = 'lose';
	if (inputLC == 'paper' && opponent == 'rock') var finalResult = 'win';
	if (inputLC == 'paper' && opponent == 'lizard') var finalResult = 'lose';
	if (inputLC == 'paper' && opponent == 'spock') var finalResult = 'win';
	if (inputLC == 'scissors' && opponent == 'rock') var finalResult = 'lose';
	if (inputLC == 'scissors' && opponent == 'paper') var finalResult = 'win';	
	if (inputLC == 'scissors' && opponent == 'lizard') var finalResult = 'win';
	if (inputLC == 'scissors' && opponent == 'spock') var finalResult = 'lose';
	if (inputLC == 'rock' && opponent == 'paper') var finalResult = 'lose';
	if (inputLC == 'rock' && opponent == 'scissors') var finalResult = 'win';
	if (inputLC == 'rock' && opponent == 'lizard') var finalResult = 'win';
	if (inputLC == 'rock' && opponent == 'spock') var finalResult = 'lose';
	if (inputLC == 'lizard' && opponent == 'paper') var finalResult = 'win';
	if (inputLC == 'lizard' && opponent == 'scissors') var finalResult = 'lose';
	if (inputLC == 'lizard' && opponent == 'spock') var finalResult = 'win';
	if (inputLC == 'lizard' && opponent == 'rock') var finalResult = 'lose';
	if (inputLC == 'spock' && opponent == 'rock') var finalResult = 'win';
	if (inputLC == 'spock' && opponent == 'paper') var finalResult = 'lose';
	if (inputLC == 'spock' && opponent == 'scissors') var finalResult = 'win';
	if (inputLC == 'spock' && opponent == 'lizard') var finalResult = 'lose';

	return finalResult;
}


export function rules() {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    return;
}

export function rulesLS() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`);
    return;
}

export function h() {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    return;
}

export function hLS() {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
    return;
}