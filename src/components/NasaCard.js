import React, {useState} from "react";
import * as Styled from "./Styles";
import moment from "moment";
import {Badge, Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const NasaCard = (props) =>{
    console.log(props);
    const [isOpen, setisOpen] = useState(false);
    const secondToggle = () => setisOpen(!isOpen)
    const todaysDate = `${moment().year()}-${moment().month()+1}-${moment().date()}`
    const addDay = () =>{
        // console.log(props.day+1)
        props.setDay(props.day+1)
      }
      const minusDay = () =>{
        // console.log(props.day+1)
        props.setDay(props.day-1)
      }
      const date = (event) =>{

        props.setDate(event.target.previousSibling.value)
        console.log(props.date)
      }

    return (
        <Styled.NewCard>
                 <Button onClick={() => minusDay()}>Last</Button>
                <CardBody> 
                    <div>
                        <img alt="Nasa"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/200px-NASA_Worm_logo.svg.png"></img>
                    </div>
                    <Styled.NewCardTitle>{`${props.nasaData.title} `}<Badge color="secondary">APOD</Badge></Styled.NewCardTitle>
                    <CardSubtitle><a href={props.nasaData.url} target="_empty">Original Image</a></CardSubtitle>
                    <CardSubtitle style={{color:"white"}}>{`Date: ${props.nasaData.date}`}</CardSubtitle>
                    <Button onClick={secondToggle}>Learn More</Button>
                    <Collapse isOpen={isOpen}>
                    <CardText style={{color:"white"}}>{props.nasaData.explanation}</CardText>
                    </Collapse>
                    <input type="date"
                           name="date"
                           min="1995-06-16"
                           max={todaysDate}
                    ></input>
                    <Button onClick={date}>Go</Button>
                </CardBody>
                <Button onClick={() => addDay()}>Next</Button>
        </Styled.NewCard>
    )
}

export default NasaCard;