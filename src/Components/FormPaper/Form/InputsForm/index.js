import React from "react"
import {  TextField, Grid } from "@material-ui/core"

export default function InputsForm( props ) {
 
    //   desestructurar
  const { inputs } = props

  return (
    <Grid container justifyContent="center">
      {inputs.map((item) => (
        <Grid item sm={8} >
          <TextField
            id="filled-basic"
            label={item.label}
            name={item.name}
            {...props}
          />
        </Grid>
      ))}
    </Grid>
  )
}
