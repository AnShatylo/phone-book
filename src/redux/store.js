import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './contactSlice';
import {filterReducers} from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filters: filterReducers,
  },
});
