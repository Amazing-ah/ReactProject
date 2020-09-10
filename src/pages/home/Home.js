import React, { Component } from 'react'
import './Home.css'
// 头部
import Header from './components/IndexHeader'
// 轮播图
import Banner from './components/Banner'
// 限时抢购
import HomeTime from './components/HomeTime'
// 商品列表
import IndexList from './components/IndexList'
import { reqBanner, reqIndexList } from '../../utils/request'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            list: []
        }
    }

    componentDidMount() {

        reqBanner().then(res => {
            this.setState({
                banner: res.data.list
            })
        }
        )

        reqIndexList().then(res => {

            this.setState({
                list: res.data.list[0].content
            })
        })
    }


    render() {
        const { banner, list } = this.state;
        return (
            <div className='home'>
                <Header></Header>
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null
                }
                <HomeTime></HomeTime>
                {
                    list.length > 0 ? <IndexList list={list}></IndexList> : null
                }



            </div>
        )
    }
}