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
	let anskey_set = decodeURI(temp[1]);

	if (anskey_set == 'undefined'){
		return "9grade"
	} else{
		return anskey_set
	}
}

function return_anskey_set(ansks_name){
	return anskey_sets[ansks_name]
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function updateCHighscore(highscore_updated, ansks_name) {
	setCookie(ansks_name, highscore_updated, 365);
}