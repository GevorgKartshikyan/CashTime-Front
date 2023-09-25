// eslint-disable-next-line import/no-extraneous-dependencies
import { io } from 'socket.io-client';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import ringtone from '../../assets/audio/message.mp3';

const { REACT_APP_API_URL } = process.env;

let socket;
const audio = new Audio(ringtone);

export const socketOnline = createAction('socket/socketOnline');
export const socketOffline = createAction('socket/socketOffline');
export const socketNewMessage = createAction('socket/socketNewMessage');
export const socketOpenMessage = createAction('socket/socketOpenMessage');
export const socketEditMessage = createAction('socket/socketEditMessage');

export const socketInit = createAsyncThunk('socket/socketInit', (token, { dispatch, getState }) => {
  if (socket) {
    return;
  }
  socket = io(REACT_APP_API_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  socket.on('connect', () => {
    console.log('connected');
  });
  socket.on('user_online', (data) => {
    dispatch(socketOnline(data));
  });
  socket.on('user_offline', (data) => {
    dispatch(socketOffline(data));
  });
  socket.on('open_message', (data) => {
    dispatch(socketOpenMessage(data));
  });
  socket.on('new_message', (data) => {
    const friendId = getState().users.user.id;
    const current = +friendId === +data.from;
    dispatch(socketNewMessage({
      message: data,
      current: +friendId === +data.from,
    }));

    if (!current) {
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
      } catch (e) {
        console.log(e);
      }
    }
  });
  socket.on('edit_message', (data) => {
    dispatch(socketEditMessage(data));
  });
});
