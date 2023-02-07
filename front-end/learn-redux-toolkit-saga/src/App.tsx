import React, { useEffect } from 'react';
import cityApi from 'api/cityApis';
import { Route, Routes } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout/Admin';
import { NotFound } from 'components/Common/NotFound';
import AuthProtect from 'components/Common/AuthProtect';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <div>
      <Button onClick={() => dispatch(authActions.logout())}>Log Out</Button>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path='/admin' element={<AuthProtect><AdminLayout/></AuthProtect>}/>

        <Route path="/" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
