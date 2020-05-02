import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import contactsReducer from "./contacts-reducer";
import chatReducer from "./chat-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  chat: chatReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware (thunk)
  )
)

export default store