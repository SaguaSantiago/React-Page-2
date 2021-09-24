import React,{useState} from "react"
import  SetOfCards  from "./Components/WeatherInfo/SetOfCards"
import FormPaper from "./Components/FormPaper"
import axios from "axios"


function App() {

  const [apiInfo, setapiInfo] = useState()
  
  const [Country, setCountry] = useState()
  const [City, setCity] = useState()

  const apiCall = () => { 
     axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units&appid=9b505ef2cfd503b7a5f13821a803e145`
         )
         .then((response) => {setapiInfo(response.data)
        console.log(response)})
        
         .catch((error) => console.log(error))
  }

  function formData(e) {
    console.log(e.target.attributes.name.value)

  if ( e.target.attributes.name.value === "country") {
    setCountry(e.target.value)
  }else{
    setCity(e.target.value)
  }
}

  return (
    <div>
      <div>
        <FormPaper apiCall={apiCall} formData={formData}/>
      </div>
      <SetOfCards/>
    </div>
  )
}

export default App
