import React from 'react'
import styled from 'styled-components';
import resume from '../data/Resume_MaheshJindal.pdf';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="right-content">
                <p className="paragraph">
                I am Mahesh Jindal, a graduate student majoring in <i>Data Science + Computer Science</i> at <span>Columbia University</span> with an undergrad in Computer Science. I am currently focusing on Data Modelling, Machine Learning, Algorithms and developing scalable Data Intensive Intelligent Applications. I have <span>2.3 years of professional work experience</span> in multiple domains including Backend Development, Databases, Big Data Frameworks, Cloud Computing and Machine Learning.
                I have also completed <span>20+ online certifications</span> in Data Engineering and Machine Learning from online resource learning platforms like Udacity, Coursera, LinkedIn and DataCamp. I have won <span>7+ tech hackathons</span> including India's largest tech hackathon named <span>Smart India Hackathon</span> organized by Government of India. I have also received <span>3+ employee recognition awards</span> from my past employer FICO for outstanding work contributions and performance.                 
                </p>
                < a href={resume} download='Mahesh Jindal.pdf'>
                    <PrimaryButton title={'Download Resume'} />
                </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
