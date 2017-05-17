import React from 'react';

const ProjectItem = props => {
    /*
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
            enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
            enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    };

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
            <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
            <p className="workDates">{getWorkDates()}</p>
            <p>{props.workItemData.summary}</p>
            <ul>{getHighlights}</ul>
        </div>
    )
    **/

    //this sets skillUsed
    var skillsUsed=props.projectItemData.skillsUsed;
    var ret="";
    for(var i=0;i<skillsUsed.length-1;i++){
        ret=ret+skillsUsed[i]+",";
    }
    ret=ret+skillsUsed[skillsUsed.length-1];
    //helper to find the actual link for a project if there is a link in resume.js
    var readSource=props.projectItemData.sourceCode;

    const getLink = () => {
        var link = props.projectItemData.link;
        if (link == '') {
            return "Working on deployment. Stay tuned for a demo.";
        } else {
            return <a href={link}>Check it out here.</a>;
        }
    };

    return (
        <div className="workItem">
            <h3>{props.projectItemData.name}, <span>{props.projectItemData.type}</span></h3>
            <b>Skills Used: </b><i className="workDates">{ret} </i>
            <p>{props.projectItemData.summary}</p>
            <p><b>Demo link: </b> {getLink()}</p>
            <p><b>Source code: </b> <a href= {readSource}>Check it out here. </a></p>
        </div>
    )

};



export default ProjectItem;
