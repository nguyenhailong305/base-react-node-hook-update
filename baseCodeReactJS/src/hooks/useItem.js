import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from "../actions/ItemActions"

export const UseItem = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.listItem)
  
    const handleGetItem = () => dispatch(ItemAction.getRequest())
  
    return {
        items,
        handleGetItem, 
    } 
}