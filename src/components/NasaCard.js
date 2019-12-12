import React, {useState} from "react";
import * as Styled from "./Styles";
import {Badge, Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const NasaCard = (props) =>{
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => setisOpen(!isOpen)
    return (
        <Styled.NewCard>
                    <CardBody> 
                      <div>
                        <img alt="Nasa"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/200px-NASA_Worm_logo.svg.png"></img>
                      </div>
                      <Styled.NewCardTitle>{`${props.nasaData.title} `}<Badge color="secondary">APOD</Badge></Styled.NewCardTitle>
                      <CardSubtitle><a href={props.nasaData.url} target="_empty">Original Image</a></CardSubtitle>
                      <CardSubtitle style={{color:"white"}}>{`Date: ${props.nasaData.date}`}</CardSubtitle>
                      <Button onClick={toggle}>Learn More</Button>
                      <Collapse isOpen={isOpen}>
                        <CardText style={{color:"white"}}>{props.nasaData.explanation}</CardText>
                      </Collapse>
                    </CardBody>
                </Styled.NewCard>
    )
}

export default NasaCard;