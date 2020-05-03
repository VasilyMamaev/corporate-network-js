import { getMessagesTC } from "./chat-reducer"
import { contactsMock } from "../mock-data/mock-data"

const SET_APP_INITIALIZED = "contacts-reducer/SET_APP_INITIALIZED"
const SET_CURRENT_INTERLOCUTOR = "contacts-reducer/SET_CURRENT_INTERLOCUTOR"
const SET_CURRENT_CHAT_TYPE = "contacts-reducer/SET_CURRENT_CHAT_TYPE"
const SET_CONTACTS = "contacts-reducer/SET_CONTACTS"

// Редьюсер замокан в ожидании API
const initialState = {
  contacts: [],
  currentInterlocutor: null,
  currentChatType: null, // 'work' || 'basic'
  appInitialized: false
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_INITIALIZED:
      return {
        ...state,
        appInitialized: true
      }
    case SET_CURRENT_CHAT_TYPE:
      return {
        ...state,
        currentChatType: action.chatType
      }
    case SET_CURRENT_INTERLOCUTOR:
      return {
        ...state,
        currentInterlocutor: action.InterlocutorId
      }
    case SET_CONTACTS:
      return {
        ...state,
        contacts: [...action.contacts]}
    default: return state
  }
}

export const setAppInitializedAC = () => ({
  type: SET_APP_INITIALIZED
})

export const setCurrentChatTypeAC = (chatType) => ({
  type: SET_CURRENT_CHAT_TYPE,
  chatType
})

export const setCurrentInterlocutorAC = (InterlocutorId) => ({
  type: SET_CURRENT_INTERLOCUTOR,
  InterlocutorId
})

export const setContactsAC = (contacts) => ({
  type: SET_CONTACTS,
  contacts
})

export const getCurrentInterlocutorTC = (id = 431561) => (dispatch) => {
  let response = id
  dispatch(setCurrentInterlocutorAC(response)) // здесь будет асинхронный GET запрос
}

export const getContactsTC = () => (dispatch) => {
  dispatch(setContactsAC(contactsMock)) // здесь будет асинхронный GET запрос
}

export const initializeAppTC = () => dispatch => {
  dispatch(setCurrentChatTypeAC('work'))
  dispatch(getCurrentInterlocutorTC()) // здесь будет асинхронный запрос
  dispatch(getContactsTC()) // здесь будет асинхронный запрос
  dispatch(getMessagesTC()) // здесь будет асинхронный запрос
  dispatch(setAppInitializedAC())
}

export default contactsReducer