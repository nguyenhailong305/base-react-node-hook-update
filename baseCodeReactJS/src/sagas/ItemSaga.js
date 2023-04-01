import { put, takeLatest  , select} from "@redux-saga/core/effects";
import { ItemAction } from "../actions/ItemActions";
import { itemApi } from "../api"
import { actionType, LIMIT } from "../containers";

function* handleGetItem() {
    try {
        const res = yield itemApi.getItem(null, null, null) //param , query , data
        yield put(ItemAction.getSuccess({
            listData: res.listData
        }))
    } catch (error) {
        yield put(ItemAction.getFailure({
            message: error.message
        }))
    }
}



const itemSaga = [
    takeLatest(actionType.Items.GET_ITEMS_REQUEST, handleGetItem),
   
]
export default itemSaga