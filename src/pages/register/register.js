import React, { Component } from 'react'
import './register.css'
import '../../components/header/Header'
import Header from '../../components/header/Header'
import { reqLogon } from '../../utils/request'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            users: {
                phone: '',
                nickname: '',
                password: ''
            }
        }
    }

    changeUer(e, key) {
        this.setState({
            users: {
                ...this.state.users,
                [key]: e.target.value
            }
        })
    }

    Logon() {
        reqLogon(this.state.users).then(res => {
            if (res.data.code === 200) {
                this.props.history.push('/login')
            }
        })
    }


    render() {
        let { users } = this.state
        return (
            <div className="logon">
                <Header back title='注册'></Header>

                <div className="logon_form" >
                    <ul>
                        <li className='li'>  手机号：</li>
                        <li>
                            <input type="text" placeholder="请输入账号" onChange={(e) => { this.changeUer(e, 'phone') }} value={users.phone} />
                        </li>
                        <li className='li'>昵称：</li>
                        <li>
                            <input type="text" placeholder="请输入密码" onChange={(e) => { this.changeUer(e, 'nickname') }} value={users.nickname} />
                        </li>
                        <li className='logon_li'> 密码：</li>
                        <li>
                            <input type="password" placeholder="请输入密码"
                                placeholder="请输入密码" onChange={(e) => { this.changeUer(e, 'password') }} value={users.password} />
                        </li>
                        <li className=' logon_button'>
                            <button onClick={() => this.Logon()}>注册</button>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}