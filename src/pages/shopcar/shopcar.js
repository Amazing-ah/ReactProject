import React, { Component } from 'react'
import './ShopCar.css'

import Header from '../../components/header/Header'
import Text from './components/text'
import Footer from './components/footer'
export default class ShopCar extends Component {

    render() {
        return (
            <div className='ShopCar'>
                <Header title='购物车'></Header>

                <Text></Text>


                <Footer></Footer>




            </div>
        )
    }
}