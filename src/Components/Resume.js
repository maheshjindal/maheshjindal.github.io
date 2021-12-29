import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'WORK & EDUCATION'} span={'work-and-education'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Sept 2021 - Dec 2021'} 
                        title={'Graduate Teaching Assistant in Reinforcement Learning (Part-Time)'}
                        subTitle={'Columbia University in the city of New York'}
                        text={'Worked with Professor Chong Li as a graduate teaching assistant for Reinforcement Learning course responsible for imparting sessions, grading assignments and clarifying subject related doubts of the students.'} 
                    />
                    <ResumeItem 
                        year={'Jun 2021 - Aug 2021'} 
                        title={'Software Engineering - Engineer I'}
                        subTitle={'FICO'}
                        text={[
                            'Designed and developed FICO Data Orchestrator software with an event-driven distributed architecture from scratch; Integrated with 10+ FICO internal applications for capturing and logging events, application tracking, and creating tableau reports on collected data; Collaborated and interacted with 4 cross-functional teams including clients, technical writers, user designers and quality assurance team on $6 MM web-based consumer portal',
                            'Performed Natural Language Processing, Modelling and Sentimental Analysis on Equity research reports integrated with FICO Score Platform for generating consumer risk score with 93% accuracy.'
                        ]} 
                    />
                    <ResumeItem 
                        year={'July 2020 - June 2021'} 
                        title={'Software Engineering - Associate'}
                        subTitle={'FICO'}
                        text={[
                            'Proposed and developed features for a Data Analytics Platform named FICO Analytics Workbench supporting Visual Data Exploration, Fairness Detection, Drag and drop ML modelling using Big Data, ML and Software Engineering',
                            'Built and deployed AI-powered autonomic auto-scaling prediction model; Created REST APIs for cloud resource provisioning using Neural networks and Ensemble methods used to generate optimized resource configuration for dynamically provisioning up cloud resources; 96% model accuracy; Reduced overall AWS Billing Cost by $5MM.'
                        ]} 
                    />
                    <ResumeItem 
                        year={'Mar 2019 - June 2020'} 
                        title={'Software Engineering - Intern'}
                        subTitle={'FICO'}
                        text={['Developed a microservice architecture-based software framework from scratch under FICO Platform supporting execution of Batch Jobs, Data Streaming Jobs, Data Pipelines and dynamic provisioning of Cloud Resources on AWS.',
                        'Worked on Performance Optimization, Code Coverage, Unit Testing of Software and resolved 100+ Jira Defects with zero backlogs.']} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Sep 2021 - Dec 2022'} 
                        title={'MS in Data Science (Under Computer Science)'}
                        subTitle={'Columbia University in the city of New York'}
                        text={'Coursework: Advanced Data Structures and Algorithms, Neural Networks and Deep Learning (Research-Based), Reinforcement Learning, Probability, Statistics and Inference Modelling, Exploratory Data Analytics and Visualization.'} 
                    />
                    <ResumeItem 
                        year={'Jul 2016 - Jun 2020'} 
                        title={'B.Tech in Computer Science'}
                        subTitle={'Chitkara University (GPA: 9.64/10)'}
                        text={'Coursework: Data Structures and Algorithms, Cloud and Distributed Computing, Software Engineering, Statistics, Machine Learning, Database Management Systems, Operating Systems, Discrete Mathematics, Engineering Mathematics.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
