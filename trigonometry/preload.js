let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



function handle_params()
{
	let parameters = location.search.substring(1).split("&");

	let temp = parameters[0].split("=");
	anskey_set = decodeURI(temp[1]);

	if (anskey_sets[anskey_set]){
		return anskey_sets[anskey_set]
	} else{
		return ninth_grade
	}
}