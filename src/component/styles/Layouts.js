import styled, { css } from "styled-components";



const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  
// background:linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
`;

 export const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 50% 100%);
 background-color: crimson;

`;
export const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;