import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import ShareIcon from '@material-ui/icons/Share';
import { FunctionComponent } from 'react';
import { CoffeeItemProps } from 'containers/CoffeeMenu';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});



const  OutlinedCard:FunctionComponent<CoffeeItemProps>=
({avatar,img,title,subTitle,description}) =>{
  const classes = useStyles();
 

  return (
    <Card variant="outlined">
    <CardHeader
    avatar={
      <Avatar aria-label="recipe" className={classes.avatar} src={require(`public/${avatar}?webp`)}/>
    }
    action={
      <IconButton aria-label="settings">
        <ShareIcon/>
      </IconButton>
    }
    title={title}
    subheader={subTitle}
  />
  <CardActionArea>
  <CardMedia
  className={classes.media}
  image={require(`public/${img}?webp`)}
  title={title}
/>
      <CardContent>
       
        <Typography variant="body2" component="p">
         {description}
        </Typography>
      </CardContent>
  </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained' color='primary'>BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}

export default OutlinedCard