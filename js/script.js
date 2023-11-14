let validHandler = false;
let userNumbers = [];
let randNumbers = [];
let matchNumbers = [];

const userNumbersField = document.querySelector(".userNumbersField");
const randNumbersField = document.querySelector(".randNumbersField");
const matchNumbersField = document.querySelector(".matchNumbersField");

const submitBtn = document.querySelector(".submitBtn");

const submitUserNumbers = () => {
	userNumbers = [];
	const userFirstNumber = parseFloat(
		document.querySelector(".firstNumber").value
	);
	const userSecondNumber = parseFloat(
		document.querySelector(".secondNumber").value
	);
	const userThirdNumber = parseFloat(
		document.querySelector(".thirdNumber").value
	);
	const userFourthNumber = parseFloat(
		document.querySelector(".fourthNumber").value
	);
	const userFifthNumber = parseFloat(
		document.querySelector(".fifthNumber").value
	);
	const userSixthNumber = parseFloat(
		document.querySelector(".sixthNumber").value
	);
	if (
		!userFirstNumber ||
		!userSecondNumber ||
		!userThirdNumber ||
		!userFourthNumber ||
		!userFifthNumber ||
		!userSixthNumber
	) {
		alert("Proszę podać 6 liczb.");
		validHandler = true;
		return;
	}

	if (userFirstNumber < 1 || userFirstNumber > 49) {
		alert("Proszę podać liczbę z zakresu 1 - 49");
		validHandler = true;
		return;
	} else userNumbers.push(userFirstNumber);
	if (userSecondNumber < 1 || userSecondNumber > 49) {
		alert("Proszę podać liczbę z zakresu 1 - 49");
		validHandler = true;
		return;
	} else userNumbers.push(userSecondNumber);
	if (userThirdNumber < 1 || userThirdNumber > 49) {
		alert("Proszę podać liczbę z zakresu 1 - 49");
		validHandler = true;
		return;
	} else userNumbers.push(userThirdNumber);
	if (userFourthNumber < 1 || userFourthNumber > 49) {
		alert("Proszę podać liczbę z zakresu 1 - 49");
		validHandler = true;
		return;
	} else userNumbers.push(userFourthNumber);
	if (userFifthNumber < 1 || userFifthNumber > 49) {
		alert("Proszę podać liczbę z zakresu 1 - 49");
		validHandler = true;
		return;
	} else userNumbers.push(userFifthNumber);
	if (userSixthNumber < 1 || userSixthNumber > 49) {
		alert("Proszę podać liczbę z zakresu 1 - 49");
		validHandler = true;
		return;
	} else userNumbers.push(userSixthNumber);

	for (let i = 0; i < userNumbers.length; i++) {
		for (let j = i + 1; j < userNumbers.length; j++) {
			if (userNumbers[i] === userNumbers[j]) {
				alert("Proszę podać różne liczby. Powtórzenia nie są dozwolone.");
				validHandler = true;
				return;
			}
		}
	}
	let userNumbersString = "";
	for (let i = 0; i < userNumbers.length; i++) {
		userNumbersString += userNumbers[i] + ", ";
	}
	userNumbersField.textContent = `Twoje liczby to: ${userNumbersString}`;
	validHandler = false;
};

const randomNumbersGenerator = () => {
	for (let i = 0; i < 6; i++) {
		let randNumber = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
		randNumbers.push(randNumber);
	}
	let randNumbersString = "";
	for (let i = 0; i < randNumbers.length; i++) {
		randNumbersString += randNumbers[i] + ", ";
	}
	randNumbersField.textContent = `Wylosowane liczby to: ${randNumbersString}`;
};

const matchNumberCheck = () => {
	for (let i = 0; i < userNumbers.length; i++) {
		for (let j = 0; j < randNumbers.length; j++) {
			if (userNumbers[i] === randNumbers[j]) {
				if (!matchNumbers.includes(userNumbers[i])) {
					matchNumbers.push(userNumbers[i]);
				}
			}
		}
	}
	let matchNumbersString = "";
	for (let i = 0; i < matchNumbers.length; i++) {
		matchNumbersString += matchNumbers[i] + ", ";
	}
	matchNumbersField.textContent = `Trafiłeś nr: ${matchNumbersString}`;
};
const functionsHandler = () => {
	userNumbers = [];
	randNumbers = [];
	matchNumbers = [];
	randomNumbersGenerator();
	submitUserNumbers();
	matchNumberCheck();
};

document.getElementById("curtainBtn").addEventListener("click", function () {
	document.querySelector(".curtain").classList.add("open");
});

submitBtn.addEventListener("click", function () {
	validHandler = true;
	submitUserNumbers();

	if (!validHandler) {
		functionsHandler();
	} else {
		console.log("Coś poszło nie tak!");
	}
});
