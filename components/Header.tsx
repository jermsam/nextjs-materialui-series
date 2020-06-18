import { AppBar, Typography, Toolbar, IconButton, makeStyles, Box } from "@material-ui/core";
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'

const useStyles = makeStyles({

    titleStyle:{
        flex: 1,
    }
    
})

export default function Header(){

    const classes =useStyles()

    return(
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h4" className={classes.titleStyle}>
        Coffee Shop
        </Typography>
    
        <Link href='/'>
        <IconButton color='inherit' >
        <HomeIcon/>
        </IconButton>
        </Link>
       

      <IconButton color='inherit' >
      <RingVolumeIcon/>
      </IconButton>
     
        </Toolbar>
        </AppBar>
    )
}