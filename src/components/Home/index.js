import React from 'react';
import authenticator from '../../authenticator';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  } 

  render() {
    return ( 
      <div>
        Home
        {authenticator.getAccessToken()}
      </div>
    )
  }
}