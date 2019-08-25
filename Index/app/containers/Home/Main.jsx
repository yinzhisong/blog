import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import PureRenderMixin from "react-addons-pure-render-mixin";

class Main extends Component {
    constructor (...argus){
        super(...argus);
    }
    render() {
        return (
            <main className="home">
                <div className="layout-cart">
                    <ul >
                        <li className="layout-cart-item">
                            <Link to="javascript:;">
                                <img src="../../images/72.jpg" alt="" title="" />
                            </Link>
                            <div className="layout-cart-item-container">
                                <p className="layout-cart-item-container-date">六月 18日, 2019</p>
                                <h3 className="layout-cart-item-container-title">
                                    <Link to="">
                                        <i className="iconfont iconzhifeiji"></i>
                                        <span>Annie主题使用Hexo-Tag-Plugins</span>
                                    </Link>
                                </h3>
                                <p className="layout-cart-item-container-content">
                                    {`一、块引用Block Quote tag语法123{% blockquote [author[, source]] [link] [sourc...`}
                                </p>
                                <p className="layout-cart-item-container-meta">
                                    <span>
                                        <i className="iconfont iconchakan"></i>
                                        &nbsp;热度 &nbsp;&nbsp;
                                        <i>1007</i>
                                    </span>
                                    <span>
                                        <i className="iconfont iconaixin_shixin"></i>
                                        &nbsp;喜欢 &nbsp;&nbsp;
                                        <i>16</i>
                                    </span>
                                </p>
                            </div>
                        </li>
                        <li className="layout-cart-item">
                            <Link to="javascript:;">
                                <img src="../../images/31.jpg" alt="" title="" />
                            </Link>
                            <div className="layout-cart-item-container">
                                <p className="layout-cart-item-container-date">六月 18日, 2019</p>
                                <h3 className="layout-cart-item-container-title">
                                    <Link to="">
                                        <i className="iconfont iconzhifeiji"></i>
                                        <span>Annie主题使用Hexo-Tag-Plugins</span>
                                    </Link>
                                </h3>
                                <p className="layout-cart-item-container-content">
                                    {`一、块引用Block Quote tag语法123{% blockquote [author[, source]] [link] [sourc...`}
                                </p>
                                <p className="layout-cart-item-container-meta">
                                    <span>
                                        <i className="iconfont iconchakan"></i>
                                        &nbsp;热度 &nbsp;&nbsp;
                                        <i>1007</i>
                                    </span>
                                    <span>
                                        <i className="iconfont iconaixin_shixin"></i>
                                        &nbsp;喜欢 &nbsp;&nbsp;
                                        <i>16</i>
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="pagination">
                        <a href="javascript:;">加载更多</a>
                    </div>
                </div>                
            </main>
        );
    }
}
export default Main;