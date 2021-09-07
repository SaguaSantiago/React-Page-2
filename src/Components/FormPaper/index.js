import React, { useState, useEffect } from "react"
import { Card, CardContent, Typography } from "@material-ui/core/"
import Form from "./Form"
import axios from "axios"

function Usuaryinfo(classes) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/onecall?lat=-33.1243872&lon=-64.4122296&units=metric&appid=91263c25ba91760faeb8f37b7d323348&lang=es&exclude=minutely,hourly,alerts"
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
    setIsLoading(false)
  }, [])

  return (
    <Card className={classes.Card}>
      {isLoading ? (
        <Typography variant="h1">Cargando</Typography>
      ) : (
        <>
          <Typography>{data ? data.timezone : null}</Typography>
          <CardContent className={classes.item}>
            <Form />
          </CardContent>
        </>
      )}
    </Card>
  )
}

export default Usuaryinfo
