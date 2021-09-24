import React from "react"
import { makeStyles } from "@material-ui/core"
import WeatherInfo from "./cards/index"

const useStyle = makeStyles({
    flexContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "700px",
        margin: "auto",
      }
})

export default function SetOfCards(){

    const classes = useStyle()


    return(
    
    <div className={classes.flexContainer}>
    <WeatherInfo/>
    <WeatherInfo/>
    <WeatherInfo/>
    <WeatherInfo/>
  </div>)
}