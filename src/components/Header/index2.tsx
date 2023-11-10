import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

import { Links } from '../Product/styles'
import { Pratos } from '../../pages/Home'

import {
  Carrinho,
  HeaderBar2,
  Restaurante,
  Image,
  HeaderBar3,
  BackHeader
} from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  capaetitulo?: Pratos[]
}

const Header2 = ({ capaetitulo }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderBar2
        style={{
          backgroundImage: `url(${vector})`
        }}
      >
        <Restaurante>
          <Links to="/">Restaurantes</Links>
        </Restaurante>
        <Image src={logo} alt="Efood" />
        <Carrinho onClick={openCart}>
          {items?.length} - produto(s) no carrinho
        </Carrinho>
      </HeaderBar2>
      <BackHeader>
        {capaetitulo && capaetitulo.length > 0 ? (
          capaetitulo.map((pratos) => (
            <HeaderBar3
              key={pratos.id}
              style={{
                backgroundImage: `url(${pratos.capa})`
              }}
            >
              <p>{pratos.tipo}</p>
              <h2>{pratos.titulo}</h2>
            </HeaderBar3>
          ))
        ) : (
          <p>Nenhum item de cabeçalho disponível.</p>
        )}
      </BackHeader>
    </>
  )
}

export default Header2
