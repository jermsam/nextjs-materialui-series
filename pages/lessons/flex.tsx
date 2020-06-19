import { Grid, Paper, makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box, Typography, Divider } from "@material-ui/core";
import React from "react";
import Header from "components/Header";


export interface CoffeeItemProps{
    id:number,
    avatar:string,
    img:string,
    title:string,
    subTitle:string,
    description:string,
 
  }

  const useStyles = makeStyles({
      tableContainer:{
          height:'100%',

      },
      table:{
        justifySelf:'center'
      },
      tableDescription:{
        
          paddingLeft:'30px',
      }
  })

export default function GridLayout(){

    const classes =useStyles()

    return (
       
       
        <Paper className={classes.tableContainer}  >
        <Header/>
        {/** flex direction row */}
        
        <Box  p={1}   display='flex' flexDirection='row' alignItems='center'>
        <Box m={1}>
        <Typography  color='primary' variant='h4'> flex-direction:row</Typography>
        </Box> 
          
         <Box m={1} >
         <Typography color='secondary' variant='h5'>justifyContent:flex-start; </Typography>
         </Box>
    </Box>
<Box display="flex" flexDirection="row" p={1} m={1} bgcolor="grey.100">
      <Box p={1} bgcolor="grey.500" color="white">
        Item 1
      </Box>

      <Box p={1} bgcolor="grey.700" color="white">
      Item 2
      </Box>

      <Box p={1} bgcolor="grey.900" color="white">
      Item 3
      </Box>
</Box>

{/** justifyContent */}


<Box  p={1}   display='flex' flexDirection='row' >
      <Box m={1}>
      <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
      </Box> 
        
       <Box m={1} >
       <Typography color='secondary' variant='h5'>justifyContent:flex-end; </Typography>
       </Box>
 </Box>
<Box display="flex" flexDirection="row" p={1} m={1} bgcolor="grey.100" justifyContent='flex-end'>
      <Box p={1} bgcolor="grey.500" color="white">
        Item 1
      </Box>

      <Box p={1} bgcolor="grey.700" color="white">
      Item 2
      </Box>

      <Box p={1} bgcolor="grey.900" color="white">
      Item 3
      </Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
      <Box m={1}>
      <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
      </Box> 
        
       <Box m={1} >
       <Typography color='secondary' variant='h5'>justifyContent:center; </Typography>
       </Box>
 </Box>
<Box display="flex" flexDirection="row" p={1} m={1} bgcolor="grey.100" justifyContent='center'>
      <Box p={1} bgcolor="grey.500" color="white">
        Item 1
      </Box>

      <Box p={1} bgcolor="grey.700" color="white">
      Item 2
      </Box>

      <Box p={1} bgcolor="grey.900" color="white">
      Item 3
      </Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
      <Box m={1}>
      <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
      </Box> 
        
       <Box m={1} >
       <Typography color='secondary' variant='h5'>justifyContent:space-between; </Typography>
       </Box>
 </Box>
<Box display="flex" flexDirection="row" p={1} m={1} bgcolor="grey.100" justifyContent='space-between'>
      <Box p={1} bgcolor="grey.500" color="white">
        Item 1
      </Box>

      <Box p={1} bgcolor="grey.700" color="white">
      Item 2
      </Box>

      <Box p={1} bgcolor="grey.900" color="white">
      Item 3
      </Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
      <Box m={1}>
      <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
      </Box> 
        
       <Box m={1} >
       <Typography color='secondary' variant='h5'>justifyContent:space-around; </Typography>
       </Box>
 </Box>
<Box display="flex" flexDirection="row" p={1} m={1} bgcolor="grey.100" justifyContent='space-around'>
      <Box p={1} bgcolor="grey.500" color="white">
        Item 1
      </Box>

      <Box p={1} bgcolor="grey.700" color="white">
      Item 2
      </Box>

      <Box p={1} bgcolor="grey.900" color="white">
      Item 3
      </Box>
</Box>
 <Divider/>
 <Divider/>
      {/** flex direction row-reverse */}
     
      <Box  p={1}   display='flex' flexDirection='row' alignItems='center'>
    <Box m={1} >
    <Typography color='primary' variant='h4'> flex-direction:row-reverse</Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:flex-start; </Typography>
     </Box>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="grey.100">
    <Box p={1} bgcolor="grey.500" color="white">
      Item 1
    </Box>

    <Box p={1} bgcolor="grey.700" color="white">
    Item 2
    </Box>

    <Box p={1} bgcolor="grey.900" color="white">
    Item 3
    </Box>
</Box>

{/** justifyContent */}

<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:flex-end; </Typography>
     </Box>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="grey.100" justifyContent='flex-end'>
    <Box p={1} bgcolor="grey.500" color="white">
      Item 1
    </Box>

    <Box p={1} bgcolor="grey.700" color="white">
    Item 2
    </Box>

    <Box p={1} bgcolor="grey.900" color="white">
    Item 3
    </Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:center; </Typography>
     </Box>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="grey.100" justifyContent='center'>
    <Box p={1} bgcolor="grey.500" color="white">
      Item 1
    </Box>

    <Box p={1} bgcolor="grey.700" color="white">
    Item 2
    </Box>

    <Box p={1} bgcolor="grey.900" color="white">
    Item 3
    </Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:space-between; </Typography>
     </Box>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="grey.100" justifyContent='space-between'>
    <Box p={1} bgcolor="grey.500" color="white">
      Item 1
    </Box>

    <Box p={1} bgcolor="grey.700" color="white">
    Item 2
    </Box>

    <Box p={1} bgcolor="grey.900" color="white">
    Item 3
    </Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:row; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:space-around; </Typography>
     </Box>
</Box>
<Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="grey.100" justifyContent='space-around'>
    <Box p={1} bgcolor="grey.500" color="white">
      Item 1
    </Box>

    <Box p={1} bgcolor="grey.700" color="white">
    Item 2
    </Box>

    <Box p={1} bgcolor="grey.900" color="white">
    Item 3
    </Box>
</Box>
  {/** flex direction column */}
 
  <Box  p={1}   display='flex' flexDirection='row' alignItems='center' >
    <Box m={1}>
    <Typography color='primary' variant='h4'> flex-direction:column</Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>alignItems:flex-start; </Typography>
     </Box>
</Box>
<Box
display="flex"
alignItems="flex-start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>alignItems:flex-end; </Typography>
     </Box>
</Box>

<Box
display="flex"
alignItems="flex-end"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography color='secondary' variant='h5'>alignItems:center; </Typography>
     </Box>
</Box>

<Box
display="flex"
alignItems="center"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
     </Box>
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:space-between; </Typography>
     </Box>
</Box>

<Box
display="flex"
justifyContent="space-between"
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
     </Box>
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:space-around; </Typography>
     </Box>
</Box>

<Box
display="flex"
justifyContent="space-around"
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
     </Box>
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:center; </Typography>
     </Box>
</Box>

<Box
display="flex"
justifyContent="center"
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography  color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
     </Box>
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:flex-end; </Typography>
     </Box>
</Box>

<Box
display="flex"
justifyContent="flex-end"
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
    <Box m={1}>
    <Typography color='primary' variant='h5'> flex-direction:column; </Typography>
    </Box> 
      
     <Box m={1} >
     <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
     </Box>
     <Box m={1} >
     <Typography color='secondary' variant='h5'>justifyContent:flex-start; </Typography>
     </Box>
</Box>

<Box
display="flex"
justifyContent="flex-start"
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

{/** flex direction column-reverse */}
 
<Box  p={1}   display='flex' flexDirection='row' alignItems='center' >
<Box m={1}>
<Typography color='primary' variant='h4'> flex-direction:column-reverse</Typography>
</Box> 
  
 <Box m={1} >
 <Typography color='secondary' variant='h5'>alignItems:flex-start; </Typography>
 </Box>
</Box>
<Box
display="flex"
alignItems="flex-start"
flexDirection='column-reverse'
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography  color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography color='secondary' variant='h5'>alignItems:flex-end; </Typography>
 </Box>
</Box>

<Box
display="flex"
alignItems="flex-end"
flexDirection='column-reverse'
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography  color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography color='secondary' variant='h5'>alignItems:center; </Typography>
 </Box>
</Box>

<Box
display="flex"
alignItems="center"
flexDirection='column-reverse'
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography  color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
 </Box>
 <Box m={1} >
 <Typography color='secondary' variant='h5'>justifyContent:space-between; </Typography>
 </Box>
</Box>

<Box
display="flex"
justifyContent="space-between"
flexDirection='column-reverse'
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography  color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
 </Box>
 <Box m={1} >
 <Typography color='secondary' variant='h5'>justifyContent:space-around; </Typography>
 </Box>
</Box>

<Box
display="flex"
justifyContent="space-around"
flexDirection='column-reverse'
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography  color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
 </Box>
 <Box m={1} >
 <Typography color='secondary' variant='h5'>justifyContent:center; </Typography>
 </Box>
</Box>

<Box
display="flex"
justifyContent="center"
flexDirection='column-reverse'
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>

<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography  color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
 </Box>
 <Box m={1} >
 <Typography color='secondary' variant='h5'>justifyContent:flex-end; </Typography>
 </Box>
</Box>

<Box
display="flex"
justifyContent="flex-end"
flexDirection='column-reverse'
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>
<Box  p={1}   display='flex' flexDirection='row' >
<Box m={1}>
<Typography color='primary' variant='h5'> flex-direction:column-reverse; </Typography>
</Box> 
  
 <Box m={1} >
 <Typography  color='primary' variant='h5'>alignItems:flex-start; </Typography>
 </Box>
 <Box m={1} >
 <Typography color='secondary' variant='h5'>justifyContent:flex-start; </Typography>
 </Box>
</Box>

<Box
display="flex"
justifyContent="flex-start"
flexDirection='column-reverse'
alignItems="start"
p={1}
m={1}
bgcolor="grey.100"
css={{ height: '200px' }}
>
<Box p={1} bgcolor="grey.500" color="white">
Item 1
</Box>

<Box p={1} bgcolor="grey.700" color="white">
Item 2
</Box>

<Box p={1} bgcolor="grey.900" color="white">
Item 3
</Box>
</Box>
        </Paper>
       
 
    
    )
}