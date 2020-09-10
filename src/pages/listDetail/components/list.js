import React from 'react'
import pic from '../../../assets/img/img/home/goods.jpg'

export default function list() {
    return (
        <div className='listDetail'>
            <ul>
                <li>
                    <div className='listDetail_pic'>
                        <img src={pic} alt="" />
                    </div>
                    <div className='listDetail_text'>
                        <p className='listDetail_textTitle'>海尔电视</p>
                        <p className='listDetail_price'>
                            <span className='listDetail_color'>¥</span>
                            <span className='listDetail_color'>2999.00</span>
                        </p>
                        <p className='listDetail_button'>
                            <button>立即抢购</button>
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    )
}