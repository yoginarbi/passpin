function generateRandomPassword() {
	const getPassword = document.getElementById("genPassword");
	const errorElement = document.getElementById("error1");
	const length = parseInt(getPassword.value, 10);

	// Clear previous error message
	errorElement.textContent = "";

	// Validate input
	if (isNaN(length) || length <= 0) {
		errorElement.textContent = "Please enter a valid positive number for length.";
		document.getElementById("password").textContent = "-";
		return;
	}

	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}

	document.getElementById("password").textContent = password;
}

function generateRandomPin() {
	const getPin = document.getElementById("genPin");
	const errorElement = document.getElementById("error2");
	const length = parseInt(getPin.value, 10);

	// Clear previous error message
	errorElement.textContent = "";

	// Validate input
	if (isNaN(length) || length <= 0) {
		errorElement.textContent = "Please enter a valid positive number for length.";
		document.getElementById("pin").textContent = "-";
		return;
	}

	const characters = "1234567890";
	let pin = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		pin += characters[randomIndex];
	}

	document.getElementById("pin").textContent = pin;
}
