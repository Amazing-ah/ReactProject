import React from 'react'
import checked from '../../../assets/img/radio_hig.png'
import noChecked from '../../../assets/img/radio_nor.png'
import address from '../../../assets/img/store.png'
import img from '../../../assets/img/meizhuang.png'
export default function Text() {
    return (
        <div>
            <div className="ShopCar_Main">
                <ul>
                    <li className='ShopCar_address'>
                        <div>
                            <img src={address} alt="" />
                        </div>
                        <div>
                            山东省济南市
                            </div>
                    </li>
                    <li className='ShopCar_text'>
                        <div className='carCheck hide' >
                            <img src={noChecked} alt="" />
                        </div>
                        <div className='carImg'>
                            <img src={img} alt="" />
                        </div>
                        <div className='carNum'>
                            <p> 山东省济南市</p>
                            <p>
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </p>
                            <p>
                                总价：<span>368.00</span>
                            </p>
                        </div>
                        <div className='carMoney'>
                            $ <span>368.00</span>
                        </div>
                        <div className="carDel">
                            删除
                            </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}