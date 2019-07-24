import React from 'react';
import Header from './components/Header/Header';
import ThemeButtons from './components/ThemeButtons/ThemeButtons';
import './App.css';

class Calculator extends React.Component {
	state = {
		displayValue: '0'
	};

	inputDigit(digit) {
		const { displayValue } = this.state;

		this.setState({
			displayValue: displayValue + digit
		});
	}

	render() {
		const { displayValue } = this.state;

		return (
			<div id="wrapper">
				<div id="app">
					<Header />
					<ThemeButtons />
					<div className="calculator">
						<div className="calculator-display">
							<span className="scaling-text">{displayValue}</span>
						</div>
						<div className="calculator-keys">
							<div className="input-keys">
								<div className="function-keys">
									<button className="calculator-key functions key-clear">
										AC
									</button>
									<button className="calculator-key functions key-sign">
										±
									</button>
									<button className="calculator-key functions key-percent">
										%
									</button>
								</div>
								<div className="number-keys">
									<button
										className="calculator-key digits key-0"
										onClick={() => this.inputDigit(0)}
									>
										0
									</button>
									<button
										className="calculator-key digits key-decimal"
										id="dot-key"
									>
										●
									</button>
									<button
										className="calculator-key digits key-1"
										onClick={() => this.inputDigit(1)}
									>
										1
									</button>
									<button
										className="calculator-key digits key-2"
										onClick={() => this.inputDigit(2)}
									>
										2
									</button>
									<button
										className="calculator-key digits key-3"
										onClick={() => this.inputDigit(3)}
									>
										3
									</button>
									<button
										className="calculator-key digits key-4"
										onClick={() => this.inputDigit(4)}
									>
										4
									</button>
									<button
										className="calculator-key digits key-5"
										onClick={() => this.inputDigit(5)}
									>
										5
									</button>
									<button
										className="calculator-key digits key-6"
										onClick={() => this.inputDigit(6)}
									>
										6
									</button>
									<button
										className="calculator-key digits key-7"
										onClick={() => this.inputDigit(7)}
									>
										7
									</button>
									<button
										className="calculator-key digits key-8"
										onClick={() => this.inputDigit(8)}
									>
										8
									</button>
									<button
										className="calculator-key digits key-9"
										onClick={() => this.inputDigit(9)}
									>
										9
									</button>
								</div>
							</div>
							<div className="operator-keys">
								<button className="calculator-key operators key-divide">
									÷
								</button>
								<button className="calculator-key operators key-divide">
									×
								</button>
								<button className="calculator-key operators key-divide">
									-
								</button>
								<button className="calculator-key operators key-divide">
									+
								</button>
								<button className="calculator-key operators key-divide">
									=
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
