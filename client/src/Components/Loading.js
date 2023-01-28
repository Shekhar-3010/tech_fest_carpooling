import React from 'react';
import {Box, Typography, Stack, CircularProgress} from '@mui/material';

export default function Error() {
  return (
    <>
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'lightblue',
          }}
        >
          <Stack direction="column" spacing={4} alignItems="center">
            <Typography variant="h2" color="black">creating please wait
             btw you know patience is key to sucess 
            </Typography>
            <CircularProgress sx={{ color: "primary" }} />
          </Stack>
        </Box>
      </>
  );
}

