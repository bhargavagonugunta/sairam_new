import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../../../../utils/types/Types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as CartItem[],
    totalAmount: 0,
    totalQuantity: 0,
    deliveryCharge: 40,
    total: 0,
  } as CartState,
  reducers: {
    addItem: (state: CartState, action: PayloadAction<CartItem>) => {
      const { itemOfferAmount, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.itemTitle === action.payload.itemTitle);
      
      if (existingItemIndex === -1) {
        const amount = itemOfferAmount * quantity;
        state.items.push({ ...action.payload, quantity: 1, amount });
        state.totalQuantity++;
        state.totalAmount += amount;
      } else {
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity++;
        existingItem.amount = existingItem.itemOfferAmount * existingItem.quantity;
        state.totalQuantity++;
        state.totalAmount += existingItem.itemOfferAmount;
      }
      
      state.total = state.totalAmount + state.deliveryCharge;
    },
    deleteItem: (state: CartState, action: PayloadAction<CartItem>) => {
      const deletedItem = state.items.find((item) => item.itemTitle === action.payload.itemTitle);
      if (deletedItem) {
        state.totalQuantity -= deletedItem.quantity;
        state.totalAmount -= deletedItem.amount || 0;
      }
      state.items = state.items.filter((item) => item.itemTitle !== action.payload.itemTitle);
      state.total = state.totalAmount + state.deliveryCharge;
    },
    emptyingCart: (state: CartState) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.total = 0;
    },
    updateCartItemQuantity: (state: CartState, action: PayloadAction<CartItem>) => {
      const updatedItem = state.items.find((item) => item.itemTitle === action.payload.itemTitle);
      if (updatedItem) {
        updatedItem.quantity++;
        updatedItem.amount = updatedItem.itemOfferAmount * updatedItem.quantity;
        state.totalQuantity++;
        state.totalAmount += updatedItem.itemOfferAmount;
      }
      state.total = state.totalAmount + state.deliveryCharge;
    },
    decrementingCartItemQuantity: (state: CartState, action: PayloadAction<CartItem>) => {
      const decrementedItem = state.items.find((item) => item.itemTitle === action.payload.itemTitle);
      if (decrementedItem && decrementedItem.quantity > 1) {
        decrementedItem.quantity--;
        decrementedItem.amount = decrementedItem.itemOfferAmount * decrementedItem.quantity;
        state.totalQuantity--;
        state.totalAmount -= decrementedItem.itemOfferAmount;
      }
      state.total = state.totalAmount + state.deliveryCharge;
    },
  },
});

export const { addItem, deleteItem, emptyingCart, updateCartItemQuantity, decrementingCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;


