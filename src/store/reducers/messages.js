import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';
import {
  editMessage, getMessagesList, openMessage, sendMessages,
} from '../actions/messages';
import { socketEditMessage, socketNewMessage, socketOpenMessage } from '../actions/socket';

const initialState = {
  messages: [],
};
export default createReducer(initialState, (builder) => {
  builder
    .addCase(getMessagesList.fulfilled, (state, action) => {
      const { messages } = action.payload;
      state.messages = messages;
    })
    .addCase(sendMessages.pending, (state, action) => {
      const {
        text, friendId, type = 'text', userId,
      } = action.meta.arg;
      const date = new Date().toISOString();
      const messageTemp = {
        createdAt: date,
        updatedAt: date,
        from: userId,
        id: _.uniqueId('temp_'),
        text,
        to: friendId,
        type,
        temp: true,
        files: [],
      };
      state.messages.unshift(messageTemp);
    })
    .addCase(sendMessages.fulfilled, (state, action) => {
      const { message } = action.payload;
      state.messages.shift();
      state.messages.unshift(message);
    })
    .addCase(sendMessages.rejected, (state) => {
      state.messages.shift();
    })
    .addCase(socketNewMessage, (state, action) => {
      const { message, current } = action.payload;
      if (current) {
        state.messages.unshift(message);
      }
    })

    .addCase(socketOpenMessage, (state, action) => {
      const message = action.payload;
      state.messages = state.messages.map((m) => {
        if (+m.id === +message.id) {
          return message;
        }
        return m;
      });
    })
    .addCase(openMessage.pending, (state, action) => {
      const id = action.meta.arg;
      state.messages = state.messages.map((m) => {
        if (+m.id === +id) {
          m.seen = new Date().toISOString();
        }
        return m;
      });
    })
    .addCase(editMessage.fulfilled, (state, action) => {
      const { message } = action.payload;
      state.messages = state.messages.map((m) => {
        if (+m.id === +message.id) {
          return message;
        }
        return m;
      });
    })
    .addCase(socketEditMessage, (state, action) => {
      const newMessage = action.payload;
      state.messages = state.messages.map((m) => {
        if (+m.id === +newMessage.id) {
          return newMessage;
        }
        return m;
      });
    });
});
