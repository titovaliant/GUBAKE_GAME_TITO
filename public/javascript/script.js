const result_p = document.querySelector(".result > p");
const kotak_hijau = document.getElementById("kotak_hijau");
const refresh = document.getElementById("refreshing");
const player_batu = document.getElementById("p_batu");
const player_kertas = document.getElementById("p_kertas");
const player_gunting = document.getElementById("p_gunting");
const com_batu = document.getElementById("com_batu");
const com_kertas = document.getElementById("com_kertas");
const com_gunting = document.getElementById("com_gunting");

function getComputerChoice() {
	const choices = ['com_batu', 'com_kertas', 'com_gunting'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function player_win() {
	// result_p.innerHTML = "PLAYER 1 WIN";
	kotak_hijau.style.display = 'block';
	kotak_hijau.innerHTML = "Player 1 Win";
	result_p.style.display = 'none';
}

function com_win() {
	// result_p.innerHTML = "COM WIN";
	kotak_hijau.style.display = "block";
	kotak_hijau.innerHTML = "COM Win";
	result_p.style.display = 'none';
}

function draw() {
	// result_p.innerHTML = "DRAW";
	kotak_hijau.style.display = "block";
	kotak_hijau.innerHTML = "DRAW";
	result_p.style.display = 'none';
}

function game(playerChoice) {
	const computerChoice = getComputerChoice();
	console.log("player => " + playerChoice);
	console.log("computer => " + computerChoice);

	if(playerChoice == 'p_batu')	{
		player_batu.style.background = 'lightgrey'
		player_kertas.style.background = 'none';
		player_gunting.style.background = 'none';
	}

	if(playerChoice == 'p_kertas')	{
		player_kertas.style.background = 'lightgrey'
		player_batu	.style.background = 'none';
		player_gunting.style.background = 'none';
	}

	if(playerChoice == 'p_gunting')	{
		player_gunting.style.background = 'lightgrey'
		player_kertas.style.background = 'none';
		player_batu.style.background = 'none';
	}

	if(computerChoice == 'com_kertas')	{
		com_kertas.style.background = 'lightgrey'
		com_gunting.style.background = 'none';
		com_batu.style.background = 'none';
	}

	if(computerChoice == 'com_batu')	{
		com_batu.style.background = 'lightgrey'
		com_gunting.style.background = 'none';
		com_kertas.style.background = 'none';
	}

	if(computerChoice == 'com_gunting')	{
		com_gunting.style.background = 'lightgrey'
		com_kertas.style.background = 'none';
		com_batu.style.background = 'none';
	}

	switch (playerChoice + '=' + computerChoice) 
	{
		case "p_batu=com_gunting":
		case "p_kertas=com_batu":
		case "p_gunting=com_kertas":
			console.log("PLAYER 1 WINS!!!!!!");
			player_win();
			break;
		case "p_batu=com_kertas":
		case "p_kertas=com_gunting":
		case "p_gunting=com_batu":
			console.log("COM WIN!!!!!!");
			com_win();
			break;
		case "p_batu=com_batu":
		case "p_kertas=com_kertas":
		case "p_gunting=com_gunting":
			console.log("DRAW!!!!!!");
			draw();
			break;
	}
}


function main() {
	player_batu.addEventListener('click', function() {
	game('p_batu');
})
	player_kertas.addEventListener('click', function() {
	game('p_kertas');	
})
	player_gunting.addEventListener('click', function() {
	game('p_gunting');	
})
	refresh.addEventListener('click', function reloadThePage(){
    window.location.reload();
});	
}

main();