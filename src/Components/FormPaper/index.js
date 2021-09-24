import React from "react"
import Form from "./Form"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles({
  paperContainer: {
    maxWidth: "600px",
    textAlign: "center",
    padding: "20px",
    margin: "auto",
    marginBottom: "0px",
    paddingBottom: "20px",
  },
  ubicationForm: {
    paddingBottom: "9px",
    paddingTop: "30px",
  },
})

function Usuaryinfo(props) {


  const classes = useStyle()

  return (
    <div className={classes.paperContainer}>
      <Paper elevation={6}>
        <>
          <div className={classes.ubicationForm}>
            <Form onClick={props.apiCall} onChange={props.formData}/>
          </div>
        </>
      </Paper>
    </div>
  )
}

export default Usuaryinfo
