
import {Card,CardContent,Typography} from '@material-ui/core/';
import Info from './textfields';

function Usuaryinfo(classes){
    return (
        

        <Card className={classes.Card}> 
            
            <CardContent className={classes.item} >
            
                <Info/>
                
            </CardContent> 
            
        
        </Card>

        
    )
}

export default Usuaryinfo