import React from "react";
import styled from 'styled-components';
import {Badge, Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

//initialize styled-components for document structure
export const Wrapper = styled.div`
    max-width:100%;
    overflow:hidden;
    `

export const NewCard = styled(Card)`
    width:59%;
    position:absolute;
    background: #033a92f0;
`
export const NewCardTitle = styled(CardTitle)`
    color:white;
    font:1.5rem;
`
export const centerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:100%;
    padding:0.5%;
    flex-direction:column;
    `
export const Img = styled.img`
    width:100%;
    box-shadow: 5px 5px 5px #000000d4;
`
export const ImgContainer = styled.div`
    width:70%;
    padding:5%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
`




