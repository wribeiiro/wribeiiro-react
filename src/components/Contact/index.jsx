import React from 'react';
import { PropTypes } from 'prop-types';

import './style.css';

function Contact({ contactData }) {
	return (
		<div className="contact-container">
            {contactData.map((contact, index) => {
                return (
                    <div
                        className="contact-item"
                        key={index}
                    >
                        <div className="contact-content">
                            <a href={contact.href} target="_blank" rel="noopener noreferrer" title={contact.href}>
                                <i className={contact.icon}></i>
                            </a>
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

export default Contact;