var answer_keys = {'sin30': '1/2', 'sin45': '√2/2', 'sin60': '√3/2', 'cos30': '√3/2', 'cos45': '√2/2', 'cos60': '1/2', 'tg30': '√3/3', 'tg45': '1', 'tg60': '√3', 'ctg30': '√3', 'ctg45': '1', 'ctg60': '√3/3'};

function randint(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max) + 1;
	return Math.floor(Math.random() * (max - min)) + min;
}

var text = document.getElementById("main_text");
text.innerHTML = "main_text";

var score = document.getElementById("score_text");
score.textContent = "Score: 0";
var score_count = 0;

var btns = [];

for (let i = 1; i <= 4; i++) {
	button = document.getElementById("btn" + i);
	btns.push(button);
	btns[i - 1].addEventListener("click", function() { callback(btns[i - 1]); } );
}

var previous = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
var answer = randomize()[1];

function callback(instance){
	if (instance.value == answer) {
		score_count += 1;
		score.textContent = "Score: " + score_count;
		answer = randomize()[1];
	} else if (instance.style.background == "#B00000") {}
	else {
		score_count -= 1;
		score.textContent = 'Score: ' + score_count;
		instance.style.background = "#B00000";
	}
}

function randomize() {
	let btn_answers = []

	let face = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
	while (face == previous){
		face = Object.keys(answer_keys)[randint(0, Object.keys(answer_keys).length - 1)];
	}
	previous = face;

	let answer = answer_keys[face];
	btn_answers.push(answer);

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
		btns[i].value = btn_answers[i];
		btns[i].style.background = "#5A5A5A";
	}

	return [face, answer, btn_answers]
}