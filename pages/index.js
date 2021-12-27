import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import store from "../store";

const persistor = persistStore(store);

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/* render router or complete app block here */}
                <Router>
                    {/* rest of the application goes here */}
                </Router>
            </PersistGate>
        </Provider>
    );
}
