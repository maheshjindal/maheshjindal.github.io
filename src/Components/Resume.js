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
                        year={'Jan 2022 - Present'} 
                        title={'Graduate Research Assistant - Columbia Internet Real Time Computer Science Lab'}
                        subTitle={'Columbia University in the city of New York'}
                        text={['Working on the research, design and development of a distributed platform and machine learning models with Professor Henning Schulzrinne supporting the integration of IOT devices.']} 
                    />

                    <ResumeItem 
                        year={'Jan 2022 - Present'} 
                        title={'Graduate Teaching Assistant - Large Scale Stream Processing Systems'}
                        subTitle={'Columbia University in the city of New York - [Part-Time]'}
                        text={['Working as a graduate teaching assistant responsible for taking coding sessions related to distribured systems and big data, grading assignments and clarifying subject related doubts of the students.']} 
                    />
                    <ResumeItem 
                        year={'Sept 2021 - Dec 2021'} 
                        title={'Graduate Teaching Assistant - Reinforcement Learning'}
                        subTitle={'Columbia University in the city of New York - [Part-Time]'}
                        text={['Worked as a graduate teaching assistant for the Reinforcement Learning course responsible for taking coding sessions, grading assignments and clarifying subject related doubts of the students.']} 
                    />
                    <ResumeItem 
                        year={'Jun 2021 - Aug 2021'} 
                        title={'Software Engineering - Engineer I'}
                        subTitle={'FICO - [Data Science and Engineering Department]'}
                        text={[
                            'Developed an event-driven application framework (using Java, Kafka, Kubernetes APIs) to capture and monitor data events from 15+ applications. It also generates automated Tableau reports and sends alerts in case of any application malfunction. It helped in improving client services and reducing labour costs by $400000.',
                            'Worked on a sentimental analysis model (93% accuracy) using NLP and Data Modelling on equity research reports required for generating a consumer risk score.'
                        ]} 
                    />
                    <ResumeItem 
                        year={'July 2020 - June 2021'} 
                        title={'Software Engineering - Associate'}
                        subTitle={'FICO - [Data Science and Engineering Department]'}
                        text={[
                            'Worked on the backend architecture, supervised machine learning and data wrangling distributed algorithms for a $3M project named "FICO Analytics Workbench" using Java, Scala and Spark.',
                            'Designed and developed an AI-powered machine learning model using Neural Networks with ensemble methods for generating optimal AWS infrastructure resource deployment configuration. It helped in reducing overall AWS billing cost by $1M.'
                        ]} 
                    />
                    <ResumeItem 
                        year={'Mar 2019 - June 2020'} 
                        title={'Software Engineering - Intern'}
                        subTitle={'FICO - [Data Science and Engineering Department]'}
                        text={['Created RESTful web services from scratch for managing and executing Spark Batch Jobs, Data Streaming Jobs using Java, Scala, Kafka, Spring and PySpark used by 15+ internal applications supporting multiple input and output data formats (AVRO, Parquet, JSON, XML, CSV).',
                        'Worked on code refactoring, code coverage and unit testing of 4+ applications resulted in application performance improvement by 30% on average.',
                        'Debugged and resolved 60+ JIRA production issues related to various software applications raised by the product owners without any backlogs.'
                    ]}

                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'Sep 2021 - Dec 2022'} 
                        title={'M.S. in Data Science (Under Computer Science)'}
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
