import React, { useState, useEffect, useContext } from 'react';
import TranslationContext from "../../context/TranslationContext";
import Work from '../../components/Work';

export default function WorkPage() {
    const [workData, setWorkData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {
        getTranslationFromStorage,
    } = useContext(TranslationContext);

    const { pages: { works } } = getTranslationFromStorage();

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
						<h2>{works.title}</h2>
					</div>

                    {isLoading ? (
                        <div>{works.info.loadingText}</div>
                    ) :
                        <Work workData={workData} />
                    }
				</div>
			</section>
		</div>
  	);
}
