import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Mahesh Jindal</span></h1>
                <p>
                I am into <span class='emphasise'>Data Science</span>, <span class='emphasise'>Software Engineering</span> and <span class='emphasise'>Artificial Intelligence</span> with a keen eye for developing Data Intensive Scalable Software and Intelligent Systems. 
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/maheshjindal/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.github.com/maheshjindal" className="icon i-github">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid blue;
                    color: blue;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
        h1>span{
            color: var(--emphasize-color);
        }
        p{
            font-size: 1.2em;
            color: var(--white-color);
            .emphasise{
                margin-left: 4px;
                color: var(--primary-color);
            }
        }
    }
`;

export default HomePage;
