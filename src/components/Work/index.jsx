import React from 'react';
import { PropTypes } from 'prop-types';

function Work({ workData }) {
	return (
		<div className="work-item">
			<a href={workData.link} target="_blank">
				{ workData.image ? (
					<img src={workData.image} alt={workData.name} />
				) : null }

				<div className="work-info">
					<h3 className="info-title text-left">{workData.name}</h3>
					<p className="info-subtitle text-left">{workData.description}</p>
					<p className="tags text-left">{workData.tags}</p>
					<div className="work-footer">
						<p><i className="fab fa-github"></i>&nbsp; Github</p>
					</div>
				</div>
			</a>
		</div>
  	);
}

Work.propTypes = {
	workData: PropTypes.object.isRequired
}

export default Work;