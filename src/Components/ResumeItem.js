import React from 'react'
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function ResumeItem({ year, title, subTitle, text }) {
    let itemListDetails = text;
    if (Array.isArray(itemListDetails)) {
        itemListDetails = itemListDetails.map((itemDetail, index) => {
            return <ListItem>
                <ListItemIcon>
                    <ArrowRightIcon className='list-item-icon' />
                </ListItemIcon>
                <ListItemText className='list-item-detail-text' primary={itemDetail} />
            </ListItem>
        });
    }
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                {/* <p>{text}</p> */}
                <List>
                    {itemListDetails}
                </List>
                {/* <p>
                <ul className='resume-item-detail'>
                    {itemListDetails}
                </ul>
                </p> */}
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;

    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        flex-grow: 0;
	    flex-shrink: 0;
        width: 20%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
    .list-item-icon{
        color: var(--font-light-color);    

    }
    .list-item-detail-text > span{
        color: var(--font-light-color);    
    }
`;
export default ResumeItem;
