import React, { useContext } from 'react';
import Contact from '../../components/Contact'
import TranslationContext from "../../context/TranslationContext";

export default function ContactPage() {

    const {
        getTranslationFromStorage,
    } = useContext(TranslationContext);

    const { pages: { contact } } = getTranslationFromStorage();

	return (
		<div>
			<section className="contact">
				<div className="info">
					<div className="title">
						<h2>{contact.title}</h2>
					</div>

                    <Contact
                        contactData={contact.info}
                    />
				</div>
			</section>
		</div>
	);
}
