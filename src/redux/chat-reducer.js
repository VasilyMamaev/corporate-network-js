import { messagesMock } from "../mock-data/mock-data"

const SET_MESSAGES = "chat-reducer/SET_MESSAGES"
const ADD_MESSAGE = "chat-reducer/ADD_MESSAGE"

const initialState = {
  messages: []
}

const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...action.messages]
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      }
    default: return state
  }
}

export const setMessagesAC = messages => ({
  type: SET_MESSAGES,
  messages
})

export const addMessageAC = message => ({
  type: ADD_MESSAGE,
  message
})

export const getMessagesTC = () => dispatch => {
  dispatch(setMessagesAC(messagesMock)) // здесь будет асинхронный GET запрос
}

export const addMessageTC = (message) => dispatch => {
  dispatch(addMessageAC(message)) // здесь будет асинхронный PUT запрос
}

export default chatReducer