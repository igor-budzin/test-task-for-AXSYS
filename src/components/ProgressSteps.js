import React, {Component} from 'react';

export default class ProgressSteps extends Component {
	render() {
		return (
			<div className="row bs-wizard">

				<div className="col-xs-4 bs-wizard-step active">
					<div className="text-center bs-wizard-stepnum">Step 1</div>
					<div className="progress"><div className="progress-bar"></div></div>
					<a href="#" className="bs-wizard-dot"></a>
					<div className="bs-wizard-info text-center">Choose service</div>
				</div>

				<div className="col-xs-4 bs-wizard-step">
					<div className="text-center bs-wizard-stepnum">Step 2</div>
					<div className="progress"><div className="progress-bar"></div></div>
					<a href="#" className="bs-wizard-dot"></a>
					<div className="bs-wizard-info text-center">Choose provider</div>
				</div>

				<div className="col-xs-4 bs-wizard-step">
					<div className="text-center bs-wizard-stepnum">Step 3</div>
					<div className="progress"><div className="progress-bar"></div></div>
					<a href="#" className="bs-wizard-dot"></a>
					<div className="bs-wizard-info text-center">Finish</div>
				</div>

			</div>
		);
	}
}
