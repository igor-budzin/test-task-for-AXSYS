import servicesDataSet from '../servicesDataSet';
const initialState = {currentService: null, servicesDataSet};

export default function serviceReducer(state = initialState, action) {
	switch(action.type) {
		case 'CHOOSE_SERVICE':
			const tmpObj = Object.assign({}, state);
			tmpObj.currentService = state.servicesDataSet.filter((item) => {
				return item.id === action.payload.currentService;
			});
			return tmpObj;
		default:
			return state;
	}
}
