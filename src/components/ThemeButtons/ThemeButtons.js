import React, { Component } from 'react';
import './styles.scss';

class ThemeButtons extends Component {
	render() {
		return (
			<div className="theme-buttons-container">
				<a href="/" style={{ textDecoration: 'none' }}>
					<button className="theme-buttons red"> Red Theme</button>
				</a>
				<a href="/ios" style={{ textDecoration: 'none' }}>
					<button className="theme-buttons original">iOS Theme</button>
				</a>
				<a href="/blue" style={{ textDecoration: 'none' }}>
					<button className="theme-buttons blue">Blue Theme</button>
				</a>
				<a href="/green" style={{ textDecoration: 'none' }}>
					<button className="theme-buttons green">Green Theme</button>
				</a>
			</div>
		);
	}
}

export default ThemeButtons;
