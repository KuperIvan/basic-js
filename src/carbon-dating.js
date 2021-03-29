const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

	if (typeof sampleActivity !== 'string' || !parseFloat(sampleActivity) || (sampleActivity <= 0 || sampleActivity >= 15) || sampleActivity === Infinity ) return false;

		let numSample = parseFloat(sampleActivity);

	let upper = Math.log(MODERN_ACTIVITY / numSample)
	let lower = (0.693 / HALF_LIFE_PERIOD);
	return Math.ceil(result = upper / lower);
};
