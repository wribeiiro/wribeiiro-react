import React, { useContext } from 'react';
import Education from '../../components/Education';
import TranslationContext from "../../context/TranslationContext";

export default function EducationPage() {

    const {
        getTranslationFromStorage,
    } = useContext(TranslationContext);

    const { pages: { education } } = getTranslationFromStorage();

	return (
		<div>
			<section className="education">
				<div className="info">
					<div className="title">
						<h2>{education.title}</h2>
					</div>

					<Education educationData={education.info}/>
				</div>
			</section>
		</div>
  	);
}
