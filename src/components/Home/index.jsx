import React, { Fragment } from 'react';
import PropTypes from 'prop-types'; // ES6
import Terminal from '../Terminal';
import './style.css';

export default function Home({ background, centerText, terminalInfo }) {
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

                        <Terminal terminalInfo={terminalInfo}/>
                    </div>
				</div>
			</div>
		</Fragment>
	);
}

Home.propTypes = {
	background: PropTypes.string.isRequired,
	centerText: PropTypes.string.isRequired,
    terminalInfo: PropTypes.object.isRequired
}
