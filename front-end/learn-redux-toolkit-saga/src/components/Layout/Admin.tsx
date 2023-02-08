import Center from 'componentLogin/center/center';
import Search from 'componentLogin/search/search';
import Notification from 'componentLogin/notification/notification';
import * as React from 'react';
import './Admin.css';

export interface AdminLayoutProps {}

export function AdminLayout(props: AdminLayoutProps) {
  return (
    <>
      <div className="header">
        <div className="search-fb">
          <Search />
        </div>
        <div className="center-fb">
          <Center />
        </div>
        <div className="notification-fb">
          <Notification />
        </div>
      </div>
    </>
  );
}
