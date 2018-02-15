import servicesDataSet from '../servicesDataSet';
const initialState = {currentService: null, servicesDataSet};

export default function serviceReducer(state = initialState, action) {
	switch(action.type) {
		case 'CHOOSE_SERVICE':
			const tmpObj = Object.assign({}, state);
			tmpObj.currentService = action.payload.currentService;
			return tmpObj;
		default:
			return state;
	}
}
