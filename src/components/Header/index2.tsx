import {
  Carrinho,
  HeaderBar2,
  Restaurante,
  Image,
  HeaderBar3,
  BackHeader
} from './styles'

import vector from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import italiana from '../../assets/images/italiana.png'
import { Links } from '../Product/styles'
import { Pratos } from '../../pages/Home'

export type Props = {
  capaetitulo?: Pratos[]
}

const Header2 = ({ capaetitulo }: Props) => {
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
        <Carrinho href="#">0 - produto(s) no carrinho</Carrinho>
      </HeaderBar2>
      <BackHeader>
        {capaetitulo?.map((pratos) => (
          <HeaderBar3
            key={pratos.id}
            style={{
              backgroundImage: `url(${pratos.capa})`
            }}
          >
            <p>{pratos.tipo}</p>
            <h2>{pratos.titulo}</h2>
          </HeaderBar3>
        ))}
      </BackHeader>
    </>
  )
}

export default Header2
