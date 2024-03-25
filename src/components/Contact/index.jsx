import React from 'react';
import { PropTypes } from 'prop-types';
import parse from "html-react-parser";
import './style.css';

export default function Contact({ contactData }) {
	return (
		<div className="contact-container">
			{contactData.map((contact, index) => {
				return (
					<div
						className="panel panel-default"
						key={index}
					>
						<div className="panel-heading" role="tab" id="headingOne">
							<h4 className="panel-title">
								<a
									className=""
									href={contact.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className={parse(contact.icon)}></i> {contact.title}
								</a>
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
}

Contact.propTypes = {
	contactData: PropTypes.array.isRequired
}
