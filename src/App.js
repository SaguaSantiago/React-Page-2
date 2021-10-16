import React,{useState, useEffect} from "react"
import  SetOfCards  from "./Components/WeatherInfo/SetOfCards"
import FormPaper from "./Components/FormPaper"
import axios from "axios"
import CardsContentWeather from "./Components/WeatherInfo/cards/CardsContentWeather"



function App() {

  
  const [Country, setCountry] = useState()
  const [City, setCity] = useState()
  const [apiInfo, setapiInfo] = useState()
  const [cards,setcards] = useState(false)


  const [Temp,setTemp] = useState()
  const [TempMin,setTempmin] = useState()
  const [TempMax,setTempMax] = useState()
  const [humidity,sethumidity] = useState()
  const [description,setdescription] = useState()
  const [preasure,setpreasure] = useState()
  const [validation,setvalidation] = useState(false)


  const apiCall = () => { 

    setvalidation(false)

     axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units&appid=9b505ef2cfd503b7a5f13821a803e145`
         )
         .then((response) => {setapiInfo(response.data)
        // console.log(apiInfo)
      })
        
         .catch((error) => setvalidation(true))

         setcards(false)

        
  }

  useEffect(
    ()=>{

      if (cards === false && apiInfo !== undefined) {


        setcards(true)

        setTemp(
            <CardsContentWeather content1= {apiInfo.main.temp_min.toFixed() - 273 + "ºC"}  content2="Temperature"/>
            )

        setTempMax(

          <CardsContentWeather content1= {apiInfo.main.temp_max.toFixed() - 273 + "ºC"}  content2="Temp. max."/>
        )

        setTempmin(

          <CardsContentWeather content1= {apiInfo.main.temp_min.toFixed() - 273 + "ºC"}  content2="Temp. min."/>
        )

        sethumidity(

          <CardsContentWeather content1= {apiInfo.main.humidity + "%"}  content2="Humidity"/>
        )

        setdescription(

          <CardsContentWeather content1= {apiInfo.weather[0].description}  />
        )

        setpreasure(

          <CardsContentWeather content1= {apiInfo.main.pressure + "hPa"} content2="Pressure" />
        )
      
        setapiInfo()
      } 
    }
  )

  function formData(e) {
    // console.log(e.target.attributes.name.value)

  if ( e.target.attributes.name.value === "country") {
    setCountry(e.target.value)
  }else{
    setCity(e.target.value)
  }
}

  return (
    <div>
      <div>
        <FormPaper validation={validation} apiCall={apiCall}  formData={formData}/>
      </div>
      
      {cards === true ? <SetOfCards apiInfo = {apiInfo} temp = {Temp} tempMax = {TempMax} tempMin = {TempMin} humidity = {humidity} description = {description} preasure = {preasure}/> : null} 
    </div>
  )
}


export default App
