
import TextField from '@material-ui/core/TextField';


function info(){
        

        return (<div>
            <form>
                    <TextField id="filled-basic"  label="Country / País" margin="dense" autoComplete="off" required="true" variant="filled" color="secondary"/> <br></br>
                    <TextField id="filled-basic"  label="City / Ciudad" margin="dense" autoComplete="off" required="true" variant="filled" color="secondary"/>
            </form>
        </div>)
        
}

export default info
