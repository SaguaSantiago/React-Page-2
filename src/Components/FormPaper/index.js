import React, { useState, useEffect } from "react"
import { Typography, Button } from "@material-ui/core/"
import Form from "./Form"
import axios from "axios"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles({
  paperContainer: {
    maxWidth: "600px",
    textAlign: "center",
    padding: "20px",
    margin: "auto",
    height: "600px",
    paddingBottom: "20px",
  },
  ubicationForm: {
    paddingBottom: "9px",
    paddingTop: "30px",
  },
})

function Usuaryinfo() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // axios
    //   .get(
    //     `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API key}`
    //   )
    //   .then((response) => setData(response.data))
    //   .catch((error) => console.log(error))
    // setIsLoading(false)
  }, [])

  const classes = useStyle()

  return (
    <div className={classes.paperContainer}>
      <Paper elevation={6}>
        <>
          <div className={classes.ubicationForm}>
            <Form />
          </div>
        </>
      </Paper>
    </div>
  )
}

export default Usuaryinfo
