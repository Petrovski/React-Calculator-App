import React from 'react';
import './styles.scss';

const ThemeButtons = () => {
	return (
		<div className="theme-buttons-container">
			<button className="theme-buttons original">Original Theme</button>
			<button className="theme-buttons blue">Blue Theme</button>
			<button className="theme-buttons red">Red Theme</button>
			<button className="theme-buttons green">Green Theme</button>
		</div>
	);
};

export default ThemeButtons;
