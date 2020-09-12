import React, { Component } from 'react'
import './cate.css'
import Header from '../../components/header/Header'
import { reqCateTree, reqGetGoods } from '../../utils/request'
export default class Cate extends Component {
    /* 
    TODO
    页面一加载，
    直接请求第一个列表的goods
     */
    constructor() {
        super()
        this.state = {
            catename: [],
            list: [],
        }
    }

    componentDidMount() {
        reqCateTree().then(res => {
            this.setState({
                ...this.state,
                catename: res.data.list
            })

            reqGetGoods({ fid: res.data.list[0].id }).then(res => {
                this.setState({
                    ...this.state,
                    list: res.data.list
                })
            })
        })


    }
    getGoods(id) {
        reqGetGoods({ fid: id }).then(res => {
            this.setState({
                ...this.state,
                list: res.data.list
            })
        })
    }



    render() {
        const { catename, list } = this.state
        return (
            <div className='cate'>

                <Header title='分类' back></Header>

                <div className="cate_man">
                    <div className="cate_man_left">
                        <ul>
                            {/* 循环state */}
                            {
                                catename.map((item) => {
                                    // 点击获取goods
                                    return (<li key={item.id} onClick={() => { this.getGoods(item.id) }} >{item.catename} </li>)

                                })

                            }

                        </ul>
                    </div>
                    <div className="cate_man_right">
                        <ul>
                            {/* 渲染goods */}
                            {
                                list.map(item => (
                                    <li key={item.id}>
                                        <div className='pic'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='picTitle'> {item.goodsname}</div>
                                    </li>))

                            }

                            {/* <li>
                                <div className='pic'></div>
                                <div className='picTitle'> 电视</div>
                            </li> */}

                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}