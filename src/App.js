import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import NasaWrapper from "./components/NasaWrapper";


function App() {
  //yyyy-mm-dd format
  const [nasaData, setNasaData] = useState([]);
  const [year] = useState(moment().year());
  const [month] = useState(moment().month()+1);
  const [day, setDay] = useState(moment().date());
  const [date, setDate] = useState(`${year}-${month}-${day}`)
 
  // console.log(end);  
 
  // console.log(`${year}-${month}-${day}`);
  // console.log(moment().year(year).month(month).date(day))
  // console.log(nasaData);
  useEffect(() =>{    
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=ifBq7GiGfdakHrxlIWrxNkD7D03nIj2DXRHEocKa&date=${date}`)
      .then(response =>{
        //set Axios response to nasaData
        setNasaData(response.data);
      })
      .catch(error =>{
        console.log("The data was not returned from the API", error)
      })
  },[date])
// console.log(nasaData.date);
// console.log("The Object above is logging in App.js");
// console.log(nasaData); 
  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <NasaWrapper day={day} setDay={setDay} date={date} setDate={setDate} nasaData={nasaData}/>
    </div>
  );
}

export default App;
