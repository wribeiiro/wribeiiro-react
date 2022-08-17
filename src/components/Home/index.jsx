import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types'; // ES6

import './style.css';
import Terminal from '../../components/Terminal';

function Home({ background, centerText, terminalTitle, aboutText }) {
	return (
		<Fragment>
			<div className="home banner">
				<div
					className="banner-image"
					style={{background: 'url(' + background + ')' }
				}>
                    <div className="banner-caption">
                        <div className="container">
                            <div className="stack" style={{'--stacks': 3}}>
                                <span className="text-center" style={{'--index': 0}}>{centerText}</span>
                                <span className="text-center" style={{'--index': 1}}>{centerText}</span>
                                <span className="text-center" style={{'--index': 2}}>{centerText}</span>
                            </div>
                        </div>

                        <Terminal
                            aboutText={aboutText}
                            terminalTitle={terminalTitle}
                        >
                        </Terminal>
                    </div>
				</div>
			</div>
		</Fragment>
	);
}

Home.propTypes = {
	background: PropTypes.string.isRequired,
	centerText: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
	terminalTitle: PropTypes.string.isRequired
}

export default Home;
