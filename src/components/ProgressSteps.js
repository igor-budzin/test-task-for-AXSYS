import React, {Component} from 'react';

export default class ProgressSteps extends Component {
	render() {
		const currentStep = this.props.currentStep;
		const step1 = currentStep === 1 ? "active" : "complete";
		const step2 = currentStep === 2 ? "active" : (currentStep > 2 ? "complete" : "");
		const step3 = currentStep === 3 ? "complete" : "";

		return (
			<div className="row bs-wizard">

				<div className={"col-xs-4 bs-wizard-step " + step1}>
					<div className="text-center bs-wizard-stepnum">Step 1</div>
					<div className="progress"><div className="progress-bar"></div></div>
					<a href="#" className="bs-wizard-dot"></a>
					<div className="bs-wizard-info text-center">Choose service</div>
				</div>

				<div className={"col-xs-4 bs-wizard-step " + step2}>
					<div className="text-center bs-wizard-stepnum">Step 2</div>
					<div className="progress"><div className="progress-bar"></div></div>
					<a href="#" className="bs-wizard-dot"></a>
					<div className="bs-wizard-info text-center">Choose provider</div>
				</div>

				<div className={"col-xs-4 bs-wizard-step " + step3}>
					<div className="text-center bs-wizard-stepnum">Step 3</div>
					<div className="progress"><div className="progress-bar"></div></div>
					<a href="#" className="bs-wizard-dot"></a>
					<div className="bs-wizard-info text-center">Create Event</div>
				</div>

			</div>
		);
	}
}
