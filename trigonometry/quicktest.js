var answer_keys = {'sin30': '1/2', 'sin45': '√2/2', 'sin60': '√3/2', 'cos30': '√3/2', 'cos45': '√2/2', 'cos60': '1/2', 'tg30': '√3/3', 'tg45': '1', 'tg60': '√3', 'ctg30': '√3', 'ctg45': '1', 'ctg60': '√3/3'};

function randint(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max) + 1;
	return Math.floor(Math.random() * (max - min)) + min;
}

var text = document.getElementById("main_text");
text.innerHTML = "main_text";

var highscore = document.getElementById("highscore_text");
highscore.textContent = "Highscore: 0";
var highscore_count = 0;

var score = document.getElementById("score_text");
score.textContent = "Score: 0";
var score_count = 0;

var btns = [];

for (let i = 1; i <= 4; i++) {
	let button = new Button(i);
	btns.push(button);
}

var previous = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
var answer = randomize()[1];

reset_answer(answer);

function randomize() {
	let btn_answers = []

	let face = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
	while (face == previous){
		face = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
	}
	previous = face;

	let answer = answer_keys[face];
	btn_answers.push(answer);

	reset_answer(answer);

	let result = null;

	for (let i = 0; i < 3; i++) {
		let temp = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
		result = answer_keys[temp];

		while (btn_answers.includes(result)){
			temp = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
			result = answer_keys[temp];
		}
		btn_answers.push(result);
	}

	let da_numba = randint(0, 3);
	if (da_numba != 0){
		let temp = btn_answers[da_numba];
		btn_answers[da_numba] = btn_answers[0];
		btn_answers[0] = temp;
	}

	text.textContent = face
	for (let i = 0; i < 4; i++){
		btns[i].nullify(btns[i], btn_answers[i]); 
	}

	return [face, answer, btn_answers]
}

function update_score(change){
	score_count += change;
	score.textContent = "Score: " + score_count;

	if (highscore_count < score_count) {
		highscore_count = score_count;
	}
	highscore.textContent = "Highscore: " + highscore_count;
}

function reset_answer(ans){
	for (let i = 0; i < 4; i++) {
		btns[i].answer = ans;
	}
}

function restart_game(){
	score_count = 0;
	update_score(0);

	disable_overlay();

	randomize();
}

function enable_overlay(){
	document.getElementById("overlay").style.display = "block";
}

function disable_overlay(){
	document.getElementById("overlay").style.display = "none";
}