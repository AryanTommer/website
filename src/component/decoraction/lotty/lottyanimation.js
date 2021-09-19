import React from 'react';
import Lottie from 'react-lottie';
import { Box } from '@mui/system';



export default function Lottyanimation(props) {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData:props.lottyfile ,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <Box >
      <Lottie 
	    options={defaultOptions}
      />
    </Box>
  );
  }
