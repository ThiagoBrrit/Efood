import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProdutoParaAdicionarAoCarrinho } from '../../components/ProductCardapio'

type CartState = {
  items: ProdutoParaAdicionarAoCarrinho[]
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
    add: (state, action: PayloadAction<ProdutoParaAdicionarAoCarrinho>) => {
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
