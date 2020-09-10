import React, { Component } from 'react'
import './popCat.css'
import pic from '../../assets/img/img/home/goods.jpg'
export default class PopCat extends Component {
    render() {
        return (
            <div className='wrap'>

                <div className="footer">
                    <ul>
                        <li className='pic'>
                            <div>
                                <img src={pic} alt="" />
                            </div>
                            <div>美白护肤爽</div>
                        </li>
                        <li className='title'>
                            美妆容量
                        </li>
                        <li className='cate'>
                            <p>15L</p>
                            <p>30L</p>
                            <p>45L</p>
                        </li>
                        <li className='end'>
                            <button>加入购物车</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}