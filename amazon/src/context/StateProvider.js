import React, { useContext, useReducer } from "react";
import StateContext from "./StateContext";

// wrap our app and provide the data layer
export const StateProvider = (props) => {
  const { reducer, intialState } = props;

  return (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
      {props.children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
