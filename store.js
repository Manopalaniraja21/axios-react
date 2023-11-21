// yourStoreConfiguration.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your counter reducer

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // ... other reducers
  },
});

export default store;
