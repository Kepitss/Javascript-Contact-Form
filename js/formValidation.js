const formBtn = document.getElementById("my-form-button"); // Form button

formBtn.addEventListener("click", (e) => {
	// Variables
	// Username input
	const username = document.getElementById("username");
	const usernameErrorMsg = document.getElementById("username-error-msg");
	// Email input
	const email = document.getElementById("email");
	const emailErrorMsg = document.getElementById("email-error-msg");
	// Message input
	const message = document.getElementById("message");
	const messageErrorMsg = document.getElementById("message-error-msg");

	// Username input
	if (testTextInput(username)) {
		e.preventDefault();
		username.classList.add("error");
		usernameErrorMsg.innerHTML = "Lietotājvārds var saturēt tikai angļu burtus un ciparus!";
	} else if (username.value.length < 8) {
		e.preventDefault();
		username.classList.add("error");
		usernameErrorMsg.innerHTML = "Lietotājvārdam ir jabūt vismaz 8 burtus garam!";
	} else {
		username.classList.remove("error");
		usernameErrorMsg.innerHTML = "";
	}

	// Email input
	if (email.value === "") {
		e.preventDefault();
		email.classList.add("error");
		emailErrorMsg.innerHTML = "Šis lauks nevar palikt tukšs!";
	} else if (!isEmail(email.value)) {
		e.preventDefault();
		email.classList.add("error");
		emailErrorMsg.innerHTML = "E-pasta adresei ir jabūt pareizā formātā!";
	} else {
		email.classList.remove("error");
		emailErrorMsg.innerHTML = "";
	}

	// Message input
	if (checkTextarea(message.value)) {
		e.preventDefault();
		message.classList.add("error");
		messageErrorMsg.innerHTML = "Ziņa drīkst tikai saturēt burtus un ciparus!";
	} else if (message.value.length <= 8) {
		e.preventDefault();
		message.classList.add("error");
		messageErrorMsg.innerHTML = "Ziņai ir jabūt vismaz 8 burtus garai!";
	} else {
		message.classList.remove("error");
		messageErrorMsg.innerHTML = "";
	}
});

// For checking username
function testTextInput(textInput) {
	return /[^\w]/.test(textInput.value);
}

// For checking email
function isEmail(string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string);
}

// For checking email, textarea
const checkTextarea = function (string) {
	const specialChars = "<>#$%^&*()_+[]{}:;|'\"\\/~`-=";

	for (i = 0; i < specialChars.length; i++) {
		if (string.indexOf(specialChars[i]) > -1) {
			return true;
		}
	}
	return false;
};
