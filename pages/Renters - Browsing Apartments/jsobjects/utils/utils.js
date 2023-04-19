export default {
	async toggleFavorite (id, isChecked) {
		if (isChecked) {
			await Unfavorite_Property.run({"PropertyID": id})
		} else {
			await Favorite_Property.run({"PropertyID": id})
		}
		Get_Properties_Budget_Range.run()
	}
}