import React, {Component, Fragment} from "react";
import loadable from '@loadable/component';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import "./css/style.css";


// 引入一个 Hello 的组件
// import Hello from "./Hello";

//import Home from "./containers/Home";
// let Home = loadable(()=>import('./containers/Home'));
// let About = loadable(()=>import('./containers/About'));
let Init = loadable(() => import("./containers/Init"));

class App extends Component {
    constructor (...args){
        super(...args);
    }
    render (){
        
        // 实现按需加载
        //let Cmp1=loadable(()=>import('./components/cmp1'));
        return (
            <div>
                <Route path="/" exact component={Init}></Route>
            </div>
        );
    }
}

//export default connect((state, props) => Object.assign({}, props, state), {})(App);
export default App;