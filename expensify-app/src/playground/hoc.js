// Higher Order Components (HOC) - A comonent that renders another component

// HOC advantages

  // Reuse Code
  // Render hijacking
  // prop manipulation
  // abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? 
        <WrappedComponent {...props} /> :
        <p>You are not authorized to view the details</p>
      }
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById("app"));