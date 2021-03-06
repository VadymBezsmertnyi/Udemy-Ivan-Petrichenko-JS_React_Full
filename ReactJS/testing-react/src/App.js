import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			position: ''
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	connitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;

		return (
			<>
				<button onClick={this.nextYear}>+++</button>
				<h1>My name is {name}, surname - {surname}, 
				age - {years}, 
				position - {position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) =>this.connitInputChanges(e,'some color')} />
				</form>
			</>
		)
	}
}

function App() {
	return (
		<div className="App">
			<WhoAmI name='John' surname="Smith" link="facebook.com" />
			<WhoAmI name='Alex' surname="Shepard" link="vk.com" />
		</div>
	);
}

export default App;
