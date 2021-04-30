class RomanNumerals {
	/*
	 * toRoman
	 * @param {number} position - an integer greater than -1
	 *
	 * @returns {String}
	 *
	 * @example {0} returns 'I'
	 * @example {5} return 'V'
	 *
	 */
	toRoman(number: number) {
		let rNumeral = "";
		const romanNumerals = [
			"M",
			"CM",
			"D",
			"CD",
			"C",
			"XC",
			"L",
			"XL",
			"X",
			"IX",
			"V",
			"IV",
			"I",
		];
		const arabicDigits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		for (let i = 0; i < arabicDigits.length; i++) {
			while (number >= arabicDigits[i]) {
				rNumeral += romanNumerals[i];
				number -= arabicDigits[i];
			}
		}
		return rNumeral;
	}

	fromRoman(roman: string) {
		let numResult = 0;
		let romanStrings = roman.toLocaleUpperCase();
		const originalString = romanStrings;
		let romanStringsArray: any = romanStrings.split("");

		for (let i = 0; i < romanStringsArray.length; i++) {
			switch (romanStringsArray[i]) {
				case "M":
					romanStringsArray[i] = 1000;
					break;
				case "D":
					romanStringsArray[i] = 500;
					break;
				case "C":
					romanStringsArray[i] = 100;
					break;
				case "L":
					romanStringsArray[i] = 50;
					break;
				case "X":
					romanStringsArray[i] = 10;
					break;
				case "V":
					romanStringsArray[i] = 5;
					break;
				case "I":
					romanStringsArray[i] = 1;
					break;
				default:
					romanStringsArray[i] = 0;
			}
		}

		for (let x = 0; x < romanStringsArray.length; x++) {
			if (romanStringsArray[x + 1] > romanStringsArray[x]) {
				numResult += romanStringsArray[x + 1] - romanStringsArray[x];
				x += 1;
			} else {
				numResult += romanStringsArray[x];
			}
		}

		return numResult;
	}
}

export default new RomanNumerals();
