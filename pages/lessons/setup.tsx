import { Button, Typography, makeStyles, Box } from "@material-ui/core";
import Link from 'next/link'


const useStyles = makeStyles({
    heloThereStyle:{
        fontStyle:'oblique',
        fontSize:'5rem'
    }
})

export default function Learn(){

    const classes =useStyles()

    return(
       <div>
       
     <div className="image-container">
      <img className="blur-image" src={require(`public/africa.jpg?lqip`)} />
      <img src={require(`public/africa.jpg?webp`)} />
    </div>
   <Box margin='1rem'>
   <Typography color='secondary' variant='h1' className={classes.heloThereStyle}>Hello There</Typography>
   <Button color='primary' variant='contained'>I want to see this </Button>
 <Link href='/'>
 <Button color='primary' variant='outlined'>Back home </Button>
 </Link>
   </Box>
    <style jsx>{`
        .image-container: {
          position: relative:
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
       </div>
    )
}