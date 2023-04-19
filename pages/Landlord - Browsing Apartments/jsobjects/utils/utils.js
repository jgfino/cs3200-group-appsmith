export default {
  leaseData: [],
	getDropdownData (data, isLandlord) {
		return data.map((l) => {
			return {
				label: l.FirstName + ' ' + l.LastName,
				value: l.UserID + ',' + l[isLandlord ? "LandlordID" : "RenterID"]
			}
		})
	},
	getLeases (value) {
		if(!value) {
			return []
		}
		const params = value.split(',')
		return Get_Leases.run({"userID": params[0], "landlordID": params[1]})			
	},
	splitValue (value) {
		return value.split(',')		
	},
	formatDate (date) {
		return new Date(date).toDateString()
	},
	async deleteLease (propertyID, leaseID, currentLandlord) {
		await Delete_Lease.run({"propertyID": propertyID, "leaseID": leaseID})
		this.getLeases(currentLandlord)
	},
	async onLoad() {
		this.getLeases()
	}
}