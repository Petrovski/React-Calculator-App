import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import OriginalTheme from './components/CalculatorThemes/OriginalTheme/OriginalTheme';
import BlueTheme from './components/CalculatorThemes/BlueTheme/BlueTheme';
import GreenTheme from './components/CalculatorThemes/GreenTheme/GreenTheme';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/ios" component={OriginalTheme} />
			<Route exact path="/blue" component={BlueTheme} />
			<Route exact path="/green" component={GreenTheme} />
		</div>
	</Router>,
	document.getElementById('root')
);
