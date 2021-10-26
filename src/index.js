import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from "./Contact";
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from "@mui/material/Toolbar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from "./Navigation";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <Navigation />
              <Box
                  component="main"
                  sx={{
                      backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                              ? theme.palette.grey[100]
                              : theme.palette.grey[900],
                      flexGrow: 1,
                      height: '100vh',
                      overflow: 'auto',
                  }}
              >
                  <Toolbar />
                  <Switch>
                      <Route exact path="/" component={App}/>
                      <Route exact path="/contact" component={Contact}/>
                  </Switch>
              </Box>
          </Box>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
