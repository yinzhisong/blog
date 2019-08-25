import React, {Component, Fragment} from "react";
import loadable from '@loadable/component';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import "./css/style.css";


// 引入一个 Hello 的组件
// import Hello from "./Hello";

//import Home from "./containers/Home";
//let Init = loadable(() => import("./containers/Init"));

let Home = loadable(()=>import('./containers/Home'));
let About = loadable(()=>import('./containers/About'));
let Tags = loadable(()=>import('./containers/Tags'));
let Archives = loadable(()=>import('./containers/Archives'));
let Album = loadable(()=>import('./containers/Album'));
let Categories = loadable(()=>import('./containers/Categories'));

class App extends Component {
    constructor (...args){
        super(...args);
    }
    render (){
        
        // 实现按需加载
        //let Cmp1=loadable(()=>import('./components/cmp1'));
        return (
            <Fragment>
                <Route path="/" exact component={Home}></Route>
                <Route path="/archives" exact component={Archives}></Route>
                <Route path="/categories" exact component={Categories}></Route>
                <Route path="/tags" exact component={Tags}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/album" exact component={Album}></Route>                
            </Fragment>
        );
    }
}

//export default connect((state, props) => Object.assign({}, props, state), {})(App);
export default App;