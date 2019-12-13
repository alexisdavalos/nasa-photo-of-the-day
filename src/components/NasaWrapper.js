import React from "react";
import {Wrapper, Img, ImgContainer} from "./Styles";
import NasaCard from "./NasaCard";

const NasaWrapper = (props) => {
  
  // console.log(Wrapper);
    // console.log("The Object above is logging in NasaGrid.js");
    // console.log(props.nasaData); 
  // Display a loading message while the data is fetching
  // console.log(props.day);  

   console.log(props);
    if (!props.nasaData){
      return <h3>Loading...</h3>
    }else{
      return (
        <Wrapper>
          <NasaCard  date={props.date} setDate={props.setDate} day={props.day} setDay={props.setDay} nasaData={props.nasaData}/>
              <ImgContainer id="imgContainer">
                <Img  alt={`Photo: ${props.nasaData.title}`} src={props.nasaData.hdurl} />
              </ImgContainer>
        </Wrapper>
      );
    }

    // Display your component as normal after the data has been fetched
    
}

export default NasaWrapper;
