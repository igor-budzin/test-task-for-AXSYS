import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import providerReducer from './providerReducer';
import stepReducer from './stepReducer';

export default combineReducers({
	serviceReducer,
	stepReducer,
	providerReducer
});
