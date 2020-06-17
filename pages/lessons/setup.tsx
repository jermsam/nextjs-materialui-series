import { Button, Typography, makeStyles } from "@material-ui/core";
import Link from 'next/link'

const useStyles = makeStyles({
    heloThereStyle:{
        fontStyle:'oblique'
    }
})

export default function Learn(){

    const classes =useStyles()

    return(
       <div>
       <Typography color='secondary' variant='h1' className={classes.heloThereStyle}>Hello There</Typography>
       <Button color='primary' variant='contained'>I want to see this </Button>
     <Link href='/'>
     <Button color='primary' variant='outlined'>Back home </Button>
     </Link>
       </div>
    )
}