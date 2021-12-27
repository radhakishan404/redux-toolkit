import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";

// optional: adding persist for redux store and its value
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// import reducers from slices
import userReducers from "./userSlice";

// create root reducers by combining everything
const rootReducer = combineReducers({
    user: persistReducer(
        {
            key: "user",
            version: 1,
            storage,
            blackList: [], // add keys which should not be cached: if using this then remove whiteList
            whiteList: [], // add keys which has to be tracked: if using this then remove blackList
        },
        userReducers
    ),
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export default store;
