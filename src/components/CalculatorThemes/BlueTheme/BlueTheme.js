import React, { Component } from 'react';
import ThemeButtons from '../../ThemeButtons/ThemeButtons';
import './styles.css';

class BlueTheme extends Component {
	state = {
		displayValue: '0',
		operandClick: false,
		operator: null,
		numberValue: null
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	clearAll() {
		this.setState({
			displayValue: '0',
			operandClick: false,
			operator: null,
			numberValue: null
		});
	}

	clearDisplay() {
		this.setState({
			displayValue: '0',
			numberValue: null
		});
	}

	togglePositiveNegative() {
		const { displayValue } = this.state;

		this.setState({
			displayValue:
				displayValue.charAt(0) === '-'
					? displayValue.substr(1)
					: '-' + displayValue
		});
	}

	calculatePercentage() {
		const { displayValue } = this.state;
		const value = parseFloat(displayValue);

		this.setState({
			displayValue: String(value / 100)
		});
	}

	inputDigit(digit) {
		const { displayValue, operandClick } = this.state;

		if (operandClick) {
			this.setState({
				displayValue: String(digit),
				operandClick: false
			});
		} else {
			this.setState({
				displayValue:
					displayValue === '0' ? String(digit) : displayValue + digit
			});
		}
	}

	inputDecimal() {
		const { displayValue, operandClick } = this.state;

		if (operandClick) {
			this.setState({
				displayValue: '.',
				operandClick: false
			});
		} else if (displayValue.indexOf('.') === -1) {
			this.setState({
				displayValue: displayValue + '.',
				operandClick: false
			});
		}
	}

	doMath(clickedOperator) {
		const { displayValue, operator, numberValue } = this.state;
		const secondValue = parseFloat(displayValue);
		const operations = {
			'/': (firstValue, secondValue) => firstValue / secondValue,
			'*': (firstValue, secondValue) => firstValue * secondValue,
			'+': (firstValue, secondValue) => firstValue + secondValue,
			'-': (firstValue, secondValue) => firstValue - secondValue,
			'=': secondValue => secondValue
		};

		if (numberValue == null) {
			this.setState({
				numberValue: secondValue
			});
		} else if (operator) {
			const currentValue = numberValue || 0;
			const newValue = operations[operator](currentValue, secondValue);

			this.setState({
				numberValue: newValue,
				displayValue: String(newValue)
			});
		}

		this.setState({
			operandClick: true,
			operator: clickedOperator
		});
	}

	clearLastChar() {
		const { displayValue } = this.state;

		this.setState({
			displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
		});
	}

	handleKeyPress = event => {
		const operations = {
			'/': (firstValue, secondValue) => firstValue / secondValue,
			'*': (firstValue, secondValue) => firstValue * secondValue,
			'+': (firstValue, secondValue) => firstValue + secondValue,
			'-': (firstValue, secondValue) => firstValue - secondValue,
			'=': secondValue => secondValue
		};

		let { key } = event;

		if (key === 'Enter') key = '=';

		if (/\d/.test(key)) {
			event.preventDefault();
			this.inputDigit(parseInt(key, 10));
		} else if (key in operations) {
			event.preventDefault();
			this.doMath(key);
		} else if (key === '.') {
			event.preventDefault();
			this.inputDecimal();
		} else if (key === '%') {
			event.preventDefault();
			this.calculatePercentage();
		} else if (key === 'Backspace') {
			event.preventDefault();
			this.clearLastChar();
		} else if (key === 'Delete') {
			event.preventDefault();

			if (this.state.displayValue !== '0') {
				this.clearDisplay();
			} else {
				this.clearAll();
			}
		}
	};

	render() {
		const { displayValue } = this.state;

		return (
			<div id="wrapper">
				<div id="app">
					<ThemeButtons />
					<div className="calculator">
						<div
							className={
								displayValue >= 9999999
									? 'calculator-display-blue-small'
									: 'calculator-display-blue'
							}
						>
							<span className="scaling-text">{displayValue}</span>
						</div>
						<div className="calculator-keys">
							<div className="input-keys">
								<div className="function-keys-original">
									<button
										className="calculator-key functions-blue"
										onClick={() => this.clearDisplay()}
									>
										AC
									</button>
									<button
										className="calculator-key functions-blue"
										onClick={() => this.togglePositiveNegative()}
									>
										±
									</button>
									<button
										className="calculator-key functions-blue"
										onClick={() => this.calculatePercentage()}
									>
										%
									</button>
								</div>
								<div className="number-keys-blue">
									<button
										id="key-0"
										className="calculator-key digits-original"
										onClick={() => this.inputDigit(0)}
									>
										0
									</button>
									<button
										className="calculator-key digits-blue"
										id="dot-key"
										onClick={() => this.inputDecimal()}
									>
										●
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(1)}
									>
										1
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(2)}
									>
										2
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(3)}
									>
										3
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(4)}
									>
										4
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(5)}
									>
										5
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(6)}
									>
										6
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(7)}
									>
										7
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(8)}
									>
										8
									</button>
									<button
										className="calculator-key digits-blue"
										onClick={() => this.inputDigit(9)}
									>
										9
									</button>
								</div>
							</div>
							<div className="operator-keys">
								<button
									className="calculator-key operators-blue"
									onClick={() => this.doMath('/')}
								>
									÷
								</button>
								<button
									className="calculator-key operators-blue"
									onClick={() => this.doMath('*')}
								>
									×
								</button>
								<button
									className="calculator-key operators-blue"
									onClick={() => this.doMath('-')}
								>
									-
								</button>
								<button
									className="calculator-key operators-blue"
									onClick={() => this.doMath('+')}
								>
									+
								</button>
								<button
									className="calculator-key operators-blue"
									onClick={() => this.doMath('=')}
								>
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

export default BlueTheme;
