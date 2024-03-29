// MyComponent.js (continued)

import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './actions';

const MyComponent = ({ myData, updateData }) => {
  const handleClick = () => {
    // Dispatch action to update data
    updateData('New Data');
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>{myData}</p>
      <button onClick={handleClick}>Update Data</button>
    </div>
  );
};

const mapStateToProps = state => ({
  myData: state.myData // Map state to component props
});

const mapDispatchToProps = dispatch => ({
  updateData: newData => dispatch(actionCreators.updateData(newData)) // Map action creators to component props
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
