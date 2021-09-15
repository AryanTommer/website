import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));



class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <React.Suspense fallback={loading}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />

            <Switch>
              <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
            </Switch>
          </MuiThemeProvider>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;