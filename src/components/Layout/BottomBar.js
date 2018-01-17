import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from "react-router-dom";

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const nearbyIcon = <IconLocationOn />;



export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper zDepth={1} style={{ position: "absolute", bottom: 0 }}>
          <BottomNavigation >
            <BottomNavigationItem
              icon={nearbyIcon}
              containerElement={<Link to="/"></Link>}
            />

            <BottomNavigationItem
              icon={nearbyIcon}
              containerElement={<Link to="/search"></Link>}
            />

          </BottomNavigation>
        </Paper>
      </MuiThemeProvider>
    )
  }
}