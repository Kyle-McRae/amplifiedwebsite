import React from 'react';
import './experience.css'

const Experience = () => {
    return (
        <div className="container">
            <h1>{'Experience'}</h1>
            <div className="job">
                <h2>
                    Amazon (2021-2023)
                </h2>
                <p>
                    Engineer on team responsible for managing Content Management Service, a 24x7 available service, fully CI/CD, autoscaled and multithreaded using DynamoDB, S3 and Lambda
                    <br></br><br></br>
                    Implemented new features designed to fit specific needs of customers
                    <br></br><br></br>
                    Identified root causes of customer issues and developed appropriate fixes
                    <br></br><br></br>
                    Designed and implemented an AWS CDK package to replace functionality of the service’s website
                    <br></br><br></br>
                    Migrated java microservices to serverless architecture
                </p>
            </div>
            <div className="job">
                <h2>
                    Shoreline School District IT Department - Head Intern (2017-2019)
                </h2>
                <p>
                    Managed school district wireless networks and hundreds of school laptops                    
                    <br></br><br></br>
                    Designed and built a calculator using storage chips and an 8085 microprocessor, programmed in Assembly and Verilog
                    <br></br><br></br>
                    Developed and implemented projects such as programming a Raspberry Pi to act as a phone, using voice prompts and digit input to manage a security system
                </p>
            </div>
            <div className="job">
                <h2>
                    FIRST Robotics Competition (FRC) Team 3070 Pronto -  Lead Programmer (2015-2019)
                </h2>
                <p>
                Taught and led junior programmers to use github to collaborate on Java programs that allowed a robot to perform various tasks manually and autonomously                    
                    <br></br><br></br>
                    Each season, spent 6 weeks designing, building, programming, and testing a robot to compete in multiple matches in the Pacific Northwest district
                    <br></br><br></br>
                    Developed and implemented projects such as programming a Raspberry Pi to act as a phone, using voice prompts and digit input to manage a security system
                </p>
            </div>
        </div>
    );
};

export default Experience;
