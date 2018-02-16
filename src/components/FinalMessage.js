import React, {Component} from 'react';

export default class FinalMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			button: true
		};
	}

	onClick() {
		this.setState({button: false});
	}

	render() {
		return (
			<div className="FinalMessage">
				<button
					className={"btn btn-default event-btn " + (this.state.button ? 'visible' : 'hidden')}
					onClick={this.onClick.bind(this)}>
					Create event
				</button>
				<div className={!this.state.button ? 'visible' : 'hidden'}>
					{
						<p>You just selected
						<span> {this.props.currentService[0].name} </span>
						with <span> {this.props.currentProvider[0].name} </span>.
						Total price will be - <span> {this.props.currentService[0].price} </span>,
						<span> {this.props.currentService[0].durationInMinutes} </span>  minutes</p>
					}
					<button
						className="btn btn-default reset-btn"
						onClick={this.props.resetStep}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}
