import React, {Component} from 'react';

export default class Providers extends Component {
	onClick(providerId) {
		event.preventDefault();
		this.props.chooseProviderHandler(providerId);
	}

	render() {
		return (
			<div>
				{
					this.props.providerData.map((provider) => {
						return (<a
									href="#"
									className="item"
									key={provider.id}
									onClick={this.onClick.bind(this, provider.id)}>
									<span>{provider.name}</span>
								</a>);
					})
				}
			</div>
		);
	}
}
