import React, { Component } from 'react'
import { reqCarAdd } from '../../../utils/request'
export default class PopCat extends Component {
    constructor() {
        super()
        this.state = {
            // user: {
            //     uid: '',
            //     goodsid: '',
            //     num: 1,
            // },

            n: ''

        }
    }
    changeColor(index) {
        this.setState({
            n: index
        })
    }
    /* 
     TODO
    button 添加 请求reqCarAdd
    需要
    uid  待解决
    goodsid
    num
     */


    carAdd(id) {
        let user = {
            uid: '',
            goodsid: '',
            num: 1,
        }
        user.uid = sessionStorage.getItem('uid')
        user.goodsid = id;
        console.log(user);

        reqCarAdd(user)


    }

    render() {
        const { info } = this.props;
        const { n } = this.state
        let data = info[0]
        //  传子组件 img goodsname specsattr specsattr
        let specsattr = JSON.parse(data.specsattr);
        return (
            <div>
                <div className="PopCate">
                    <div className="PopCate_footer">
                        <ul>
                            <li className='PopCate_pic'>
                                <div>
                                    <img src={data.img} alt="" />
                                </div>
                                <div>{data.goodsname}</div>
                            </li>
                            <li className='PopCate_title'>
                                {data.specsname}
                            </li>
                            <li className='PopCate_cate'>
                                {
                                    specsattr.map((item, index) => {
                                        return (
                                            <p
                                                key={index}
                                                onClick={() => this.changeColor(index)}
                                                className={index === n ? 'borderChange' : null}
                                            >{item} </p>
                                        )
                                    })
                                }
                            </li>
                            <li className='PopCate_end'>
                                <button onClick={() => this.carAdd(data.id)}>加入购物车</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}