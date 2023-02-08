import React, { PureComponent } from 'react';
import iconfb from '../../asset/icon-fb/home.png';
import iconfb2 from '../../asset/icon-fb/youtube.png';
import iconfb3 from '../../asset/icon-fb/group.png';
import iconfb4 from '../../asset/icon-fb/game-console.png';
import iconfb5 from '../../asset/icon-fb/shop.png';
import './center.css';

function Center() {
  return (
    <div className="flex-center">
      <ul>
        <li>
          <span><a href=""><img src={iconfb} alt="" /></a></span>
          <span className='title-homepage'>Trang Chủ</span>
        </li>
        <li>
          <span><a href=""><img src={iconfb2} alt="" /></a></span>
          <span className='title-homepage'>Watch</span>
        </li>
        <li>
          <span><a href=""><img src={iconfb5} alt="" /></a></span>
          <span className='title-homepage'>Marketplace</span>
        </li>
        <li>
          <span><a href=""><img src={iconfb3} alt="" /></a></span>
          <span className='title-homepage'>Nhóm</span>
        </li>
        <li>
          <span><a href=""><img src={iconfb4} alt="" /></a></span>
          <span className='title-homepage'>Trò chơi</span>
        </li>
      </ul>
    </div>
  );
}
export default Center;
