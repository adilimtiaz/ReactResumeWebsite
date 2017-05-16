import React from 'react';

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
        var color="";
        if(item.level==1){
            color= "label label-danger";
        }
        else if(item.level==2){
            color= "label label-primary";
        }
        else{
            color="label label-success";
        }
        return (<li key={index}><span className={color}>{item.skill}</span></li>);
    });



  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills and Frameworks</h2>
          <h3>Green indicates extensive experience, blue indicates moderate experience and red indicates limited experience.</h3>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)
};
export default Skills;
