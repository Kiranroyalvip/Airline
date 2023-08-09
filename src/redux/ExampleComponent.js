// ExampleComponent.js
import React from "react";
import { connect } from "react-redux";
import { updatePassenger } from "./Actions";

const ExampleComponent = ({ passengers, onUpdatePassenger }) => {
  // Your component logic here
};

const mapStateToProps = (state) => {
  return {
    passengers: state.passengers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePassenger: (passenger) => dispatch(updatePassenger(passenger)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
