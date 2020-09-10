import React, { Component } from 'react'
import './cate.css'
import Header from '../../components/header/Header'
export default class Cate extends Component {
    render() {
        return (
            <div className='cate'>

                <Header title='分类' back></Header>

                <div className="cate_man">
                    <div className="cate_man_left">
                        <ul>
                            <li>家用电器</li>
                            <li>家用电器</li>
                            <li>家用电器</li>
                            <li>家用电器</li>
                        </ul>
                    </div>
                    <div className="cate_man_right">
                        <ul>
                            <li>
                                <div className='pic'></div>
                                <div className='picTitle'> 电视</div>
                            </li>
                            <li>
                                <div className='pic'></div>
                                <div className='picTitle'> 电视</div>
                            </li>
                            <li>
                                <div className='pic'></div>
                                <div className='picTitle'> 电视</div>
                            </li>

                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}