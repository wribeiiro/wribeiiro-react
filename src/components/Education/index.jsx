import React from 'react';
import { PropTypes } from 'prop-types';
import parse from "html-react-parser";

import './style.css';

function Education({ educationData }) {
	return (
		<div className="education-container">
			{educationData.map((education, index) => {
				return (
					<div
						className="panel panel-default"
						key={index}
					>
						<div className="panel-heading" role="tab" id="headingOne">
							<h4 className="panel-title">
								<a className="" href="#">{parse(education.title + ' - ' + education.date)}</a>
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}

Education.propTypes = {
	educationData: PropTypes.array.isRequired
}

export default Education;