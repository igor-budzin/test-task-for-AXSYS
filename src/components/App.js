import React, {Component} from 'react';
import ProgressSteps from './ProgressSteps';
import '../assets/styles/main.css';
import servicesDataSet from '../servicesDataSet';
import providersDataSet from '../providersDataSet'

export default class App extends Component {
	render() {
		return (
			<div className="app container">
				<ProgressSteps />

				{
					servicesDataSet.map((service, i) => {
						return (<a className="item" key={service.id}>
									<span>{service.name}</span>
								</a>);
					})
				}
			</div>
		);
	}
}
