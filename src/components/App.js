import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import chooseServiceAction from '../actions/chooseServiceAction';
import ProgressSteps from './ProgressSteps';
import '../assets/styles/main.css';

class App extends Component {
	render() {
		return (
			<div className="app container">
				<ProgressSteps />

				{
					this.props.serviceState.map((service, i) => {
						return (<a className="item" key={service.id}>
									<span>{service.name}</span>
								</a>);
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		serviceState: state.serviceReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		chooseService: bindActionCreators(chooseServiceAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
