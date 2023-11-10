import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pratos } from '../../pages/Home'
import { Produtos } from '../../components/ProductsList'

type CartState = {
  items: Pratos[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pratos>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
