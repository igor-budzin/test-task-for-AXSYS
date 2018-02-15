export default function chooseProviderAction(providerId) {
	return {
		type: 'CHOOSE_PROVIDER',
		payload: {
			currentProvider: providerId
		}
	}
}
