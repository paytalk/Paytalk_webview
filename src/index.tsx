import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Rotuer";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./common/Nav";
import { Provider } from "react-redux";
import store from "./useRedux/rootReducer";
import "./common.css";
import ScrollToTop from "./common/ScrollTop";
import "./styles/reset.scss";
import "./styles/common.scss";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <GlobalStyle />
                <ScrollToTop />
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
