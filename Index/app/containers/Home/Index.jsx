import React, {Component, Fragment} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/containers/Home/Main";
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
            <Fragment>
                <Header url="/" />
                <Main />
                <Footer />
            </Fragment>
        );
    }
}
export default Index;