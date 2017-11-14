import { combineReducers, createStore } from "redux";

// Nprmally I would live in a separate file
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_NAME": {
      return { ...state, name: action.payload };
      break;
    }
    case "SET_AGE": {
      return { ...state, age: action.payload };
      break;
    }
  }
  return state;
}

// Normally I would live in a separate file
const tweetsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TWEET": {
      return state.concat({
        id: Date.now(), //fake an ID by using a timestamp
        text: action.payload,
      });
      break;
    }
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({ type: "SET_NAME", payload: "Tara" })
store.dispatch({ type: "SET_AGE", payload: 29 })
store.dispatch({ type: "SET_AGE", payload: 30 })
store.dispatch({ type: "ADD_TWEET", payload: "LOLFSDFSDFL" })
store.dispatch({ type: "ADD_TWEET", payload: "Ermagerd" })
