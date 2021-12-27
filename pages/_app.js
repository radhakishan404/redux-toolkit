import Head from "next/head";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import store from "../store";

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>{/* code of default head goes here */}</Head>
            
            {/* persist and store binding added here */}
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    );
}
