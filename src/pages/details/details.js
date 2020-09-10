import React, { Component } from 'react'
import Header from '../../components/header/Header'
import DetailText from './components/DetailText'
import './details.css'
import { reqGoodsInfo } from '../../utils/request';
export default class details extends Component {

    // reqGoodsInfo()

    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        reqGoodsInfo({ id: id }).then(res => {
            this.setState({
                data: res.data.list
            })
        })

    }

    render() {
        let { data } = this.state
        return (
            <div className='details'>
                <Header title='商品详情' back></Header>
                {
                    data.length > 0 ? <DetailText info={data}></DetailText> : null
                }

                <div className="details_footer">
                    <div></div>
                    <div>
                        加入购物车
                    </div>
                </div>
            </div>
        )
    }
}