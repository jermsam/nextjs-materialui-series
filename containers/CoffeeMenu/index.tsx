
import { Grid } from '@material-ui/core';
import OutlinedCard from 'components/OutlinedCard';


export interface CoffeeItemProps{
  id:number,
  avatar:string,
  img:string,
  title:string,
  subTitle:string,
  description:string,
}

type CoffeeMenuProps={
  items:CoffeeItemProps[]
}

export default function CoffeeMenu({items}:CoffeeMenuProps){

    return (
      <Grid container spacing={4} style={{margin:'10px'}}>
     {
       items.map((item)=> <Grid item md={4} key={item.id}>
       <OutlinedCard {...item}/>
       </Grid>)
     }
      </Grid>
    )
}