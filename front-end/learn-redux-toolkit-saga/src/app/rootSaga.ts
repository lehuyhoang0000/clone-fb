import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/couterSage';
import {all} from'redux-saga/effects';


export default function* rootSaga() {
    yield all([counterSaga(), authSaga()])
}