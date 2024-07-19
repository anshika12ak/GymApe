import React from 'react';
import {  Typography,Box, Stack,Grid } from '@mui/material';
const PostList = () => {
  return (
    

    
    <div className="container mx-auto">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',marginTop:"20px" }}>
        
    <Grid container spacing={1} style={{ marginTop: 10 }}>
      <Grid item xs={12} md={6} sx={{backgroundColor:"white"}}>
      <Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px',}}>
        <Typography sx={{fontSize:"10px"}} variant="h6"> Your post will be here
            <br />
            Date: 23/02/2020
            <br />
            Created: Own
          <Stack>
          <button  sx={{margin:"px"}}>Delete</button>
          <button>Update</button>
          </Stack>
</Typography>
</Box>
<Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px',margin:"2px"}}>
<Typography sx={{fontSize:"10px"}} variant="h6"> Your post will be here
            <br />
            Date: 23/02/2020
            <br />
            Created: Own
          
          <button sx={{margin:"2px"}}>Delete</button>
          <button>Update</button>
</Typography>
</Box>
</Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{backgroundColor:"white"}}>
        <Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px',}}>
          <Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <Typography sx={{fontSize:"8.5px"}} variant="h6">Your post will be here
            <br />
            Date: 23/02/2020
            <br />
            Created: User1
</Typography>
</Box>
<Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px',margin:"2px"}}>
        <Typography sx={{fontSize:"9px"}} variant="h6">Your post will be here
            <br />
            Date: 23/02/2020
            <br />
            Created: User2
</Typography>
</Box>
<Box sx={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px',}}>
        <Typography sx={{fontSize:"8.5px"}} variant="h6">Your post will be here
            <br />
            Date: 23/02/2020
            <br />
            Created: User2
</Typography>
</Box>
</Box>
      </Grid>
    </Grid>
    </Box>
  </div>
);
}



export default PostList;