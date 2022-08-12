import React, { Fragment } from 'react';
import PropTypes from 'prop-types'; // ES6

import './style.css';

function Terminal({ terminalTitle, aboutText }) {
	return (
		<Fragment>
			<div className="terminal fade-in">
				<div className="terminal-bar">
					<div className="btns">
						<span className="circle red"></span>
						<span className="circle yellow"></span>
						<span className="circle green"></span>
					</div>
					<div className="terminal-title">{terminalTitle}</div>
				</div>
				<pre className="body">{aboutText}</pre>
			</div>
		</Fragment>
	);
}

Terminal.propTypes = {
	terminalTitle: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
}

export default Terminal;