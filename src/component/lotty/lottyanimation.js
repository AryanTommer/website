import React from 'react';
import Lottie from 'react-lottie';



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
    <div>
      <Lottie 
	    options={defaultOptions}
      />
    </div>
  );
  }
