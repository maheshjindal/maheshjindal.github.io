import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import code from '../img/code.svg';
import databases from '../img/databases.svg';
import bigdata from '../img/bigdata.svg';
import cloudcomputing from '../img/cloudcomputing.svg';
import others from '../img/others.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'MY SKILLS'} span={'skills'} />
                <div className="services">
                <ServiceCard 
                        image={code} 
                        title={'Programming Languages'} 
                        skills={
                            {
                                "Java":"https://www.java.com", 
                                "Python":"https://www.python.com", 
                                "Scala":"https://www.scala-lang.org/", 
                                "SQL": "https://www.mysql.com/",
                                "R":"https://www.r-project.org/",
                                "C++": "https://www.cplusplus.com/",
                                "CSS": "https://www.w3.org/Style/CSS/",
                                "HTML":"https://html.spec.whatwg.org/multipage/", 
                                "JavaScript":"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                                "JSON": "https://www.json.org/json-en.html",
                                "XML": "https://developer.mozilla.org/en-US/docs/Web/XML",
                                "LaTeX": "https://www.latex-project.org/"
                                }
                            }
                    />
                    <ServiceCard 
                        image={databases} 
                        title={'Databases'} 
                        skills={
                            {
                                "MySQL":"https://www.mysql.com/", 
                                "PostGres SQL":"https://www.postgresql.org/", 
                                "DynamoDb":"https://aws.amazon.com/dynamodb/", 
                                "H2": "https://www.h2database.com/html/main.html",
                                "Google Firebase": "https://firebase.google.com/",
                                "Avro": "https://avro.apache.org/docs/current/",
                                "Parquet": "https://parquet.apache.org/documentation/latest/"

                                }
                                
                            }
                    />
                    <ServiceCard 
                        image={bigdata} 
                        title={'Big Data Frameworks'} 
                        skills={
                                {
                                "Apache Spark": "https://spark.apache.org/",
                                "Kafka Ecosystem": "https://kafka.apache.org/",
                                "Hadoop": "https://hadoop.apache.org/",
                                "Apache Airflow": "https://airflow.apache.org/"

                                }
                            }
                    />
                    <ServiceCard 
                        image={design} 
                        title={'Application Development Frameworks'} 
                        skills={
                                {
                                "Spring Ecosystem": "https://spring.io/projects",
                                "Flask": "https://flask.palletsprojects.com/en/2.0.x/",
                                "Bootstrap": "https://getbootstrap.com/",
                                "React": "https://reactjs.org/",
                                "Scalatra": "https://scalatra.org/",
                                "Mockito": "https://site.mockito.org/",
                                "PowerMock": "https://github.com/powermock/powermock",
                                "Tomcat": "https://tomcat.apache.org/",
                                "Hibernate": "https://hibernate.org/"
                                }
                            }
                    />

                    <ServiceCard 
                            image={intelligence} 
                            title={'Data Analytics and Machine Learning'} 
                            skills={
                                {
                                "Scikit Learn": "https://scikit-learn.org/stable/",
                                "Spacy": "https://spacy.io/",
                                "PyTorch": "https://pytorch.org/",
                                "NLTK": "https://www.nltk.org/",
                                "Numpy": "https://numpy.org/",
                                "Pandas": "https://pandas.pydata.org/",
                                "Matplotlib": "https://matplotlib.org/",
                                "Seaborn": "https://seaborn.pydata.org/",
                                "ggplot": "https://ggplot2.tidyverse.org/index.html",
                                "Tableau": "https://www.tableau.com/",
                                "D3.js": "https://d3js.org/"

                                }
                            }
                        />
                    <ServiceCard 
                        image={cloudcomputing} 
                        title={'Cloud Computing'} 
                        skills={
                           { "AWS": "https://aws.amazon.com/",
                            "GCP": "https://cloud.google.com/",
                            "Kubernetes": "https://kubernetes.io/",
                            "Docker": "https://www.docker.com/",
                            "Openshift Container Platform": "https://docs.openshift.com/",
                            }
                        }                    
                    />
                    <ServiceCard 
                        image={others} 
                        title={'Others'} 
                        skills={
                           { "Git": "https://git-scm.com/",
                            "Github": "https://github.com/",
                            "Intelli J Idea": "https://www.jetbrains.com/idea/",
                            "Bash Scripting": "https://tldp.org/LDP/abs/html/",
                            "Jira": "https://www.atlassian.com/software/jira",
                            "Jupyter Notebook": "https://jupyter.org/",
                            "Maven": "https://maven.apache.org/",
                            "MS Office": "https://www.office.com/",
                            "Unix": "https://www.opengroup.org/membership/forums/platform/unix",
                            "Linux": "https://www.kernel.org/",
                            "Windows": "https://www.microsoft.com/en-in/windows",

                            }
                        }                    
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        grid-auto-rows: 1fr;

        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
