import styled from 'styled-components';
import {Card, CardTitle} from 'reactstrap';

//initialize styled-components for document structure
export const Wrapper = styled.div`
    max-width:100%;
    overflow:hidden;
    display:flex;
    `

export const NewCard = styled(Card)`
    width:25%
    height:100vh;
    background: #033a92f0;
    display:flex;
    flex-direction:column;
    
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
    flex-direction:column;
    `
export const Img = styled.img`
    width:100%
    height:100vh;
    box-shadow: 5px 5px 5px #000000d4;
`
export const ImgContainer = styled.div`
    width:100%;
`




