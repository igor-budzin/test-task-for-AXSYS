import providersDataSet from '../providersDataSet';
const initialState = {currentProvider: null, providersDataSet};

export default function providerReducer(state = initialState, action) {
	switch(action.type) {
		case 'CHOOSE_PROVIDER':
			const tmpObj = Object.assign({}, state);
			tmpObj.currentProvider = state.providersDataSet.filter((item) => {
				return item.id === action.payload.currentProvider;
			});
			return tmpObj;
		default:
			return state;
	}
}
