import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import chooseServiceAction from '../actions/chooseServiceAction';
import chooseProviderAction from '../actions/chooseProviderAction';
import nextStepAction from '../actions/nextStepAction';
import ProgressSteps from './ProgressSteps';
import Services from './Services';
import Providers from './Providers';
import '../assets/styles/main.css';

class App extends Component {
	chooseServiceHandler(serviceId) {
		this.props.chooseService(serviceId);
		this.props.nextStep();
	}

	chooseProviderHandler(providerId) {
		this.props.chooseProvider(providerId);
		this.props.nextStep();
	}

	render() {
		return (
			<div className="app container">
				<ProgressSteps />

				<Services
					serviceData={this.props.serviceData}
					chooseServiceHandler={this.chooseServiceHandler.bind(this)}
				/>

				<Providers
					providerData={this.props.providerData}
					chooseProviderHandler={this.chooseProviderHandler.bind(this)}
				 />

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		serviceData: state.serviceReducer.servicesDataSet,
		providerData: state.providerReducer.providersDataSet,
		currentService: state.serviceReducer.currentService,
		currentProvider: state.serviceReducer.currentProvider,
		currentStep: state.stepReducer.currentStep
	}
}

function mapDispatchToProps(dispatch) {
	return {
		chooseService: bindActionCreators(chooseServiceAction, dispatch),
		chooseProvider: bindActionCreators(chooseProviderAction, dispatch),
		nextStep: bindActionCreators(nextStepAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
