import { CircularProgress, Paper } from '@mui/material';
// import { makeStyles } from '@ma';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions } from '../authSlice';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Navigate } from 'react-router-dom';

// const useStyles: never = makeStyles((theme) => ({
//   root: {},
// }));

export default function LoginPage() {
  // const classes = useStyles();
  const dispatch = useAppDispatch();
  const crrUser = useSelector((state: RootState) => state.auth);

  const isLoggingIn = useAppSelector((state) => state.auth.logging);
 
  const handleLoginClick = () => {
    console.log('handleLoginClick');
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
   
  };
  if (crrUser.currenUser?.role==='ADMIN') return <Navigate to={'/admin'} />;
  return (
    <div className="">
      <Paper>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button
            className=""
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLoginClick}
          >
           {isLoggingIn && <CircularProgress style={{marginRight: 10}} size={20} color='inherit'/>} Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
