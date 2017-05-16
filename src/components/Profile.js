import React from 'react';

const Profile = props => {
    const profileObj = props.data;
    return  <div>
        <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200" /></div>
        <h1 className="text-center">{profileObj.name}</h1>
        <h2 className="text-center">{profileObj.label}</h2>
        <div className="divider"></div>
        <ul className="list-unstyled contact-links text-center">
            <li>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
            <li>I'd love to hear from you at <a href="mailto:{profileObj.email}">{profileObj.email}</a> or call me at {profileObj.phone}</li>
        </ul>
        <div className="divider"></div>
        <ul className="profileLinks list-inline text-center">
            <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[0].username}></a></li>
        </ul>
        <div className="divider"></div>
        <p className="text-center">I built this site with <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The full source code can be found in <a href="https://github.com/freaksauce/React-Resume-ES6">my Github repo</a>.</p>
    </div>
};

export default Profile;
