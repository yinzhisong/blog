import React, {Component, Fragment} from "react";

class Footer extends Component {
    constructor (...args){
        super(...args);
        this.state = {
            show: false
        };
    }
    componentDidMount (){
        window.onscroll = function (){
            this.setState({
                show: window.pageYOffset > 1000 ? true : false
            });
        }.bind(this);
    }
    render () {
        return (
            <footer>
                <div className="container inner">
                    <div className="row clearfix">
                        <div className="col-sm-12 col-md-4">
                            <div className="footer-title">
                                <h4>和我一起</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="footer-title">
                                <h4>联系方式</h4>
                                <p>1420066318@qq.com</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="footer-title">
                                <h4>版权所有</h4>
                                <p>© 2017 - 2019 SARIAY. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.show ? 
                    <div className="go-top" onClick={() => this.handlerGoTop()}>
                        <i className="iconfont iconxiangshang"></i>
                    </div>
                    :
                    ""
                }
                
            </footer>
        );
    }
    handlerGoTop (){
        let scrollToTop = window.setInterval(function() {
            let pos = window.pageYOffset;
            if ( pos > 0 ) {
                window.scrollTo(0, pos - 60);
            } else {
                window.clearInterval( scrollToTop );
            }
        }, 2);
    }
}
export default Footer;