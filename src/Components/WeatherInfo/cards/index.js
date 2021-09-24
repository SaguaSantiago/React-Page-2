import React from 'react'
import { Card, CardContent,makeStyles } from '@material-ui/core'

const useStyle = makeStyles({

    Card: {
        minWidth: "100px",
        minHeight: "100px",
        margin: "auto",
        boxSizing: "content-box"
    },

    CardContent: {
        width : "100%",
        height : "100%",
        textAlign: "center",
        padding: "16px 0px",
        fontSize: "1.5em"
    },
    Description: {
        marginBottom: "5px"
    },

    Info : {
        marginBottom: "3px"
    }
})

export default function WeatherInfo (props) {

    const specification = props

    const classes = useStyle()

    return(
        <div>
            <Card raised="true" className={classes.Card}>
                <CardContent className={classes.CardContent}>
                a
                </CardContent>
            </Card>
        </div>


    )
}