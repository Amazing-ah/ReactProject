import React, { Component } from 'react'
import { reqCarAdd } from '../../../utils/request'
import { Toast } from 'antd-mobile';
export default class PopCat extends Component {
    constructor() {
        super()
        this.state = {
            n: ''

        }
    }

    changeColor(index) {
        this.setState({
            n: index
        })
    }
    successToast() {
        Toast.success('添加成功', 1);
    }


    carAdd(id) {
        let user = {
            uid: '',
            goodsid: '',
            num: 1,
        }
        const { hide } = this.props
        user.uid = sessionStorage.getItem('uid')
        user.goodsid = id;
        console.log(hide);

        reqCarAdd(user).then(res => {
            if (res.data.code === 200) {
                this.successToast()
                hide()
            }
        })



    }

    render() {
        const { info, hide } = this.props;

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