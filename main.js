let pages = [];
let buttons = [];
let titles = [
	"Тренажёр по геометрии",
	"Список тестов",
	"Changelog",
	"Об авторе"
];
let title = document.getElementById('title');
let tabname = document.getElementById('tabname');

for (let i = 1; i <= 4; i++){
	let page = document.getElementById(i);
	pages.push(page);
	// console.log(pages[i - 1])

	let btn = document.getElementById(i + "btn");
	let n = i;
	btn.addEventListener('click', function () {
		show(n - 1);
	});
	buttons.push(btn);
	if (i != 1){
		btn.classList.add("button");
	}
	else {
		btn.classList.add("selected_button");
	}
	// console.log(btn)
}

function show(n) {
	for (let i = pages.length - 1; i >= 0; i--) {
		// console.log(pages[i]);
		pages[i].style.display = 'none';
		buttons[i].classList.remove("selected_button");
		buttons[i].classList.add("button");
	}

	pages[n].style.display = 'block';
	title.textContent = titles[n];
	// tabname.textContent = titles[n];
	buttons[n].classList.add("selected_button");

	// console.log('opened page ' + n);
}
