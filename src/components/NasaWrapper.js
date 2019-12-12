import React, {useState} from "react";
import * as Styled from "./Styles";
import NasaCard from "./NasaCard";
import {Badge, Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const NasaWrapper = props => {
  //toggle useState
  
  console.log(Styled.Wrapper);
    // console.log("The Object above is logging in NasaGrid.js");
    // console.log(props.nasaData); 
  // Display a loading message while the data is fetching
    if (!props.nasaData){
      return <h3>Loading...</h3>
    }else{
      return (
        <Styled.Wrapper>
          <Styled.centerContainer>
            <Styled.centerContainer style={{margin:"0", flexDirection:"row"}}>
              <Button>Last</Button>
              <Styled.ImgContainer id="imgContainer">
                <NasaCard nasaData={props.nasaData}/>
                <Styled.Img  alt={`Photo: ${props.nasaData.title}`} src={props.nasaData.hdurl} />
              </Styled.ImgContainer>
              <Button>Next</Button>
            </Styled.centerContainer>
          </Styled.centerContainer>
        </Styled.Wrapper>
      );
    }

    // Display your component as normal after the data has been fetched
    
}

export default NasaWrapper;
