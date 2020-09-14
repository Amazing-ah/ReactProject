import React from "react";
import checked from "../../../assets/img/radio_hig.png";
import noChecked from "../../../assets/img/radio_nor.png";
import address from "../../../assets/img/store.png";

import { priceFilter } from "../../../utils/Filter";
export default function Text(props) {
  const {
    info,
    addNum,
    redNum,
    isHide,
    shopCarDel,
    checkedImg,
    addAllNum,
    redAllNum,
  } = props;

  return (
    <div>
      {info.map((item, index) => {
        return (
          <div className="ShopCar_Main" key={item.id}>
            <ul>
              <li className="ShopCar_address">
                <div>
                  <img src={address} alt="" />
                </div>
                <div>山东省济南市</div>
              </li>
              <li className="ShopCar_text">
                <div
                  className={isHide ? "carCheck hide" : "carCheck "}
                  onClick={() => checkedImg(index)}
                >
                  {/* 选中图片 */}
                  <img
                    src={item.isCheck ? checked : noChecked}
                    alt=""
                    onClick={() =>
                      !item.isCheck
                        ? addAllNum(item.num * item.price)
                        : redAllNum(item.num * item.price)
                    }
                  />
                </div>
                <div className="carImg">
                  <img src={item.img} alt="" />
                </div>
                <div className="carNum">
                  <p> {item.goodsname}</p>
                  <p>
                    <button
                      onClick={() => redNum(item.id)}
                      disabled={item.num <= 1}
                    >
                      -
                    </button>
                    <button>{item.num}</button>
                    <button onClick={() => addNum(item.id)}>+</button>
                  </p>
                  <p>
                    总价：<span>{priceFilter(item.num * item.price)}</span>
                  </p>
                </div>
                <div className="carMoney ">
                  $ <span>{priceFilter(item.price)}</span>
                </div>
                {/* 删除列  删除 传入id，*/}
                <div
                  className={isHide ? "carDel" : "carDel hide"}
                  onClick={() => shopCarDel(item.id)}
                >
                  删除
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
