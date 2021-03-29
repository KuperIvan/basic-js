const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let newArray = []

	if (Array.isArray(members)) {
		for (let i = 0; i < members.length; i++) {
			if (typeof members[i] == 'string') {
				newArray.push((members[i].trim().charAt(0).toUpperCase()))
			}
		}
		return newArray.sort().join('')
	} 
	return false;
}
	
	

