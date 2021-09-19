



import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";
import AOS from "aos/dist/aos";


import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  CardMedia,

} from "@mui/material";
import {
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";

import styles from "./InfoSection.element"
// import { InfosectionShape } from "../decoraction/layoutcolordiv/Layouts";
// import App from "src/assets/img/app.png"

AOS.init({ once: true })
function InfoSection(props) {
  const { classes, theme, width } = props;
  return (
    <>
      <div className={classNames(classes.wrapper)} >
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row" >
            <Card
              className={classes.card}
              data-aos-delay="1000"
              data-aos="zoom-in"
              sx={{ width: '100%', height: '100%' , bgcolor: '#fcb701'}}

            >


              <div className={classNames(classes.containerFix, "container")}>
             
                <Box justifyContent="space-between" className="row" >
                  <Grid item >
                  </Grid>
                  <Grid item   >
                    <Box display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%">
                      <Box >
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          color="black"
                        >
                          
                        </Typography>
                      </Box>
                      <Box component="div" display="inline" whiteSpace="nowrap">
                        <Typography
                          variant={isWidthUp("lg", width) ? "h7" : "body1"}
                          color="#333S"
                        >
                          
                        </Typography>
                      </Box>
                       <Box component="div" display="inline" whiteSpace="nowrap">
                        <Typography
                          variant={isWidthUp("lg", width) ? "h7" : "body1"}
                          color="#333S"
                        >
                          
                        </Typography>
                      </Box>


                    </Box>

                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>


    </>
  );
}

InfoSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(InfoSection)
);







{/* <Box

>

<div>
  <Box mb={2}>
    <Typography
      variant={isWidthUp("lg", width) ? "h7" : "body1"}
      color="textSecondary"
    >

    </Typography>
  </Box>
</div>
</Box> */}

{/* <SubTitle></SubTitle>
<Desc>
  We help our clients succeed by creating brand identities, digital
  experiences, and print materials that communicate clearly, achieve
  marketing goals, and look fantastic.
</Desc>
<Desc>
  We care your business and guarantee you to achieve marketing goals.
</Desc> */}
{/* <section id="erp-add-ons">
    <div class="container">
        <div class="row">
            <div class="offset-md-6 col-md-6 text-center text-md-left">
                <h4 class="section-title black-color">
                    12+ Add-Ons For Your Unique <strong>Business Needs</strong>
                </h4>
                <p class="font-size-14 black-color">Give your business a true competitive edge with SAP B1 "Add-ons" products that are designed to meet your business needs.</p>
                <p class="font-size-14 black-color">Our add-ons help companies improve their business functions like production, distribution, service, project management and retail etc. inside SAP Business One.</p>
                <div class="banner-btn mt-30">
                    <a href="#" data-toggle="modal" data-target="#letstalk"><span class="btn waves-effect waves-light yellow-btn bg-white">REQUEST DEMO</span></a>
                </div>
            </div>
        </div>
    </div>
</section> */}