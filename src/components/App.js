import React, {Component} from 'react';
//const data= require('json!../data/resume.json'); //cant figure out how to read this
import {connect} from 'react-redux';
import Profile from './Profile';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Work from './Work';
import NotableProject from './NotableProject';

class App extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.resume);
    }
    render(){
        const resume=this.props.resume;
        return <div className="container">
                <div className="row">
                    <aside className="col-md-4">
                        <div className="inner">
                            <Profile data={resume.basics}/>
                        </div>
                    </aside>
                    <main className="col-md-8">
                        <div className="inner">
                            <About aboutData={resume.basics.summary}/>
                            <Work workData={resume.work} />
                            <NotableProject projectData={resume.notableProjects} />
                            <Skills skillsData={resume.skills} />
                            <Education educationData={resume.education} />
                        </div>
                    </main>
                </div>
        </div>;
    }
}

function mapStateToProps(state){
    return {
        resume: state.resume
    };
}

export default connect (mapStateToProps)(App); //we now have access to the resume contained in state as props