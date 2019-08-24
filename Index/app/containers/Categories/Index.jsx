import React, {Component} from "react";
import Header from "@/components/Header";
import PureRenderMixin from "react-addons-pure-render-mixin";

class Index extends Component {
    constructor (...args){
        super (...args);
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    componentDidMount (){
        //document.title = "Our story - Adyen";
        window.scrollTo(0, 0);
    }
    render (){
        return (
            <header>
                <Header />
                分类
            </header>
        );
    }
}
export default Index;