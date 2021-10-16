

import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles({

    text: {
        color: "#f00",
        marginBottom: "30px",
        // marginTop: "-30px"
        fontFamily: "Helvetica, sans-serif",
        letterSpacing: "1px",
    }
})



export default function DataValidation () {

    const classes = useStyle()

    return(
        <div>
            <Typography className={classes.text} variant="body">
                INVALID INFORMATION
            </Typography>
        </div>
    )
}