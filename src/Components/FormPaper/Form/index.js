import React from "react"

import TextField from "@material-ui/core/TextField"




const Form = () => {
  return (
    <div>
      <form>
        <TextField
          id="filled-basic"
          label="Country / País"
          margin="dense"
          autoComplete="off"
          required="true"
          variant="filled"
          color="secondary"
        />
        <TextField
          id="filled-basic"
          label="City / Ciudad"
          margin="dense"
          autoComplete="off"
          required="true"
          variant="filled"
          color="secondary"
        />
      </form>
      
    </div>
  )
}

export default Form
