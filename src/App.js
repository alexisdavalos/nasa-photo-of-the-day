import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import NasaWrapper from "./components/NasaWrapper";


function App() {
  //yyyy-mm-dd format
  const [nasaData, setNasaData] = useState([]);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
 
  // console.log(end);
  useEffect(() =>{
    let year = moment().year(); //grab current year
    let nasaYear = moment(year); //pass moment object to nasaYear
    setYear(nasaYear._i); //updates useState of year to nasaYear

    let month = moment().month(); //grab current month
    let nasaMonth = moment(month); //pass moment object to nasaMonth
    setMonth(nasaMonth._i); //updates useState of year to nasaMonth

    let day = moment().date();//grab current day
    let nasaDay = moment(day);//pass day object into nasaDay
    setDay(nasaDay._i) //updates useState of day to nasaDay
    
  },[])
  console.log(`${year}-${month}-${day}`);
  // console.log(moment().year(year).month(month).date(day))
  // console.log(nasaData);
  useEffect(() =>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=ifBq7GiGfdakHrxlIWrxNkD7D03nIj2DXRHEocKa&date=${year}-${month}-${day}`)
      .then(response =>{
        //set Axios response to nasaData
        setNasaData(response.data);
      })
      .catch(error =>{
        console.log("The data was not returned from the API", error)
      })
  },[day,month,year])
// console.log(nasaData.date);
// console.log("The Object above is logging in App.js");
// console.log(nasaData); 
  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <NasaWrapper day={day} setDay={setDay} nasaData={nasaData}/>
    </div>
  );
}

export default App;
