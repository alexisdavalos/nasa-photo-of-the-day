import React from "react";
import * as Styled from "./Styles";
import NasaCard from "./NasaCard";
import { Button} from 'reactstrap';

const NasaWrapper = props => {
  
  // console.log(Styled.Wrapper);
    // console.log("The Object above is logging in NasaGrid.js");
    // console.log(props.nasaData); 
  // Display a loading message while the data is fetching
  console.log(props.day);  
  const addDay = () =>{
      // console.log(props.day+1)
      props.setDay(props.day+1)
    }
    const minusDay = () =>{
      // console.log(props.day+1)
      props.setDay(props.day-1)
    }
   
    if (!props.nasaData){
      return <h3>Loading...</h3>
    }else{
      return (
        <Styled.Wrapper>
          <Styled.centerContainer>
            <Styled.centerContainer style={{margin:"0", flexDirection:"row"}}>
              <Button onClick={() => minusDay()}>Last</Button>
              <Styled.ImgContainer id="imgContainer">
                <NasaCard nasaData={props.nasaData}/>
                <Styled.Img  alt={`Photo: ${props.nasaData.title}`} src={props.nasaData.hdurl} />
              </Styled.ImgContainer>
              <Button onClick={() => addDay()}>Next</Button>
            </Styled.centerContainer>
          </Styled.centerContainer>
        </Styled.Wrapper>
      );
    }

    // Display your component as normal after the data has been fetched
    
}

export default NasaWrapper;
