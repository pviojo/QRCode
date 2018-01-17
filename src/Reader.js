import React from 'react';
import QrReader from 'react-qr-reader'

export default class Reader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data) {
    if (data) {
      alert(data);
      this.setState({
        result: data,
      })
    }
  }
  handleError(err) {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <a href={this.state.result}>{this.state.result}</a>
      </div>
    )
  }
}