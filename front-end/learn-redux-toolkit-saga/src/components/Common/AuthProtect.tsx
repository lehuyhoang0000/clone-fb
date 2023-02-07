import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}
const AuthProtect = (props: Props) => {
  const token = Boolean(localStorage.getItem('access_token'));
  console.log('is logged token', token)
  if (!token) return <Navigate to={'/login'} />;
  return <>{props.children}</>;
};

export default AuthProtect;
