import React, {Component} from 'react';

export default class Services extends Component {
	onClick(serviceId) {
		event.preventDefault();
		this.props.chooseServiceHandler(serviceId);
	}

	render() {
		return (
			<div>
				{
					this.props.serviceData.map((service) => {
						return (<a
									href="#"
									className="item"
									key={service.id}
									onClick={this.onClick.bind(this, service.id)}>
									<span>{service.name}</span>
								</a>);
					})
				}
			</div>
		);
	}
}
