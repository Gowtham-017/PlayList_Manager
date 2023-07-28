import { createStore } from 'redux';

const initialState = {};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      return {
        ...state,
        [action.payload]: !state[action.payload], 
      };
    default:
      return state;
  }
};

const store = createStore(songsReducer);

export default store;

// Actions
export const toggleLike = (songId) => {
  return {
    type: 'TOGGLE_LIKE',
    payload: songId,
  };
};







// import {createStore} from "redux"


// const reducer = (state={counter:0},action) => {
//     if(action.type === "INC"){
//         return {counter:state.counter+1}
//     }
   
//     return state;
// }
// const store=createStore(reducer);
// export default store;
