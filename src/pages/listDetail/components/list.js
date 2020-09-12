import React from 'react'

export default function list(props) {
    const { info, goDetail } = props
    // console.log(carAdd);
    return (
        <div className='listDetail'>
            <ul>
                {info.map(item => {
                    return (
                        <li key={item.id}>
                            <div className='listDetail_pic'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='listDetail_text'>
                                <p className='listDetail_textTitle'>{item.goodsname}</p>
                                <p className='listDetail_price'>
                                    <span className='listDetail_color'>¥</span>
                                    <span className='listDetail_color'>{item.price}</span>
                                </p>
                                <p className='listDetail_button'>
                                    <button onClick={() => { goDetail(item.id) }}>立即抢购</button>
                                </p>
                            </div>
                        </li>
                    )
                })}




            </ul>
        </div>
    )
}