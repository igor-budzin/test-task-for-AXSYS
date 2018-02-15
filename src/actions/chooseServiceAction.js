export default function chooseServiceAction(serviceId) {
	return {
		type: 'CHOOSE_SERVICE',
		payload: {
			currentService: serviceId
		}
	}
}
