import servicesDataSet from '../servicesDataSet';
const initialState = servicesDataSet;

export default function serviceReducer(state = initialState, action) {
	switch(action.type) {
		case 'CHOOSE_SERVICE':
			return state;
		default:
			return state;
	}
}
