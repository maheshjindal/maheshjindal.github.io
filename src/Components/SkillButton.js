import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';

function SkillButton({name, link}) {
    return (
        <SkillButtonStyled>
            <Button className = 'skill-btn' variant="contained" href={link}>
                {name}
            </Button>
        </SkillButtonStyled>
    )
}

const SkillButtonStyled = styled.div`
    &{
        margin: 0.2rem;

    }
    .skill-btn{
        transition: all .4s ease-in-out;
        cursor: pointer;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        background-color: var(--background-dark-grey);
    }
    .skill-btn{
        &:hover{
            background-color: var(--primary-color);
            color: var(--white-color);
        }
    }
`;

export default SkillButton;
