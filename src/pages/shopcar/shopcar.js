import React, { Component } from 'react'
import './shopcar.css'
import Header from '../../components/header/Header'
import home from '../../assets/img/img/home.png'
import good from '../../assets/img/img/home/goods.jpg'

export default class ShopCar extends Component {
  render() {
    return (
      <div className='shopCar'>
        <div>
          <Header title='购物车' back></Header>
          <div className="shopCar_main">
            <ul>
              <li>
                <div className="shopCar_top">
                  <img src={home} alt="" />
                  <p>山东省济南市</p>
                </div>
                <div className="shopCar_text">
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className='shopCar_right'>
                    <ul>
                      <li>
                        <img src={good} alt="" />
                      </li>
                      <li>
                        <p>自行车</p>
                        <button>-</button>
                        <button>1</button>
                        <button>+</button>
                        <p>
                          <span>总价</span>
                          <span>2999.00</span>
                        </p>
                      </li>
                      <li>
                        <span>¥</span>
                        <span>2999.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="shopCar_buy">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                <span>全选</span>
              </li>
              <li>
                <img src={home} alt="" />
                <span>编辑</span>
              </li>
              <li>
                <p>
                  <span>合计：</span><span>0.00</span>
                </p>
                <p>
                  （不含运费）
                </p>
              </li>
              <li>
                <span>去结算</span>
              </li>
            </ul>
          </div>


        </div>
      </div>
    )
  }
}
