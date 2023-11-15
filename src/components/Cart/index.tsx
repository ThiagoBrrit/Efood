import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import Button from '../Button'
import lixeira from '../../assets/images/lixeira-de-reciclagem.png'

import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar,
  Space
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <div key={item.id}>
              <CartItem>
                <img src={item.foto} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>
                    {item.preco.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </span>
                  <button type="button">
                    <img src={lixeira} />
                  </button>
                </div>
              </CartItem>
            </div>
          ))}
        </ul>
        <Space>
          <Prices>Valor total</Prices>
          <Prices>R$ 200,00</Prices>
        </Space>
        <Button
          type={'button'}
          title={'Clique aqui para continuar com a compra'}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
