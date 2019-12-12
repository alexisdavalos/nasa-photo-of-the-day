import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaCard from "./components/NasaWrapper";


function App() {

  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState("");
 
  // console.log(end);
  useEffect(() =>{

  },[])
  useEffect(() =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=psGJ8gLV847C4v9629kO7nb9deJj538YGwj7hsSW')
      .then(response =>{
        //set Axios response to nasaData
        setNasaData(response.data);
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
