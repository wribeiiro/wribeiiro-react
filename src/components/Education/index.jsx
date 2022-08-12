import React from 'react';
import { PropTypes } from 'prop-types';

function Education({ educationData }) {
	return (
		<div className="education">
			{educationData.map((education, index) => {
				return (
					<div
						className="panel panel-default"
						key={index}
					>
						<div className="panel-heading" role="tab" id="headingOne">
							<h4 className="panel-title">
								<a className="" href="#">{education.title + ' - ' + education.date}</a>
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