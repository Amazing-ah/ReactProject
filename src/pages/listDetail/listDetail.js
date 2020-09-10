import React, { Component } from 'react'
import './listDetail.css'

import pic from '../../assets/img/img/home/goods.jpg'
export default class ListDetail extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className="header">
                    <p>返回</p>
                    <p>电视</p>
                    <p>111</p>
                </div>
                <div className="main">
                    <ul>
                        <li>
                            <div className='pic'>
                                <img src={pic} alt="" />
                            </div>
                            <div className='text'>
                                <p className='textTitle'>海尔电视</p>
                                <p className='price'>
                                    <span className='color'>¥</span>
                                    <span className='color'>2999.00</span>
                                </p>
                                <p className='button'>
                                    <button>立即抢购</button>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='pic'>
                                <img src={pic} alt="" />
                            </div>
                            <div className='text'>
                                <p className='textTitle'>海尔电视</p>
                                <p className='price'>
                                    <span className='color'>¥</span>
                                    <span className='color'>2999.00</span>
                                </p>
                                <p className='button'>
                                    <button>立即抢购</button>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}