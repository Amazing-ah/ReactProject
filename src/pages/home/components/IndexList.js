import React from 'react'
export default function IndexList(props) {
    const list = props.list

    toDetail(){
        // this.props.history.push('')
    }


    return (
        <div>
            {
                list.map(item => {
                    console.log(item);
                    return (
                        <div className="index_list" key={item.id} >
                            <div className="index_goodsPic">
                                <img src={item.img} alt="" />
                            </div>
                            <div className='index_text'>
                                <p className='index_title'>{item.goodsname} </p>
                                <p>
                                    <span className='index_color'>¥</span>
                                    <span className='index_price index_color'>{item.price}</span>
                                </p>
                                <p className='index_buy'>
                                    <button onClick={() => this.toDetail()}>
                                        立即抢购
                         </button>
                                </p>
                            </div>
                        </div>

                    )

                })
            }



        </div>
    )
}

