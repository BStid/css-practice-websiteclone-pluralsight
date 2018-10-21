import axios from "axios";

//Add some ACTIONTYPE
const GET_ITEMS = "GET_ITEMS";
const UPDATE_INPUT = "UPDATE_INPUT";

//Create InitialState
const initialState = {
  items: [],
  input: "",
  isLoading: false
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
    case UPDATE_INPUT:
      console.log(action.payload.target.name, action.payload.target.value);
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
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
export const updateInput = input => {
  console.log(input.target.name);
  console.log(input.target.value);

  return {
    type: UPDATE_INPUT,
    payload: input
  };
};
