import { Box, Typography,Paper } from "@material-ui/core";
import Header from "components/Header";
import React from "react";


export default function PaperPage(){

    return(
        <Paper style={{height: '100%'}}>
        <Header/>
        <Paper elevation={0} square>
        <Typography>This world</Typography>
        </Paper>
        </Paper>
    )
}