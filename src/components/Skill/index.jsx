import React from 'react';
import { PropTypes } from 'prop-types';

function Skill({ skillsData }) {
	return (
		<div className="skill-container">
			{skillsData.map((skill, index) => {
				return (
					<div
						className="skill-item"
						key={index}
					>
						<div className="skill-content">
							<i className={skill.icon} alt={skill.title} title={skill.title}></i>
						</div>
					</div>
				);
			})}
		</div>
  	);
}

Skill.propTypes = {
	skillsData: PropTypes.object.isRequired
}

export default Skill;