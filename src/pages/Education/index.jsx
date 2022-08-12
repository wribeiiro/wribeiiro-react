import React from 'react';

import Education from '../../components/Education';

function EducationPage() {
	const educationData = [
		{
			title: "Graduated in Análise e Desenvolvimento de Sistemas At UNOPAR <br> - Universidade Norte do Paraná ",
			date: "2015-2018",
		},
		{
			title: "Sistemas de Informação (Studied for 1 year) At UNC <br> - Universidade Contestado",
			date: "2014",
		},
	];

	return (
		<div>
			<section className="education">
				<div className="info">
					<div className="title">
						<h2>Education</h2>
					</div>

					<Education educationData={educationData}/>
				</div>
			</section>
		</div>
  	);
}

export default EducationPage;