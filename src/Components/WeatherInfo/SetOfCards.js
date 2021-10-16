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

export default function SetOfCards( props ){

    const classes = useStyle()


    return(<div className={classes.flexContainer}>
    <WeatherInfo content={props.temp}/>
    <WeatherInfo content={props.tempMin}/>
    <WeatherInfo content={props.tempMax}/>
    <WeatherInfo content={props.preasure}/>
    <WeatherInfo content={props.humidity}/>
    <WeatherInfo content={props.description}/>



  </div>)
}