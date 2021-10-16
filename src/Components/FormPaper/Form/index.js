
import React from "react"
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import DataValidation from "./Error/Validation"
import { inputs } from "./Objects"
import InputsForm from "./InputsForm"

const useStyle = makeStyles({
  buttonContainer: {
    paddingBottom: "50px",
    paddingTop: "30px",
  },
})

const Form = (props) => {

  const propierty = props
  const classes = useStyle()

  
  return (
    <div>
      <Typography 
      variant='h4' 
      color='primary' 
      gutterBottom={true}>
        Global Weather
      </Typography>
      
      <form >
        <InputsForm
        inputs={inputs}
        margin="normal"
        autoComplete="off"
        fullWidth
        variant="filled"
        color="primary"
        onChange={ propierty.onChange }

        />

    { props.validation ? <div><DataValidation /></div> : null }   

        <div className={classes.buttonContainer}>
          <Button
            color="primary"
            variant="outlined"
            size="large"
            onClick= {propierty.onClick}

            // onClick={ props.cards } 
          >
            Get Weather
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
