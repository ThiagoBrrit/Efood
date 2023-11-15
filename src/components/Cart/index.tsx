import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
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

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (nome: string) => {
    dispatch(remove(nome))
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
                  <button onClick={() => removeItem(item.nome)} type="button">
                    <img src={lixeira} />
                  </button>
                </div>
              </CartItem>
            </div>
          ))}
        </ul>
        <Space>
          <Prices>Valor total</Prices>
          <Prices>
            {getTotalPrice().toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </Prices>
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
