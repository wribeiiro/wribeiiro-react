import React from 'react';

import Contact from '../../components/Contact'

function ContactPage() {
	const contactData = [
		{
			href: "mailto:welleh10@gmail.com",
			icon: "fa fa-envelope",
			title: "E-mail"
		},
		{
			href: "https://www.linkedin.com/in/wellisson-ribeiro-655a0b179/",
			icon: "fab fa-linkedin",
			title: "Linkedin"
		},
		{
			href: "https://github.com/wribeiiro",
			icon: "fab fa-github",
			title: "Github"
		},
		{
			href: "https://stackoverflow.com/users/7039025/wribeiro",
			icon: "fab fa-stack-overflow",
			title: "Stackoverflow"
		}
	];

	return (
		<div>
			<section className="contact">
				<div className="info">
					<div className="title">
						<h2>Contact</h2>
						<p>I'm glad to connect!!</p>
					</div>

					<div className="contact-container">
						<Contact
							contactData={contactData}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ContactPage;