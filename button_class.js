class Button{
	constructor(id){
		this.that_constructor(this, id);
	}

	that_constructor(that, id){
		that.id = "btn" + id
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

		return that
	}

	nullify(that, value){
		that.answered = false;

		if ( document.getElementById(that.id).classList.contains("red_button") )
			document.getElementById(that.id).classList.remove("red_button");
		document.getElementById(that.id).classList.add("button");

		that.value = value
		that.button.value = that.value

		return that
	}

	callback(that){
	if (that.value == that.answer) {
		randomize()[1];
		update_score(1);
	} else if (that.answered) {
	} else {
		that.change_answered_true(that);
		update_score(-1);
	}

	return that
}
}