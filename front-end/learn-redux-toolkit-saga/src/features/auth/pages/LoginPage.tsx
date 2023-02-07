import { Paper } from '@mui/material';
// import { makeStyles } from '@ma';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';

// const useStyles: never = makeStyles((theme) => ({
//   root: {},
// }));

export default function LoginPage() {
  // const classes = useStyles();
  const dispatch = useAppDispatch();


  const handleLoginClick = () => {
    console.log('handleLoginClick')
    dispatch(authActions.login({
      username: '',
      password: '',
    }))
  };

  return (
    <div className="">
      <Paper>
        <Typography variant='h5' component="h1">Student Management</Typography>
        <Box mt={4}>
          <Button className='' fullWidth variant='contained' color='primary' onClick={handleLoginClick} >
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
