import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import '../../../utils/request'

class IndexList extends Component {

    toDetail(id) {
        this.props.history.push('/detail/' + id)
    }
    render() {
        const list = this.props.list;

        return (
            <div className='IndexList'>
                {
                    list.map(item => {
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
                                        <button onClick={() => this.toDetail(item.id)}>
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
}

export default withRouter(IndexList)
