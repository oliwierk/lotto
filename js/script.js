let userNumbers = [];
let randNumbers = [];
let matchNumbers = [];

const userNumbersField = document.querySelector(".userNumbersField");
const randNumbersField = document.querySelector(".randNumbersField");
const matchNumbersField = document.querySelector(".matchNumbersField");

const submitBtn = document.querySelector(".submitBtn");

const randomNumbersGenerator = () => {
	for (let i = 0; i < 6; i++) {
		let randNumber = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
		randNumbers.push(randNumber);
	}
	let randNumbersString = "";
	for (let i = 0; i < randNumbers.length; i++) {
		randNumbersString += randNumbers[i] + ", ";
	}
	randNumbersField.textContent = randNumbersString;
};
const submitUserNumbers = () => {
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

	userNumbers.push(
		userFirstNumber,
		userSecondNumber,
		userThirdNumber,
		userFourthNumber,
		userFifthNumber,
		userSixthNumber
	);
	let userNumbersString = "";
	for (let i = 0; i < userNumbers.length; i++) {
		userNumbersString += userNumbers[i] + ", ";
	}
	userNumbersField.textContent = userNumbersString;
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
	matchNumbersField.textContent = matchNumbersString;
};
const functionsHandler = () => {
	userNumbers = [];
	randNumbers = [];
	matchNumbers = [];
	randomNumbersGenerator();
	submitUserNumbers();
	matchNumberCheck();
};
submitBtn.addEventListener("click", functionsHandler);
