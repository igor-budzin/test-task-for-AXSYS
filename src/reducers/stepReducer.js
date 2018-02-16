const initialState = {
	currentStep: 1
}

export default function serviceReducer(state = initialState, action) {
	switch(action.type) {
		case 'NEXT_STEP':
			if(state.currentStep <= 2) {
				const tmpObj = Object.assign({}, state);
				tmpObj.currentStep++;
				return tmpObj;
			}
			else {
				return Object.assign({}, state)
			}

		case 'RESET_STEP':
			const tmpObj = Object.assign({}, state);
			tmpObj.currentStep = 1;
			return tmpObj;

		default:
			return state;
	}
}
