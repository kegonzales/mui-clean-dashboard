import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from "./Contact";
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SideNav from "./SideNav";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <NavBar/>
              <SideNav />

              <Switch>
                  <Route exact path="/" component={App}/>
                  <Route exact path="/contact" component={Contact}/>
              </Switch>
          </Box>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
