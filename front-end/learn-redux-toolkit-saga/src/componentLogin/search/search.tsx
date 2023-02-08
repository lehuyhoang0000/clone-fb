import React, { PureComponent } from 'react';
import iconfb from '../../asset/icon-fb/facebook.png';
import iconfb2 from '../../asset/icon-fb/icon-sreach.svg';
import './search.css';

function Search() {
  return (
    <div className="flex-search">
      <a href="">
        <img src={iconfb} alt="" />
      </a>
      <div>&nbsp;</div>
      <label className="lable-img" htmlFor="">
        <span>
          <img src={iconfb2} alt="" />
        </span>
        <input type="text" placeholder="Tìm kiếm trên FaceBook" />
      </label>
    </div>
  );
}
export default Search;
