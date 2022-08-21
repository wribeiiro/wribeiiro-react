import React, { useContext } from 'react';
import Skill from '../../components/Skill';
import Experience from '../../components/Experience';
import TranslationContext from "../../context/TranslationContext";

export default function SkillXpPage() {

	const {
        getTranslationFromStorage,
    } = useContext(TranslationContext);

    const { pages: { skills_xp } } = getTranslationFromStorage();

	return (
		<div>
			<section className="experience">
				<div className="info">
					<div className="title">
						<h2>{skills_xp.title}</h2>
					</div>

					<Skill
						skillsData={skills_xp.info.skills}
					/>

					<div className="title">
						<h2>{skills_xp.subtitle}</h2>
					</div>

					<Experience
						xpData={skills_xp.info.experience}
					/>
				</div>
			</section >
		</div >
  	);
}
