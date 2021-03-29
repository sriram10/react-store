import { TYPE_ADD_ITEM, TYPE_REMOVE_ITEM, TYPE_RESET_CART, TYPE_PRODUCTS } from "./actionTypes";

const initialState = {
  products: [],
  cartItems: [],
  totalItems: 0
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case TYPE_PRODUCTS:
      return {
        ...state,
        products: action.data
      }
    case TYPE_ADD_ITEM:
      const p = state.cartItems.find(item => item.id === action.data.id)
      if(p) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if(item.id === action.data.id) {
              item.count = (item.count || 1)+1
            }
            return { ...item, count: 1 };
          })
        };
      }
      const items = state.cartItems.concat(action.data);
      return {
        ...state,
        cartItems: items,
        totalItems: items.length
      }
    case TYPE_RESET_CART:
      return {
        ...state,
        cartItems: [],
        totalItems: 0
      }
    case TYPE_REMOVE_ITEM:
      const filtered = state.cartItems.filter(item => item.id !== action.data);
      return {
        ...state,
        cartItems: filtered,
        totalItems: filtered.length
      }
    default:
      return state;
  }
}

export default rootReducer