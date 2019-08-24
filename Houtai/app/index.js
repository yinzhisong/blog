// react
import React from "react";
import {render} from "react-dom";

// react-router-dom
import { HashRouter as Router, Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
//import store from "@/store";

// 引入 App 组件
import App from "./App.jsx";

render((
    //<Provider store={store}>
        <Router>
            <App />
        </Router>
    //</Provider>
), document.getElementById("App"));