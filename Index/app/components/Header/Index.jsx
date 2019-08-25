import React, {Component} from "react";
import {Link} from "react-router-dom";
import PureRenderMixin from "react-addons-pure-render-mixin";
import {getDate} from "@/util/getDate";

class Header extends Component {
    constructor (...args){
        super (...args);
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            date: {
                year: "0000",
                month: "00",
                day: "00"
            }
        }
    }
    componentWillMount (){
        let date = getDate("YMD");
        this.setState({
            ...this.state.date,
            date
        });
    }
    componentDidMount (){
    }
    render (){
        let {date} = this.state;
        return (
            <header className="" style={{backgroundImage: `url(../../images/7.jpg)`,}}>
                <div className="mask">
                    <div className="h-header">
                        <div className="h-header-logo">
                            <Link to="/">
                                <img src="../../images/logo5.png" alt="sariay" title="sariay" />
                            </Link>
                        </div>
                        <div className="h-header-nav">
                            <ul>
                                <li><Link to="/" className={this.props.url == "/" ? "active":""}>首页</Link></li>
                                <li><Link to="/archives" className={this.props.url == "/archives" ? "active":""}>归档</Link></li>
                                <li><Link to="/categories" className={this.props.url == "/categories" ? "active":""}>分类</Link></li>
                                <li><Link to="/tags" className={this.props.url == "/tags" ? "active":""}>标签</Link></li>
                                <li><Link to="/about" className={this.props.url == "/about" ? "active":""}>关于</Link></li>
                                <li><Link to="/album" className={this.props.url == "/album" ? "active":""}>相册</Link></li>
                                <li><a href="javascript:;">搜索</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-header-body">
                        <p className="motto">
                            <span>人生的困扰大抵来自四个方面：不可避免的死亡，内心深处的孤独感，我们追求的自由以及生活并无显而易见的意义可言。 </span>
                            <br />
                            -
                            <br />
                            <span>欧文·亚隆</span>
                        </p>
                    </div>
                    <div className="h-header-footer">
                        <a href="javascript:;" className="h-header-footer-goFooter">
                            <i className="iconfont iconweb_xiangxiazhankai"></i>
                        </a>
                        <span className="h-header-footer-date">
                            {date.year}年 {this.formaterDay(date.month)}月 {date.day}日
                        </span>
                    </div>
                </div>
            </header>
        );
    }

    // 格式化月份
    formaterDay (month){
        switch (month){
            case "1":
                return "一";
            case "2":
                return "二";
            case "3":
                return "三";
            case "4":
                return "四";
            case "5":
                return "五";
            case "6":
                return "六";
            case "7":
                return "七";
            case "8":
                return "八";
            case "9":
                return "九";
            case "10":
                return "十";
            case "11":
                return "十一";
            case "12":
                return "十二";
            default:
                return "零";
        }
    }
}
export default Header;