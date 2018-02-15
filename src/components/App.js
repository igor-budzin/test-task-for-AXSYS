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
	constructor(props) {
		super(props);

		this.state = {
			activeButton: false
		};
	}

	chooseServiceHandler(serviceId) {
		this.props.chooseService(serviceId);
		this.props.nextStep();
	}

	chooseProviderHandler(providerId) {
		this.props.chooseProvider(providerId);
		this.setState({activeButton: true})
	}

	onEvent() {
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
							providerData={this.props.providerData}
							chooseProviderHandler={this.chooseProviderHandler.bind(this)}
						/>

			case 3:
				return <FinalMessage
							
				 		/>
		}
	}

	render() {
		return (
			<div className="app container">
				<ProgressSteps />

				<div className="clearfix">
					{this.showSection()}
				</div>

				<button
					className="btn btn-default event-btn"
					disabled={!this.state.activeButton}
					onClick={this.onEvent}>
					Create event
				</button>
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
		nextStep: bindActionCreators(nextStepAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
