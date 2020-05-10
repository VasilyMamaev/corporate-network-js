import { messagesMock } from "../mock-data/mock-data";

const SET_MESSAGES = "chat-reducer/SET_MESSAGES";
const ADD_MESSAGE = "chat-reducer/ADD_MESSAGE";
const DELETE_MESSAGE = "chat-reducer/DELETE_MESSAGE";
const EDIT_MESSAGE = "chat-reducer/EDIT_MESSAGE";

const initialState = {
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...action.messages],
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages.filter((msg) => {
            return msg.date !== action.date;
          }),
        ],
      };
    case EDIT_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages.map((msg) => {
            if (msg.date === action.messageId) {
              return { ...msg, text: action.newText };
            }
            return msg;
          }),
        ],
      };
    default:
      return state;
  }
};

export const setMessagesAC = (contact) => ({
  type: SET_MESSAGES,
  messages: contact.messages,
});

export const addMessageAC = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const deleteMessageAC = (date) => ({
  type: DELETE_MESSAGE,
  date,
});

export const editMessageAC = (messageId, newText) => ({
  type: EDIT_MESSAGE,
  messageId,
  newText,
});

export const getMessagesTC = (id = 431561) => (dispatch) => {
  const messages = messagesMock.find((msgs) => msgs.id === id);
  dispatch(setMessagesAC(messages)); // здесь будет асинхронный GET запрос
};

export const addMessageTC = (message) => (dispatch) => {
  dispatch(addMessageAC(message)); // здесь будет асинхронный PUT запрос
};

export default chatReducer;
