import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType}, {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p><b>Studied: </b> {startdate} - {enddate} (Anticipated graduation)</p>
			      <p><b>Cumulative average:</b> {item.gpa}%</p>
			      <p> Received an Outstanding International Student scholarship on admission to UBC. </p>
		  </div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
