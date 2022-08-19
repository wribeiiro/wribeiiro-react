import React, { useState, useEffect } from 'react';

import './style.css';

import Work from '../../components/Work';

function WorkPage() {
    const [workData, setWorkData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getWorkData = async () => {
        fetch("https://gist.githubusercontent.com/wribeiiro/21299d9ac9f66d8758cd494878189ee7/raw/projects.json", {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            setWorkData(data.data);
            setIsLoading(false);
        })
        .catch((error) => {
            setIsLoading(false);
            console.log(error);
        });
    }

    useEffect(() => {
        getWorkData();
    }, [])

	return (
		<div>
			<section className="work">
				<div className="info">
					<div className="title">
						<h2>Works and Projects</h2>
					</div>

                    {isLoading ? (
                        <div> Fetching data, please wait...</div>
                    ) :
                        <Work workData={workData} />
                    }
				</div>
			</section>
		</div>
  	);
}

export default WorkPage;