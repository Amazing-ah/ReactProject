import React from 'react'
import change from '../../../assets/img/editor_hig.png'
import noChange from '../../../assets/img/editor_nor.png'
import checked from '../../../assets/img/radio_hig.png'
import noChecked from '../../../assets/img/radio_nor.png'
export default function Footer() {
    return (
        <div>
            <div className='ShopCar_footer'>
                <ul>
                    <li>
                        <div>
                            <img src={noChecked} alt="" />
                        </div>
                        <div>
                            全选
                            </div>
                    </li>
                    <li>
                        <div>
                            <img src={change} alt="" />
                        </div>
                        <div>
                            编辑
                            </div>
                    </li>
                    <li>
                        <div>
                            合计：<span className='moneyAll'> 0.00</span>
                        </div>
                        <div>
                            （不含运费）
                            </div>
                    </li>
                    <li className='ShopCar_buy'>
                        去结算
                    </li>
                </ul>
            </div>

        </div>
    )
}