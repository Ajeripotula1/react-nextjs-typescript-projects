import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_CART: {
      console.log("cleared cart");
      return { ...state, cart: new Map() };
    }
    case REMOVE: {
      console.log("removing", payload.id);
      // NEVER directly mutate state
      // create new instance and update instead
      // copy map
      const updatedMap = new Map(state.cart);
      // delete the map item
      updatedMap.delete(payload.id);
      // update state
      return { ...state, cart: updatedMap };
    }
    case INCREASE: {
      console.log("increasing amount");
      // create new obj to avoid mutating original
      const newCart = new Map(state.cart);
      // easier naming for payload id
      const itemId = payload.id;
      // grab the obj/item we want to update
      const itemToUpdate = newCart.get(itemId);
      // create new obj, don't mutate obj directly
      const updatedItem = { ...itemToUpdate, amount: itemToUpdate.amount + 1 };
      // update the cart state
      newCart.set(itemId, updatedItem);
      // console.log("res", state.cart, itemToUpdate);
      // return updated state
      return { ...state, cart: newCart };
    }

    case DECREASE: {
      // decrease the items amount
      console.log("decreasing amount");
      // create copy of state
      const newCopy = new Map(state.cart);
      // get the item data we want to change
      const itemToDecrease = newCopy.get(payload.id);
      // check the amount for 0 entry
      if (itemToDecrease.amount == 1) {
        // remove the item
        newCopy.delete(payload.id);
        return { ...state, cart: newCopy };
      }
      // decrement and return
      const itemToDecreaseUpdated = {
        ...itemToDecrease,
        amount: itemToDecrease.amount - 1,
      };
      // update the map
      newCopy.set(payload.id, itemToDecreaseUpdated);
      return { ...state, cart: newCopy };
    }
    case LOADING: {
      return { ...state, loading: true };
    }
    case DISPLAY_ITEMS: {
      const newCart = new Map(payload.cart.map((item) => [item.id, item]));
      return { ...state, loading: false, cart: newCart };
    }
  }

  throw new Error("No matching action type:", action.type);
};
export default reducer;
