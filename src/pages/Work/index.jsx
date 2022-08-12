import React from 'react';

import './style.css';

import Work from '../../components/Work';

function WorkPage() {
	const workData = [
		{
			"name": "Spotify Widget",
			"description": "",
			"link": "https://github.com/wribeiiro/spotify-widget",
			"image": "https://user-images.githubusercontent.com/20648572/112703098-ce318800-8ea6-11eb-85bd-59a4450159f9.gif",
			"tags": "Javascript;Electron"
		},
		{
			"name": "Tickets CI4",
			"description": "",
			"link": "https://github.com/wribeiiro/tickets-ci4",
			"image": "https://github.com/wribeiiro/tickets-ci4/raw/master/dashboard.jpeg",
			"tags": "PHP;CI4"
		},
		{
			"id": 12,
			"name": "Test Job 2",
			"description": "",
			"link": "https://github.com/wribeiiro/php-test-2",
			"image": "https://user-images.githubusercontent.com/20648572/112701586-169a7700-8ea2-11eb-92e8-b53176f6762c.png",
			"tags": "PHP"
		},
		{
			"name": "Test Job 1",
			"description": "",
			"link": "https://github.com/wribeiiro/php-test",
			"image": "https://user-images.githubusercontent.com/20648572/112701746-827cdf80-8ea2-11eb-8d9c-1fcc7abda42b.png",
			"tags": "PHP;Laravel;API;JWT"
		},
		{
			"name": "Image 2 PDF Conversor",
			"description": "",
			"link": "https://github.com/wribeiiro/image-to-pdf-conversor",
			"image": "",
			"tags": "PHP"
		},
		{
			"name": "Mi Transfer",
			"description": "",
			"link": "https://github.com/wribeiiro/mi-transfer",
			"image": "https://github.com/wribeiiro/mi-transfer/raw/master/Mitransfer.png",
			"tags": "PHP;CI4"
		},
		{
			"name": "Vue Github",
			"description": "",
			"link": "https://www.wribeiiro.com/vue-github",
			"image": "https://user-images.githubusercontent.com/20648572/112877424-67db7e00-90cf-11eb-9f43-b5c070a625b7.gif",
			"tags": "HTML;CSS;VueJS"
		},
		{
			"name": "Whatsapp Widget",
			"description": "",
			"link": "https://www.wribeiiro.com/whatsapp-widget/",
			"image": "https://user-images.githubusercontent.com/20648572/112698263-5eb59b80-8e9a-11eb-8619-223a06a2ade4.gif",
			"tags": "Javascript;HTML;CSS"
		},
		{
			"name": "React Evil",
			"description": "",
			"link": "https://react-evil.vercel.app/",
			"image": "https://user-images.githubusercontent.com/20648572/112701170-fb7b3780-8ea0-11eb-9765-973e88cf6acd.gif",
			"tags": "React;HTML;CSS;API"
		},
		{
			"name": "React Spotify Player",
			"description": "",
			"link": "https://react-spotify-rho.vercel.app/",
			"image": "https://user-images.githubusercontent.com/20648572/112701517-eb178c80-8ea1-11eb-832e-8af79bb4c358.gif",
			"tags": "React;HTML;CSS;API"
		},
		{
			"name": "Clone Whatsapp Chat",
			"description": "",
			"link": "https://wribeiiro.com/clone-whatsapp/",
			"image": "https://raw.githubusercontent.com/wribeiiro/clone-whatsapp/master/login.jpg",
			"tags": "PHP;HTML;CSS;BS3"
		},
		{
			"name": "Danfe Generator",
			"description": "",
			"link": "https://wribeiiro.com/danfe-generator/",
			"image": "https://github.com/wribeiiro/danfe-generator/raw/master/screen.png",
			"tags": "PHP;PHP-NFE;API"
		},
		{
			"name": "Amazon Prime Video Clone",
			"description": "",
			"link": "https://amazon-prime-video-clone.vercel.app/",
			"image": "https://raw.githubusercontent.com/wribeiiro/amazon-prime-video-clone/master/home.jpg",
			"tags": "React;HTML;CSS;API"
		},
		{
			"name": "React Weather",
			"description": "",
			"link": "https://react-weather-alpha.vercel.app/",
			"image": "https://user-images.githubusercontent.com/20648572/112696533-1183fa80-8e97-11eb-882f-f0b619e7243e.gif",
			"tags": "React;HTML;CSS;API"
		}
	];

	return (
		<div>
			<section className="work">
				<div className="info">
					<div className="title">
						<h2>Works and Projects</h2>
					</div>

					<Work workData={workData} />
				</div>
			</section>
		</div>
  	);
}

export default WorkPage;