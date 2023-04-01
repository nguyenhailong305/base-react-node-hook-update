import {Helpers} from '../utils';
import Api from './scheme'

export const itemApi = {
    getItem : Helpers.createApi(Api.ITEM.GET_ITEM),
}