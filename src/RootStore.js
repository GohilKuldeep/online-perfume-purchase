import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Login/LoginReducer';

const RootStore = configureStore({
  reducer: {
    Login:LoginReducer
  },
});

export default RootStore;
