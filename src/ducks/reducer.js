import axios from "axios";

//Add some ACTIONTYPE
const GET_ITEMS = "GET_ITEMS";

//Create InitialState
const initialState = {
  items: []
};

//add some SWITCH CASES in the REDUCER
export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_ITEMS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ITEMS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    case `${GET_ITEMS}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

//add some ACTION CREATORS
export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get("http://localhost:3009/api/items")
  };
}
