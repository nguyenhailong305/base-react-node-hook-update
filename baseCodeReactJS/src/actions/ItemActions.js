import { createAction } from '@reduxjs/toolkit'
import {actionType} from '../containers' 

export const ItemAction = {
    getRequest : createAction(actionType.Items.GET_ITEMS_REQUEST),
    getSuccess : createAction(actionType.Items.GET_ITEMS_SUCCESS),
    getFailure : createAction(actionType.Items.GET_ITEMS_FAILURE),

  

}
