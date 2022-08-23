import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { db, auth, data } from "./firebase";

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Context.Provider value={{ db, data, auth }}>
        <App />
    </Context.Provider>
);
