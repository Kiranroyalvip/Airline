import { UPDATE_PASSENGER } from "./Actions";

const initialState = {
  passengers: [], // Add your initial state here
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSENGER:
      return {
        ...state,
        passengers: state.passengers.map((passenger) =>
          passenger.id === action.payload.id ? action.payload : passenger
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
