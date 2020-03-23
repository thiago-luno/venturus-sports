import React from 'react';
import './TitleSection.scss';

const TitleSection = ( { title } ) => {
    return (
        <div className="content-title">
            <h2 className="title">{ title }</h2> <hr className="title__line"/>
        </div>
    )
}

export default TitleSection
