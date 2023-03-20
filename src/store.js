import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        user: authReducer,
        users: userReducer
    }
});

export default store;