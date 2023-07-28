export const SET_VARIABLE = 'SET_VARIABLE';

export const setVariable = (myVariable) => {
  return {
    type: SET_VARIABLE,
    payload: myVariable,
  };
};
