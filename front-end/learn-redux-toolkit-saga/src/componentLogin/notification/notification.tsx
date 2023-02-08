import React, { PureComponent } from 'react';
import iconfb0 from '../../asset/icon-fb/right-arrow.png';
import iconfb from '../../asset/icon-fb/Lê Huy Hoàng.png';
import iconfb2 from '../../asset/icon-fb/notification.png';
import iconfb3 from '../../asset/icon-fb/messenger.png';
import iconfb4 from '../../asset/icon-fb/plus.png';
import iconfb5 from '../../asset/icon-fb/myspace.png';
import iconfb6 from '../../asset/icon-fb/settings.png';
import iconfb7 from '../../asset/icon-fb/question.png';
import iconfb8 from '../../asset/icon-fb/moon.png';
import iconfb9 from '../../asset/icon-fb/comment.png';
import iconfb10 from '../../asset/icon-fb/logout.png';

import './notification.css';

let click= document.getElementById('dropdown-menu');
const toggleMenu = () => {
  click?.classList.toggle('open-menu')
}

function Notification() {
  return (
    <div className="flex-notification">
      <ul>
        <li>
          <span className="title-homepage">Tài khoản</span>
          <span className="">
            <button className="btn" onClick={toggleMenu}>
              <img src={iconfb} alt="" />
            </button>
            <div id='dropdown-menu' className="dropdown-fb">
              <div className="dropdown-top">
                <div className="dropdown-top-name">
                  <a className="link-top" href="">
                    <div className="link-top-name padding-all">
                      <img src={iconfb} alt="" />
                      <div className="padding-all"> Hoàng Lê</div>
                    </div>
                    <div className="padding-all">
                      <img src={iconfb5} alt="" />
                    </div>
                  </a>
                </div>
                <div className="line"></div>
                <div className="dropdown-profile padding-all">
                  <a href="">Xem tất cả trang cá nhân</a>
                </div>
              </div>
              <div className="dropdown-bottom">
                <a href="">
                  <div className="setting">
                    <div className="setting-title">
                      <img src={iconfb6} alt="" />
                      <span>Cài đặt & quyền riêng tư</span>
                    </div>
                    <div>
                      <img src={iconfb0} alt="" />
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="setting">
                    <div className="setting-title">
                      <img src={iconfb7} alt="" />
                      <span>Trợ giúp và hỗ trợ</span>
                    </div>
                    <div>
                      <img src={iconfb0} alt="" />
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="setting">
                    <div className="setting-title">
                      <img src={iconfb8} alt="" />
                      <span>Màn hình & trợ năng</span>
                    </div>
                    <div>
                      <img src={iconfb0} alt="" />
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="setting">
                    <div className="setting-title">
                      <img src={iconfb9} alt="" />
                      <span>Đóng góp ý kiến</span>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="setting">
                    <div className="setting-title">
                      <img src={iconfb10} alt="" />
                      <span>Đăng xuất</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </span>
        </li>
        <li>
          <span>
            <a href="">
              <img src={iconfb2} alt="" />
            </a>
          </span>
          <span className="title-homepage">Thông báo</span>
        </li>
        <li>
          <span>
            <a href="">
              <img src={iconfb3} alt="" />
            </a>
          </span>
          <span className="title-homepage">Messenger</span>
        </li>
        <li>
          <span>
            <a href="">
              <img src={iconfb4} alt="" />
            </a>
          </span>
          <span className="title-homepage">Tạo</span>
        </li>
      </ul>
    </div>
  );
}
export default Notification;
