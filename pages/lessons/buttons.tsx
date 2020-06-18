
import { Button, Typography, makeStyles, Box, Toolbar, AppBar, IconButton, Paper } from "@material-ui/core";
import Link from 'next/link'
import classNames from 'classnames'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(
  theme=>({
    heloThereStyle:{
        fontStyle:'oblique',
        fontSize:'5rem',
        [theme.breakpoints.down('sm')]:{
          fontSize:'2rem',
          fontStyle:'bold'
        }
    },
    contentStyle:{
      marginTop:'4rem'
    },
    logoStyle:{
     [theme.breakpoints.down('xs')]:{
      width: '25%',
     height: '10%',
     padding: '10'
     }
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
})
)

export default function Learn(){

    const classes =useStyles()

    return(
       <Paper style={{height: '100%'}}>
       <AppBar position='static' >
       <Toolbar >
       <Typography variant='h4'>
      See
       </Typography>
       </Toolbar>
       </AppBar>
     <Box className={classNames("image-container",classes.logoStyle)}>
      <img className="blur-image" src={require(`public/africa.jpg?lqip`)} />
      <img src={require(`public/africa.jpg?webp`)} />
    </Box>
   <Box margin='1rem' className={classes.contentStyle}>
   <Typography gutterBottom color='secondary' variant='h1' className={classes.heloThereStyle}>Hello There</Typography>
   <Button color='primary' variant='contained'>ACTION </Button>
 <Link href='/'>
 <Button color='primary' variant='outlined'>Back home </Button>
 </Link>
   </Box>
   <div className={classes.root}>
  
   <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
   <label htmlFor="icon-button-file">
     <IconButton color="primary" aria-label="upload picture" component="span">
       <PhotoCameraIcon/>
     </IconButton>
   </label>
 </div>
    <style jsx>{`
        .image-container: {
          position: relative;
        }
        .blur-image img {
          blur(7rem);
          width: 30%;
          height: 20%;
        }
        img {
          position: absolute;
          width: 30%;
          height: 20%;
          top: 0;
          right: 0;
        }
    `}</style>
       </Paper>
    )
}