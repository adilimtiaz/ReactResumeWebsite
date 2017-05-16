import React from 'react';
import ProjectItem from './ProjectItem';

const NotableProject = props => {
    const getProjects = () => {
        console.log(props.projectData);
        const projItems = [];
        props.projectData.forEach((val, index) => {
            projItems.push(<ProjectItem key={index} projectItemData={val}/>);
        });
        return projItems;
    };

    return (
        <section className="work">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Notable Projects</h2>
            {getProjects()}
        </section>
    );
};

export default NotableProject;
