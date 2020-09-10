import React, { Component } from 'react'
import buy from '../../../assets/img/img/cart_on.png'
export default class DetailText extends Component {

    constructor() {
        super()
        this.state = {
            data: {},
            description: ''
        }


    }

    componentDidMount() {
        const { info } = this.props
        console.log(info);

        this.setState({
            data: info[0],
            description: info[0].description
        })

    }
    render() {
        console.log(this.state.data);
        console.log(this.state.description);
        // const { info } = this.props
        // let data = info[0];
        // if (this.refs.box) {
        //     this.refs.box.innerHTML = data.description
        // }
        let { data, description } = this.state
        if (this.refs.box) {
            this.refs.box.innerHTML = description

        }

        return (
            <div className='DetailText'>
                <div className='detailText_pic'>
                    <img src={data.img} alt="" />
                </div>
                <div className='detailText_text'>
                    <div className='detailText_title'>
                        <div>{data.goodsname}</div>
                        <div>
                            <p>
                                <img src={buy} alt="" />
                            </p>
                            <p> 收藏</p>
                        </div>
                    </div>
                    <div className='detailText_price'>
                        <ul>
                            <li className='detailText_colorRed'>¥</li>
                            <li className='detailText_colorRed'>{data.price}</li>
                            {
                                data.ishot === 1 ? (<li className='detailText_colorYellow detailText_box' >热卖</li>) : null
                            }
                            {
                                data.isnew === 1 ? (<li className='detailText_colorYellow detailText_box' >新品</li>) : null
                            }

                        </ul>
                    </div>
                    <div className='detailText_oldPrice'>¥{data.market_price}</div>
                </div>
                <div ref='box' className='detail_end'></div>
            </div>
        )
    }
}