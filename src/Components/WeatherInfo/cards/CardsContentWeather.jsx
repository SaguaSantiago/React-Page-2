import { Typography } from '@material-ui/core';
import React from 'react';

export default function CardsContentWeather(props) {

    return(


        <div>
              <Typography color="primary" variant="subtitle1" gutterBottom="true"> {props.content1} </Typography>
        
              <Typography variant="overline"> {props.content2} </Typography>
      
        </div>


    )
}


