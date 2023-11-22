import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoParaAdicionarAoCarrinho } from '../../components/ProductCardapio'

type CartState = {
  items: ProdutoParaAdicionarAoCarrinho[]
  isOpen: boolean
  isOpenAddress: boolean
  isOpenPayment: boolean
  isOpenSuccess: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenAddress: false,
  isOpenPayment: false,
  isOpenSuccess: false
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
    },
    openaddress: (state) => {
      state.isOpenAddress = true
    },
    closeaddress: (state) => {
      state.isOpenAddress = false
    },
    openpayment: (state) => {
      state.isOpenPayment = true
    },
    closepayment: (state) => {
      state.isOpenPayment = false
    },
    opensuccess: (state) => {
      state.isOpenSuccess = true
    },
    closesuccess: (state) => {
      state.isOpenSuccess = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openaddress,
  closeaddress,
  openpayment,
  closepayment,
  opensuccess,
  closesuccess,
  clear
} = cartSlice.actions
export default cartSlice.reducer
