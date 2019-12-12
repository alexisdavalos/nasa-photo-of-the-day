import React from "react";

const NasaCard = props => {
    // console.log("The Object above is logging in NasaGrid.js");
    // console.log(props.nasaData); 
  // Display a loading message while the data is fetching
    if (!props.nasaData){
      return <h3>Loading...</h3>
    }else{
      return (
        <div>
          <h1>{props.nasaData.title}</h1>
          <h3>{props.nasaData.date}</h3>
          <div className="imgContainer">
                  <img className="nasa-image" alt={props.nasaData} src={props.nasaData.hdurl} />
              </div>
          </div>
      );
    }

    // Display your component as normal after the data has been fetched
    
}

export default NasaCard;
