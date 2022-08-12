import React from 'react';
import { PropTypes } from 'prop-types';

import './style.css';

function Work({ workData }) {
	return (
        <div className="work-container">
            {workData.map((work, index) => {
                return (
                    <div className="work-item" key={index}>
                        <a href={work.link} target="_blank">
                            { work.image ? (
                                <img className="work-img" src={work.image} alt={work.name} />
                            ) : null }

                            <div className="work-info">
                                <h3 className="info-title text-left">{work.name}</h3>
                                <p className="info-subtitle text-left">{work.description}</p>
                                <p className="tags text-left">{work.tags}</p>
                                <div className="work-footer">
                                    <p><i className="fab fa-github"></i>&nbsp; Github</p>
                                </div>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
  	);
}

Work.propTypes = {
	workData: PropTypes.array.isRequired
}

export default Work;