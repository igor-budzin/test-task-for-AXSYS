import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import chooseServiceAction from '../actions/chooseServiceAction';
import chooseProviderAction from '../actions/chooseProviderAction';
import nextStepAction from '../actions/nextStepAction';
import resetStepAction from '../actions/resetStepAction';
import ProgressSteps from './ProgressSteps';
import Services from './Services';
import Providers from './Providers';
import FinalMessage from './FinalMessage';
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

	showSection() {
		switch(this.props.currentStep) {
			case 1:
				return 	<Services
							serviceData={this.props.serviceData}
							chooseServiceHandler={this.chooseServiceHandler.bind(this)}
						/>
			case 2:
				return 	<Providers
							currentService={this.props.currentService[0].providers}
							providerData={this.props.providerData}
							chooseProviderHandler={this.chooseProviderHandler.bind(this)}
						/>

			case 3:
				return <FinalMessage
							currentProvider={this.props.currentProvider}
							currentService={this.props.currentService}
							resetStep={this.props.resetStep}
				 		/>
		}
	}

	render() {
		return (
			<div className="app container">
				<ProgressSteps currentStep={this.props.currentStep} />

				<div className="clearfix">
					{this.showSection()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		serviceData: state.serviceReducer.servicesDataSet,
		providerData: state.providerReducer.providersDataSet,
		currentService: state.serviceReducer.currentService,
		currentProvider: state.providerReducer.currentProvider,
		currentStep: state.stepReducer.currentStep
	}
}

function mapDispatchToProps(dispatch) {
	return {
		chooseService: bindActionCreators(chooseServiceAction, dispatch),
		chooseProvider: bindActionCreators(chooseProviderAction, dispatch),
		nextStep: bindActionCreators(nextStepAction, dispatch),
		resetStep: bindActionCreators(resetStepAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
