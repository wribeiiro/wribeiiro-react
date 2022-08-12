import React from 'react';
import { PropTypes } from 'prop-types';

function Experience({ xpData }) {
	return (
		<div className="experience timeline-centered">
			{xpData.map((xp, index) => {
				return (
					<article
						className="timeline-entry"
						key={index}
					>
						<div className="timeline-entry-inner">
							<div className="timeline-icon">
								<i className="fa fa-briefcase"></i>
							</div>
							<div className="timeline-label">
								<h2>
									<a href="#">{xp.title}</a> <span>{xp.date}</span>
								</h2>
								<p>{xp.description}</p>
							</div>
						</div>
					</article>
				);
			})}
		</div>
  	);
}

Experience.propTypes = {
	xpData: PropTypes.array.isRequired
}

export default Experience;