import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types'; // ES6

import './style.css';
import Terminal from '../../components/Terminal';

function Home({ background, text, secText, aboutText, terminalTitle }) {
	return (
		<Fragment>
			<div className="home banner">
				<div
					className="banner-image"
					style={{background: 'url(' + background + ')' }
				}>
					<div className="banner-caption">
						<div className="caption-text text-left">
							<div className="glitch">{text}</div>
							<p className="text">{secText}</p>
							<Terminal
								aboutText={aboutText}
								terminalTitle={terminalTitle}
							>
							</Terminal>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

Home.propTypes = {
	background: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	secText: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
	terminalTitle: PropTypes.string.isRequired
}

export default Home;