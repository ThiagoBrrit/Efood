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
      const product = state.items.find(
        (item) => item.nome === action.payload.nome
      )

      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('o item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.nome !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
