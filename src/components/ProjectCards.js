import {Col} from "react-bootstrap";
import * as React from 'react';
export const ProjectCard = ({title,description,imgUrl,buttonUrl,buttonImg}) =>{

    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title}/>
                <div className="proj-txtx">
                    <h4> {title}</h4>
                    <span>{description}</span>
                    <div className="button-container">
                        <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                            <img src={buttonImg} alt="button" style={{ width: '50px', height: '50px' }} />
                        </a>
                    </div>
                </div>
            </div>

        </Col>
    )
}