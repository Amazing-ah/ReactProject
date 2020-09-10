import React, { Component } from 'react'
import './Me.css'
import home from '../../assets/img/img/home.png'
import touX from '../../assets/img/img/me/timg.jpg'

export default class Me extends Component {
    render() {
        return (
            <div className='me'>
                <div className="me_header">
                    <div>
                        <img src={home} alt="" />
                    </div>
                    <div>
                        个人中心
                    </div>
                    <div>
                        <img src={home} alt="" />
                    </div>
                </div>
                <div className="me_like">
                    <div>
                        <p> aaaaaa</p>
                    </div>
                    <div>
                        <p>
                            <img src={home} alt="" />
                        </p>
                        <p>我的收藏</p>
                        <p>(5)</p>
                    </div>


                </div>

                <div className="me_order">
                    <div className='me_orderTop'>
                        <span>我的订单</span>
                        <span>查看订单</span>
                    </div>
                    <div className='me_orderBottom'>
                        <ul>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>代发货</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>代发货</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>代发货</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>代发货</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>代发货</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="me_address">
                    收货地址管理
                </div>




                <div className="me_touX">
                    <p>
                        <img src={touX} alt="" />
                    </p>
                </div>


                <div className="me_num">
                    3+
                </div>
            </div>
        )
    }
}