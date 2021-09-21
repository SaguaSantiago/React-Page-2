
import React,{useState,useEffect} from "react"
import TextField from "@material-ui/core/TextField"
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import axios from "axios"
import { Paper } from "@material-ui/core"
import { object, inputs } from "./Objects"
import InputsForm from "./InputsForm"

const useStyle = makeStyles({
  buttonContainer: {
    paddingBottom: "50px",
    paddingTop: "30px",
  },
})

const Form = () => {



  const classes = useStyle()

  const [Country, setCountry] = useState()
  const [City, setCity] = useState()

  const [Weather, setWeather] = useState({
    Country: object.countries,
    City: object.cities,
  })

  const InputCountry = (event) => {
    setCountry(event.target.value)
  }

  const InputCity = (event) => {
    setCity(event.target.value)
  }

  const validation = () => {
    Weather.Country.map((item) =>
      item === Country ? console.log(item) : alert("nop")
    )


  //       // Weather.Country.map((item)=>{
  //       //   (item === Country) ? console.log(item) : alert("nop") 

  //       // })

  //       // Weather.City.map((item)=>{
  //       //   (item === City) ? console.log(item) : alert("nop")
  //       // })

  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=9b505ef2cfd503b7a5f13821a803e145`
       )
       .then((response) => console.log(response.data))
       .catch((error) => console.log(error))


      }

    useEffect(() => {

    },[])

  // return (
  //   <div>
  //     <Typography variant='h4' color='primary' gutterBottom='true'>Global Weather</Typography>
  //     <form>
  //       <br></br>
  //       <TextField
  //         id="filled-basic"
  //         label="Country / País"
  //         margin="dense"
  //         autoComplete="off"
  //         // required="true"
  //         variant="filled"
  //         color="primary"
  //         className = "Country"
  //         name = "Country"
  //         onChange = {InputCountry}  
  //       />

  //       <br></br>

  //       <TextField
  //         id="filled-basic"
  //         label="City / Ciudad"
  //         margin="dense"
  //         autoComplete="off"
  //         // required="true"
  //         variant="filled"
  //         color="primary"
  //         className = "City"
  //         name = "City" 
  //         onChange = {InputCity}

  // }
  
  return (
    <div>
      <form >
        <InputsForm
        inputs={inputs}
        margin="normal"
        autoComplete="off"
        fullWidth
        variant="filled"
        color="primary"
        className="Country"

        />
        <div className={classes.buttonContainer}>
          <Button
            color="primary"
            variant="outlined"
            size="large"
            onClick={validation}
          >
            Get Weather
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
