import React, {Component} from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

class Footer extends Component {
    constructor (...args){
        super (...args);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }
    render (){
        return (
            <div className="col-spacer--top" aria-hidden="true"></div>
        );
    }
}
export default Footer;