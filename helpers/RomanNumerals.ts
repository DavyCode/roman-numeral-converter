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
}

export default new RomanNumerals();
