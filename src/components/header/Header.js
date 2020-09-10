import React, { Component } from 'react'
import './Header.css'
import '../../assets/css/iconfont.css'

import { withRouter } from "react-router-dom";

// 1.只有路由组件才可以使用编程式导航，否则会报错。
// 2.如果一个非路由组件要使用编程式导航，需要通过withRouter()解决

class Header extends Component {

    goBack() {
        this.props.history.goBack()
    }
    goLogon() {
        this.props.history.push("/logon")
    }

    render() {
        let { title, back, logon } = this.props;
        return (
            <div className='header'>

                {back ? <i className='header-goBack iconfont icon-fanhui' onClick={() => { this.goBack() }} ></i> : null}
                <div className="header-title">
                    {title}
                </div>
                {logon ? <div className='header-goLogon' onClick={() => { this.goLogon() }} >注册</div> : null}
            </div>
        )
    }
}
export default withRouter(Header)