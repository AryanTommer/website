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
  
} from "@mui/material";
import {
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";

import styles from "./HeroSection.elements"
import WaveBorder from "../decoraction/waveborder/WaveBorder";
import Lottyanimation from "../decoraction/lotty/lottyanimation";
import one from "../decoraction/lotty/lotty_file/one.json";
import Textanimation from "../decoraction/textanimation/Textanimation";
import { HeroSectionShape} from "../decoraction/layoutcolordiv/Layouts";

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
  
                <div className={classNames(classes.containerFix, "container")}>
                  <Box justifyContent="space-between" className="row">
                    <Grid item xs={12} md={5}>
  
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
  
                      >
                        <HeroSectionShape />
                        
                        <Box mb={4} >
                          <Typography
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                            color="#4a148c"
                          >
                            <Box component="div" display="inline" whiteSpace="nowrap">Automate your  <Textanimation Text={["Home", "Bussines", "Office"]} /></Box> With <strong><i>Openkite.</i></strong> And Facilitate the Lives
                          </Typography>
  
                        </Box>
                        <Hidden smUp>
                          <Grid item xs={12} md={6}  >
                            <Lottyanimation lottyfile={one} />
                          </Grid>
                        </Hidden>
                        <div>
                          <Box mb={2}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h7" : "body1"}
                              color="textSecondary"
                            >
                              <strong><i>Openkite's</i></strong> all modules provide a advance Intelligen
                              Tchnology with embeded AI and Machine-learning
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
                      <Grid item xs={12} order={{ xs: 1 }} md={6}  >
  
                        <Lottyanimation lottyfile={one} />
                      </Grid>
                    </Hidden>
                  </Box>
                </div>
                <WaveBorder
                  upperColor='linear-gradient(to bottom, #ffffff 0%,#f6f6f6 47%,#ededed 100%)'
                  lowerColor="#FFFFFF"
                  className={classes.waveBorder}
                  animationNegativeDelay={2}
                />
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