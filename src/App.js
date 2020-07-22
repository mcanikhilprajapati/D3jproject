import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {configureStore} from "./store";
import Navigation from "./Navigation";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

toast.configure();
const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>

    );
}

export default App;
