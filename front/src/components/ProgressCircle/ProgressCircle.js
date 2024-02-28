import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressCircle(props) {
  return (
    <Box sx={{ position:'absolute',right:'30px',top:'20%', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} sx={{color:'rgb(247, 20, 172)'}}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}