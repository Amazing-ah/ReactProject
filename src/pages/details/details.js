import React, { Component } from 'react'
import './details.css'
import pic from '../../assets/img/img/home/swiper.jpg'
import buy from '../../assets/img/img/cart_on.png'
export default class Details extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className="header">
                    <p>返回</p>
                    <p>商品详情</p>
                    <p>111</p>
                </div>
                <div className="main">
                    <div className='pic'><img src={pic} alt="" /></div>
                    <div className='text'>
                        <div className='title'>
                            <div>美白护肤爽</div>
                            <div>
                                <p>
                                    <img src={buy} alt="" />
                                </p>
                                <p> 收藏</p>
                            </div>
                        </div>
                        <div className='price'>
                            <ul>
                                <li className='colorRed'>¥</li>
                                <li className='colorRed'>80.00</li>
                                <li className='colorYellow box' >热卖</li>
                                <li className='colorYellow box' >新品</li>
                            </ul>
                        </div>
                        <div className='oldPrice'>¥108.00</div>
                    </div>
                </div>
                <div className="footer">
                    <div></div>
                    <div>
                        加入购物车
                    </div>
                </div>
            </div>
        )
    }
}