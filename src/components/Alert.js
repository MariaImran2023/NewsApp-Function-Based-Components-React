import React, { Component } from 'react';

export class Alert extends Component {
  render() {
    const { alert } = this.props;
    if (!alert.msg) return null; // If no alert message, return null to render nothing
    
    return (
      <div style={{ height: '50px' }}>
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.msg}</strong>
        </div>
      </div>
    );
  }
}

export default Alert;
