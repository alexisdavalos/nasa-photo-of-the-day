import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaCard from "./components/NasaCard";


function App() {

  const [nasaData, setNasaData] = useState([]);
  // const [nasaDate, setNasaDate] = useState();
  // const [nasaLink, setNasaLink] = useState();

  useEffect(() =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=psGJ8gLV847C4v9629kO7nb9deJj538YGwj7hsSW')
      .then(response =>{
        //set response to nasaData
        setNasaData(response.data);
        // setNasaDate(response.data.date);
        // setNasaLink(response.data.hdurl);
        // console.log(response.data.hdurl);
      })
      .catch(error =>{
        console.log("The data was not returned from the API", error)
      })
  },[])
// console.log(nasaData);
// console.log("The Object above is logging in App.js");
// console.log(nasaData); 
  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <NasaCard nasaData={nasaData}/>
    </div>
  );
}

export default App;
