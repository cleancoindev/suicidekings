//import Web3 from "web3";
import React from "react";
import { Container, Typography, Link } from '@material-ui/core';
import ProTip from './ProTip';
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import SuicideKingsComponent from "./components/SuicideKingsComponent";
import logo from "./logo.png";
//import "./App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        The Crypto Bros
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <Container maxWidth="sm">
      <DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
          {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;

            window.drizzle = drizzle;
            window.drizzleState = drizzleState;

            if (!initialized) {
              return (
                <div className="Loading">
                  <img src={logo} alt="suicidekings-logo" />
                  <div>Loading...</div>
                </div>
              )
            }

            return (
              <SuicideKingsComponent drizzle={drizzle} drizzleState={drizzleState} />
            )
          }}
        </DrizzleContext.Consumer>
      </DrizzleContext.Provider>
      <ProTip />
      <Copyright />
    </Container>
  );
}

export default App;
