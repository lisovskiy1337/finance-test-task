import { configureStore } from "@reduxjs/toolkit";
import tickersReducer from "./reducers/tickersReducer";

const store = configureStore({
    reducer: tickersReducer,
});

export default store;