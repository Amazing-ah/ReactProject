import React, { Component } from 'react'
import './listDetail.css'
import List from './components/list'
import Header from '../../components/header/Header'
import { reqGetGoods } from '../../utils/request'

export default class ListDetail extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            list: []
        }
    }
    componentDidMount() {
        console.log(this.props);
        reqGetGoods({ fid: this.props.match.params.id + '' }).then(res => {

            this.setState({
                list: res.data.list,
                name: this.props.match.params.name
            })
        })
    }

    // 子组件方法
    goDetail(id) {
        // 跳转到商品详情
        this.props.history.push('/detail/' + id)
    }
    button() {
        this.props.history.push('/login')
    }
    render() {
        console.log(this.props);
        const { list, name } = this.state

        return (

            <div>
                <Header title={name} back></Header>
                {
                    list.length > 0 ? <List info={list} goDetail={(id) => { this.goDetail(id) }}></List> : null
                }


            </div>
        )
    }
}