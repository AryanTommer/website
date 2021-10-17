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

import styles from "./HeroSection.elements"
import WaveBorder from "src/components/decoraction/waveborder/WaveBorder";
import Lottyanimation from "src/components/decoraction/lotty/lottyanimation";
import herosection from "src/assets/lotty_file/herosection.json";
import Textanimation from "src/components/decoraction/textanimation/Textanimation";
import { HeroSectionShape,InfosectionShape} from "src/components/decoraction/layoutcolordiv/Layouts";
import App from "src/assets/img/app.png"


AOS.init({ once: false })
function HeroSection(props) {
    const { classes, theme, width } = props;
    return (
      <>
        <div className={classNames(classes.wrapper)}>
          <div className={classNames("container-fluid", classes.container)}>
            <Box display="flex" justifyContent="center" className="row">
  
              <Card
                className={classes.card}
                data-aos-delay="1000"
                data-aos="zoom-in"
  
              >
  
                <div className={classNames(classes.containerFix, "container")} sx={{ height: '25%' }}>
                  <Box justifyContent="space-between" className="row">
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={5}>
  
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
  
                      >
                        <Hidden smDown>
                        <HeroSectionShape />
                        </Hidden>
                        
                        <Box mb={4} sx={{mt:{md:"0px"}}} >
                          <Typography
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                            color="#4a148c"
                          >
                            <Box component="div" display="inline" whiteSpace="nowrap">Automate your  <Textanimation Text={["Home", "Bussines", "Office"]} /></Box> With <strong><i>Openkite.</i></strong> And Facilitate the Lives
                          </Typography>
  
                        </Box>
                        <Hidden smUp>
                          <Box sx={{height: '100vh',width: '90%',}} >
                            <Lottyanimation lottyfile={herosection} />
                            </Box>
                        
                        </Hidden>
                        <div >
                          <Box mb={4}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "body1"}
                              color="textSecondary"
                            > 
                            <Box >
                              <strong><i>Openkite's</i></strong> all modules provide a advance Intelligen
                              Tchnology with embeded AI and Machine-learning
                              </Box>
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                            href=""
                          >
                            Register   For   Demo
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                    <Hidden smDown>
                      <Grid item xs={12} sm={7}  sx={{height: '80vh',width: '90vw',mt:'0px'}}  >
  
                        <Lottyanimation lottyfile={herosection} />
                      </Grid>
                      </Hidden>
                      </Grid>
                  </Box>
                </div>
                {/* <WaveBorder
                  upperColor="#FFFFFF" 
                  lowerColor="#FFFFFF"
                  className={classes.waveBorder}
                  animationNegativeDelay={2}
                /> */}
                {/* -------------------------------------------------------------------------- */}
                <Hidden smDown>
                {/* <WaveBorder
                  // upperColor="#FFFFFF" 
                  lowerColor="#FFFFFF"
                  className={classes.waveBorder}
                  animationNegativeDelay={2}
                /> */}
                <div className={classNames(classes.containerFix, "container")} sx={{height:'50%'}}>
                <CardMedia
                  // positions="relativ"
                  // top="0"
                  // left="0"

                  className={classes.media}
                  image={App}
                  // title={brand.name}
                  component="img"

                  sx={{ height: '90', width: '90%',  position: 'relative',
                  top: '-20px',
                  left: '-10%',
                  zIndex: 'tooltip', }}
                    />
                <Box justifyContent="space-between" className="row" >
                  <Grid item  md={6}>
                    <InfosectionShape />



                  </Grid>
                  <Grid item md={6}  >
                    <Box display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%">
                      <Box  sx={{ textAlign: 'center',mb:'20px' }}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          color="black"
                        >
                          <b>good</b> technology
                          <br />
                          <b>good</b> business
                        </Typography>
                      </Box>
                      <Box component="div"   >
                        <Typography
                          variant={isWidthUp("lg", width) ? "h7" : "body1"}
                          color="#333S"
                        ><Box  sx={{ textAlign: 'center' }}>
                        We are your trusted advisor today and into the future.  <strong><i>Openkite</i></strong> has been helping customers of all sizes, across all industries to transform and simplify their business.
                        </Box>
                        </Typography>
                      </Box>


                    </Box>

                  </Grid>
                </Box>
              </div> 
              </Hidden >
              </Card>

  
            </Box>
          </div>
        </div>
  
  
      </>
    );
  }
  
  HeroSection.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    theme: PropTypes.object,
  };
  
  export default withWidth()(
    withStyles(styles, { withTheme: true })(HeroSection)
  );

  //Think big, start small, then scale or fail fast.” – Mats Lederhausen
  //We are your trusted advisor today and into the future. Uneecops has been helping customers of all sizes, across all industries to transform and simplify their business.
  //A Single Tool For Modern Day
// Let one of the best erp companies in India discuss your key requirements and help you capture new business opportunities with one of the top erp solutions.


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


// Learn new skills,
// gain more experience
// Our mission is to spread education that is easy accessible and everyone can learn.
// WHAT WE DO

// You do business we do the softwere
