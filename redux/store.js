import {combineReducers,configureStore} from "@reduxjs/toolkit"
import { persistReducer,persistStore } from "redux-persist"
// import createFilter from "redux-persist-transform-filter"
import cartSlice from "./slices/CartSlice"
import storage from "redux-persist/lib/storage"
// const saveUserOnlyFilter=createFilter("cartItems",["cartItems"])
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cartItems"],

  };
  const rootReducer = combineReducers({
 cartItems:cartSlice
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store= configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
      devTools: true,})

      export const persistor = persistStore(store);