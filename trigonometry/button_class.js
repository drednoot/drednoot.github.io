class Button{
	constructor(id){
		this.that_constructor(this, id);
	}

	that_constructor(that, id){
		that.id = "btn" + id;
		that.button = document.getElementById(that.id);
	
		that.value;
		that.answer;
		that.answered = false;
		that.button.addEventListener("click", function(){that.callback(that);});

		return that
	}

	change_answered_true(that){
		that.answered = true;

		document.getElementById(that.id).classList.add("red_button");

		if (highscore_count < score_count) {
			highscore_count = score_count;
		}

		// changing overlay text
		document.getElementById("right_ans").textContent = "Правильный ответ: \\(\\)" + that.answer;
		document.getElementById("score").textContent = "Ваш счёт: " + score_count;
		document.getElementById("highscore").textContent = "Лучший результат: " + highscore_count;

		enable_overlay();

		return that
	}

	nullify(that, value){
		that.answered = false;

		if ( document.getElementById(that.id).classList.contains("red_button") )
			document.getElementById(that.id).classList.remove("red_button");
		document.getElementById(that.id).classList.add("button");

		that.value = value;
		that.button.textContent = that.value;

		new_typeset();

		return that
	}

	callback(that){
	if (that.value == that.answer) {
		randomize()[1];
		update_score(1);
		doc_body.classList.remove("green_body");
		void doc_body.offsetWidth;
		doc_body.classList.add("green_body");

	} else if (that.answered) {
	} else {
		that.change_answered_true(that);
	}

	return that
	}
}