import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/postsSlice';
import userReducer from '../features/users/usersSlice';
import notificationsReducer from '../features/notifications/notificationsSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    notifications: notificationsReducer
  },
});
