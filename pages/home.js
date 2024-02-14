
import React from 'react';
import './home.css'

const Home = () => {
  return (
    <div className="container">
      <br></br>
      <h1>{'About Me'}</h1>
      <div className="main">
        <p>I'm Kyle, and I am a Seattle based software developer who graduated from Cal Poly. This website is entirely serverless, created in React, and hosted using AWS Amplify.</p>
        <p>I started programming with scratch in elementary school, and took my first coding class in middle school. In highschool, I became the lead programmer on my FRC team, 3070 Pronto, and I interned at my school's IT department. I then moved on to Cal Poly, where I got a computer science degree while also working part time as a software developer at Amazon.
        </p>
        <div className="links">
          <div className="lynk" >
            <a href="https://github.com/Kyle-McRae">Github</a>
          </div><div className="lynk" >
            <a href="https://www.linkedin.com/in/kyle-mcrae-11468419b/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
