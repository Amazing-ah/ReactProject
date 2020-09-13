import React from "react";
import change from "../../../assets/img/editor_hig.png";
import noChange from "../../../assets/img/editor_nor.png";
import checked from "../../../assets/img/radio_hig.png";
import noChecked from "../../../assets/img/radio_nor.png";
export default function Footer(props) {
  let { changeImg, info, isAll, checkedAll, allNumber } = props;

  return (
    <div>
      <div className="ShopCar_footer">
        <ul>
          <li onClick={() => checkedAll(isAll)}>
            <div>
              <img src={isAll ? checked : noChecked} alt="" />
            </div>
            <div>全选</div>
          </li>
          <li
            onClick={() => {
              changeImg();
            }}
          >
            <div>
              <img src={info ? change : noChange} alt="" />
            </div>
            <div>编辑</div>
          </li>
          <li>
            <div>
              {/* TODO 总价格 */}
              {/* 总价等于 选中的总和相加 
              isAll -true ,获取总价 然后相加
              isAll?(????):0.00   price+=price
              */}
              合计：
              <span className="moneyAll"> {allNumber}</span>
            </div>
            <div>（不含运费）</div>
          </li>
          <li className="ShopCar_buy">去结算</li>
        </ul>
      </div>
    </div>
  );
}
