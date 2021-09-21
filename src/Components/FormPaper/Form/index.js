import React, { useState } from "react"

import { Button, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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

    Weather.City.map((item) =>
      item === City ? console.log(item) : alert("nop")
    )
  }
  
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
