import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";
import AOS from "aos/dist/aos";
import {
  Grid,
  Typography,
  Card,
  Hidden,
  Box,
} from "@mui/material";
import {
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import Lottyanimation from "src/components/decoraction/lotty/lottyanimation";
import info from "src/assets/lotty_file/info.json";
import styles from "./InfoSection.element"

AOS.init({ once: true })
function InfoSection(props) {
  const { classes, theme, width } = props;
  return (
    <>
      <div className={classNames(classes.wrapper)}  >
        <div className={classNames("container-fluid", classes.container)} >
          <Box display="flex" justifyContent="center" className="row" sx={{ mx: '-32px', }}>
            <Card
              className={classes.card}
              data-aos-delay="1000"
              data-aos="zoom-in"
              sx={{ width: '100%', height: '100%', bgcolor: '#fcb701', }}
            >
              <div className={classNames(classes.containerFix, "container")} sx={{}}>
                <Box justifyContent="space-between" className="row" sx={{}}  >
                  <Hidden smDown>
                    <Grid item md={5} >
                      <Box sx={{ height: '80%', width: '80%' }} >
                        <Lottyanimation lottyfile={info} />
                      </Box>
                    </Grid>
                  </Hidden>
                  <Grid item md={7}   >
                    <Box display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      height="100%">
                      <Box sx={{ textAlign: { xs: 'center', md: 'justify' }, mb:'20px'}}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h4" : "h5"}
                          color="black"
                        >
                          100+ Modules For Your Unique <strong>Business Needs</strong>
                        </Typography>
                      </Box>
                      <Box component="div" sx={{ textAlign: { xs: 'center', md: 'justify' }, mb: '15px' }} >
                        <Typography
                          variant={isWidthUp("lg", width) ? "h7" : "body1"}
                          color="#333S"
                        >
                          Give your business a true competitive edge with <strong><i>Openkite</i></strong> "Modules" products that are designed to meet your business needs.

                        </Typography>
                      </Box>
                      <Box component="div" sx={{ textAlign: { xs: 'center', md: 'justify' } }}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h7" : "body1"}
                          color="#333S"
                        >
                          Our  modules help companies improve their business functions like production, distribution, service, project management and retail etc.
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
