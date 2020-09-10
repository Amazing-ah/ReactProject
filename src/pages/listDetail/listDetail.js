import React, { Component } from 'react'
import './listDetail.css'
import ListDetail from './components/list'
import Header from '../../components/header/Header'
export default class ListDetail extends Component {
    render() {
        return (
            <div className='listDetail'>
                <Header title='商品详情' back></Header>
                <ListDetail></ListDetail>

            </div>
        )
    }
}