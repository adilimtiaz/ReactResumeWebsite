export default function() {
    return (
    {
        "basics": {
            "name": "Adil Imtiaz",
            "label": "Aspiring full stack developer",
            "picture": "./profilePhoto.jpg",
            "email": "adilImtiaz96@gmail.com",
            "phone": "6047861660",
            "website": "http://freaksauce.com",
            "summary": "I discovered computer science three years ago at UBC as a student of computer science. I have developed technical communication and leadership skills via my experience as a teaching assistant for Intoduction to Computer Systems at UBC and volunteering extensively.  I have continuously challenged myself with new languages, frameworks and methodologies. I have a very strong interest in full stack development and have recently been experimenting with React to learn a solid front-end framework as you will see from my Github repos. I have acquired experience with the back-end in Node.js and developed a fully functional database that supported a custom query language (no database apis were used).",
            "location": {
                "address": "2205 Lower Mall",
                "postalCode": "V6T1Z4",
                "city": "Vancouver",
                "countryCode": "Canada",
                "region": "BC"
            },
            "profiles": [
                {
                    "network": "Github",
                    "username": "adilimtiaz",
                    "url": ""
                }
            ]
        },
        "work": [{
            "company": "University of British Columbia",
            "position": "Undergraduate Teaching Assistant, Introduction to Computer Systems",
            "website": "http://nrma.com.au",
            "startDate": "2017-01-04",
            "endDate": "2017-05-03",
            "summary": "",
            "highlights": ["Effectively communicated technical information to students by conducting labs and office hours to help diverse group of students with lab assignments.",
                "Helped students with unexpected technical difficulties with various software needed for the class. " ]
        }],"notableProjects": [{
        "name": "Personal website in React",
        "type": "Personal project",
        "link": "http://adilimtiaz.herokuapp.com/",
        "sourceCode": "https://github.com/adilimtiaz/ReactResumeWebsite",
        "summary": "Developed a personal website using react, react-redux and a resume schema which ia a JSON object that is a reducer for the application. This resume is scalable and can be very easily modified as ones' career grows. Feel free to pull the source code and use it. ",
        "skillsUsed": ["React", "React-Redux", "Node.js", "Heroku", "Javascript"]
    },{
        "name": "insightUBC",
        "type": "Pair Programming Academic Project",
        "link": "",
        "sourceCode": "https://github.com/adilimtiaz/insightUBC",
        "summary": " Developed a full stack-project that could parse course data (JSON) and room data(HTML) from UBC and populate a database." +
        "No third-party APIs were used to simplify database management. A custom query language was defined so users could run queries on the database to filter data. The filtering options available were comparable to SQL. "+
        "A front-end was then developed so that an end-user could use the database and query language to perform operations such as find data on classes or rooms in UBC. One could even use the application to create a schedule given a number of classes and buildings and a few other constraints.",
        "skillsUsed": ["TypeScript", "Javascript", "Mocha", "Node.js", "jQuery", "HTML", "CSS"]
    }, {
        "name": "HelloworldAPI",
        "type": "Group Hackathon Project",
        "link": "",
        "sourceCode": "https://github.com/adilimtiaz/HelloWorldAPI",
        "summary": "Developed a social network in a group of four people at nwHacks over 48 hours. It uses a Django back-end to register users, follow people and cater posts for them." +
        "Fully-functional React and IOS apps were developed to interact with the back-end.",
        "skillsUsed": ["Javascript","React.js" , "react-redux","react-rotuer", "Node.js", "HTML", "CSS", "Python"]
    }, {
        "name": "AirlineData",
        "type": "Group Academic Project",
        "link": " http://www.ugrad.cs.ubc.ca/~s9a0b/AirlineData/login.html",
        "sourceCode": "https://github.com/adilimtiaz/AirlineData",
        "summary": "Developed a PHP application, as an academic group project, that used MySQL queries so that end-users could find information on flights, crew and airports while being oblivious to the query language.",
        "skillsUsed": ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"]
    },
        {
        "name": "POSTSAPI",
        "type": "Personal Project",
        "link": "http://pure-forest-12859.herokuapp.com/",
        "sourceCode": "https://github.com/adilimtiaz/HelloWorldAPI",
        "summary": " Developed a news-feed for a given user in React.js that uses a third-party API to reflect user action. Currently working on integrating HelloWorld with this application.",
        "skillsUsed": ["Javascript","React.js" , "react-redux","react-rotuer", "Node.js", "HTML", "CSS"]
    }],
        "volunteer": [],
        "education": [{
            "institution": "University of British Columbia, Vancouver, BC",
            "area": "Combined Major in Business and Computer Science",
            "year": 4,
            "studyType": "Bachelor of Commerce",
            "startDate": "2014-09-01",
            "endDate": "2019-09-01",
            "gpa": "76.3",
            "courses": []
        }],
        "awards": [],
        "publications": [],
        "skills": [{
            "name": "All skills",
            "level": "Master",
            "keywords": [{"skill": "HTML", "level": 2},
        {"skill": "CSS", "level": 2},
        {"skill": "Javascript", "level": 3},
        {"skill": "jQuery", "level": 2},
        {"skill": "Node.js", "level": 3},
        {"skill": "React", "level": 3},
        {"skill": "TypeScript", "level": 3},
        {"skill": "Express", "level": 1},
        {"skill": "Bootstrap", "level": 2},
        {"skill": "C", "level": 3},
        {"skill": "C++", "level": 3},
        {"skill": "PHP", "level": 2},
        {"skill": "Java", "level": 2},
        {"skill": "Android", "level": 1},
        {"skill": "Python", "level": 1},
        {"skill": "Assembly", "level": 2},
        {"skill": "mySQL", "level": 3},
        {"skill": "git", "level": 3},
        {"skill": "Heroku", "level": 2}]
        }],
        "languages": [{
            "language": "English",
            "fluency": "Native speaker"
        }],
        "interests": [{
            "name": "Guitar",
            "keywords": []
        }],
        "references": []
    });
}