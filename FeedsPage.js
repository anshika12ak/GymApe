import React from 'react';
import { TextField, Button, Typography, Stack, Box } from '@mui/material';

const FeedsPage = () => {
  const [postText, setPostText] = React.useState('');

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleCreatePost = () => {
    // Handle post creation logic here
    console.log('Post created:', postText);
    setPostText('');
  };

  return (
    <div style={{ display: 'flex', justifyContent:"center", alignItems: 'center', }}>
        <Stack>
      <Typography variant="h6" gutterBottom style={{marginRight:"200px"}}>
        Feeds Page
      </Typography>
      
      <Typography variant="body1" gutterBottom>
    -    User can create new post
      </Typography>
      
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', }}>
    <Stack>
      <TextField
        label="Enter your post"
        multiline
        // rows={1}
        value={postText}
        onChange={handlePostChange}
        fullWidth
      />
      <div style={{  justifyContent: 'space-between',padding:"20px"}}>
        <Stack>
      <Button variant="contained" onClick={handleCreatePost} fullWidth >
        Create Post
      </Button>
      <Button variant="contained" style={{marginTop:"20px"}}
       fullWidth >
        View My Post
      </Button>
      <Button variant="contained" style={{marginTop:"20px"}}
      fullWidth>
        View Other User Post
      </Button>
      </Stack>
      </div>
      </Stack>
      </Box>
     </Stack>
    </div>
  );
};

export default FeedsPage;