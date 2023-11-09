import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pratos } from '../../pages/Home'

type CartState = {
  items: Pratos[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pratos>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
