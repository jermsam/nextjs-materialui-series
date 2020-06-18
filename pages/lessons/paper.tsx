import { Box, Typography,Paper } from "@material-ui/core";
import Header from "components/Header";


export default function PaperPage(){

    return(
        <Box>
        <Header/>
        <Paper elevation={0} square>
        <Typography>This world</Typography>
        </Paper>
        </Box>
    )
}