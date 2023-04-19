export default {
	formatDate (date) {
		return new Date(date).toDateString()
	},
	numToBool (num) {
		return num === 0 ? "No" : "Yes"
	},
}