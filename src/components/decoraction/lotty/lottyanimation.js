import React from 'react';
import Lottie from 'react-lottie';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import styles from "src/components/decoraction/lotty/Lottyanimation.element";

const useStyles = makeStyles(styles);

export default function Lottyanimation(props) {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.lottyfile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    // <Box >
    <Lottie options={defaultOptions}>
       
    </Lottie>
    
  );
}
