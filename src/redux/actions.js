// actions.js
export const UPDATE_PASSENGER = "UPDATE_PASSENGER";

export const updatePassenger = (passenger) => {
  return {
    type: UPDATE_PASSENGER,
    payload: passenger,
  };
};
