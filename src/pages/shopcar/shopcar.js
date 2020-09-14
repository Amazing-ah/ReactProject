import React, { Component } from "react";
import "./ShopCar.css";
import { Toast } from "antd-mobile";

import Header from "../../components/header/Header";
import Text from "./components/text";
import Footer from "./components/footer";

import {
  reqShopCarList,
  reqShopCarChange,
  reqShopCarDel,
} from "../../utils/request";
export default class ShopCar extends Component {
  constructor() {
    super();
    this.state = {
      // 请求得到的数据
      list: [],
      //  图片变量？
      nChange: false,
      //   总价格
      allNumber: 0,
    };
  }

  componentDidMount() {
    const uid = sessionStorage.getItem("uid");
    reqShopCarList({ uid: uid }).then((res) => {
      // console.log(res.data.list.length);
      if (res.data.list !== null) {
        res.data.list.map((item) => {
          item.isCheck = false;
        });

        this.setState({
          ...this.state,
          list: res.data.list,
        });
      }
    });
  }
  // addNUM
  addNum(id) {
    const uid = sessionStorage.getItem("uid");
    let num = {
      id: id,
      type: 2,
    };
    reqShopCarChange(num);
    reqShopCarList({ uid: uid }).then((res) => {
      console.log(res);
      this.setState({
        ...this.state,
        list: res.data.list,
        allNumber: 0,
      });
    });
  }

  // redNum
  redNum(id) {
    const uid = sessionStorage.getItem("uid");
    let num = {
      id: id,
      type: 1,
    };
    reqShopCarChange(num);
    reqShopCarList({ uid: uid }).then((res) => {
      this.setState({
        ...this.state,
        list: res.data.list,
        allNumber: 0,
      });
    });
  }

  //更改图片

  changeImg() {
    this.setState({
      ...this.state,
      nChange: !this.state.nChange,
    });
  }
  // 更改选中图片
  checkedImg(index) {
    //   更改list 里边isCheck
    this.state.list[index].isCheck = !this.state.list[index].isCheck;

    this.setState({
      ...this.state,
      list: this.state.list,
    });
    // console.log(this.state.list[index]);
  }

  /* 删除购物车*/
  shopCarDel(id) {
    const uid = sessionStorage.getItem("uid");
    reqShopCarDel({ id: id }).then((res) => {
      if (res.data.code === 200) {
        this.successToast();
        reqShopCarList({ uid: uid }).then((res) => {
          this.setState({
            ...this.state,
            list: res.data.list,
          });
        });
      }
    });
  }

  // 删除成功
  successToast() {
    Toast.success("删除成功", 1);
  }

  // every
  allCheck() {
    if (this.state.list.length > 0) {
      let a = this.state.list.map((item) => {
        return item.isCheck === true ? true : false;
      });
      return a.every((item) => item === true);
    }
  }
  // 全选
  checkedAll(isAll) {
    this.state.list.map((item) => {
      console.log(item);
      item.isCheck = !isAll;
      this.state.allNumber += item.price * item.num;
    });

    this.setState({
      list: this.state.list,
      allNumber: !isAll ? this.state.allNumber : 0.0,
    });
  }

  // TODO 价格
  addAllNum(price) {
    this.state.allNumber += price;
    this.setState({
      ...this.state,
      allNumber: this.state.allNumber,
    });
  }
  redAllNum(price) {
    this.state.allNumber -= price;
    this.setState({
      ...this.state,
      allNumber: this.state.allNumber,
    });
  }

  render() {
    const { list, nChange, allNumber } = this.state;
    let isAll = this.allCheck();

    return (
      <div className="ShopCar">
        <Header title="购物车"></Header>
        {list.length > 0 ? (
          <Text
            info={list}
            isHide={nChange}
            addNum={(id) => {
              this.addNum(id);
            }}
            redNum={(id) => {
              this.redNum(id);
            }}
            shopCarDel={(id) => {
              this.shopCarDel(id);
            }}
            checkedImg={(id) => {
              this.checkedImg(id);
            }}
            addAllNum={(price) => {
              this.addAllNum(price);
            }}
            redAllNum={(price) => {
              this.redAllNum(price);
            }}
          ></Text>
        ) : null}

        <Footer
          info={nChange}
          isAll={isAll}
          changeImg={() => {
            this.changeImg();
          }}
          allCheck={() => {
            this.allCheck();
          }}
          checkedAll={(isAll) => {
            this.checkedAll(isAll);
          }}
          allNumber={allNumber}
        ></Footer>
      </div>
    );
  }
}
