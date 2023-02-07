import { PayloadAction } from "@reduxjs/toolkit"
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import { increment, incrementSaga, incrementSagaSucsses } from "./counterSlice"

// export function* Log(action: PayloadAction) {
//     console.log('Log', action)
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Waiting 2s')
    //wait 2s
    yield delay(2000)

    console.log('waiting done dispatch action')

    // Dispatch action success
    yield put(incrementSagaSucsses(action.payload))
}

export default function* counterSaga() {
    console.log('Couter Saga')
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga )
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga )
}