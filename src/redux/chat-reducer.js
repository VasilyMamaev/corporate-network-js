import { messagesMock } from "../mock-data/mock-data"

const SET_MESSAGES = "chat-reducer/SET_MESSAGES"

const initialState = {
  userId: null,
  chatType: null, // 'work' || 'basic'
  messages: []
}

const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...action.messages]
      }
    default: return state
  }
}

export const setMessages = messages => ({
  type: SET_MESSAGES,
  messages
})

export const getMessagesTC = () => dispatch => {
  dispatch(setMessages(messagesMock)) // здесь будет асинхронный запрос
}

export default chatReducer