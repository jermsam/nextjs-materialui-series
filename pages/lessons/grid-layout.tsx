import { Grid } from "@material-ui/core";
import React from "react";
import Header from "components/Header";
import CoffeeMenu from "containers/CoffeeMenu";

const items=[
    {
        id:1,
        avatar:'avatar1.jpg',
        img:'coffee1.jpg',
        title:'Main Title',
        subTitle:'Some Sub title',
        description:'On her website ToriAvey.com, Tori Avey explores the story behind the food  why we eat what we eat, how the recipes of different cultures have evolved, and how yesterdays recipes can inspire us in the kitchen today. '
    },
    {
        id:2,
        avatar:'avatar2.png',
        img:'coffee2.jpg',
        title:'Main Title',
        subTitle:'Some Sub title',
        description:'On her website ToriAvey.com, Tori Avey explores the story behind the food  why we eat what we eat, how the recipes of different cultures have evolved, and how yesterdays recipes can inspire us in the kitchen today. '
    },
    {
        id:3,
        avatar:'avatar3.png',
        img:'coffee3.jpg',
        title:'Main Title',
        subTitle:'Some Sub title',
        description:'On her website ToriAvey.com, Tori Avey explores the story behind the food  why we eat what we eat, how the recipes of different cultures have evolved, and how yesterdays recipes can inspire us in the kitchen today. '
    },
    {
        id:4,
        avatar:'avatar1.jpg',
        img:'coffee4.webp',
        title:'Main Title',
        subTitle:'Some Sub title',
        description:'On her website ToriAvey.com, Tori Avey explores the story behind the food  why we eat what we eat, how the recipes of different cultures have evolved, and how yesterdays recipes can inspire us in the kitchen today. '
    },
    {
        id:5,
        avatar:'avatar3.png',
        img:'coffee5.jpg',
        title:'Main Title',
        subTitle:'Some Sub title',
        description:'On her website ToriAvey.com, Tori Avey explores the story behind the food  why we eat what we eat, how the recipes of different cultures have evolved, and how yesterdays recipes can inspire us in the kitchen today. '
    },
    {
        id:6,
        avatar:'avatar1.jpg',
        img:'coffee6.jpg',
        title:'Main Title',
        subTitle:'Some Sub title',
        description:'On her website ToriAvey.com, Tori Avey explores the story behind the food  why we eat what we eat, how the recipes of different cultures have evolved, and how yesterdays recipes can inspire us in the kitchen today. '
    },
]

export interface CoffeeItemProps{
    id:number,
    avatar:string,
    img:string,
    title:string,
    subTitle:string,
    description:string,
  }

export default function GridLayout(){

    return (
        <Grid container direction="column">
       <Grid item>
       <Header/>
       </Grid>
       <Grid item container>
       <Grid item xs={false} sm={1} md={2}/>
        <Grid item xs={12}  sm={10} md={8}>
       <CoffeeMenu {...{items}}/>
        </Grid>
       <Grid item xs={false}  sm={1} md={2}/>
       </Grid>
        </Grid>
    )
}