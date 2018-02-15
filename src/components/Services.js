import React, {Component} from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
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
