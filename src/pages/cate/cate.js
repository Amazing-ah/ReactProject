import React, { Component } from 'react'
import './cate.css'
import Header from '../../components/header/Header'
import { reqCateTree, reqGetGoods } from '../../utils/request'
export default class Cate extends Component {
    /* 
    TODO
   加载商品详情
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
                catename: res.data.list,
            })
            this.getGoods(0)
        })
    }

    getGoods(index) {
        this.setState({
            ...this.state,
            list: this.state.catename[index].children
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
                                catename.map((item, index) => {
                                    // 点击获取goods
                                    return (<li key={item.id} onClick={() => { this.getGoods(index) }} >{item.catename} </li>)

                                })

                            }

                        </ul>
                    </div>
                    <div className="cate_man_right">
                        <ul>
                            {/* 渲染goods */}

                            {
                                list.map(item => (<li key={item.id}>  <div className='pic'>
                                    <img src={item.img} alt="" />
                                </div>
                                    <div className='picTitle'> {item.catename}</div> </li>))
                            }
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}