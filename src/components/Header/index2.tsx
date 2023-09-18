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

const Header2 = () => (
  <>
    <HeaderBar2
      style={{
        backgroundImage: `url(${vector})`
      }}
    >
      <Restaurante>Restaurantes</Restaurante>
      <Image src={logo} alt="Efood" />
      <Carrinho href="#">0 - produto(s) no carrinho</Carrinho>
    </HeaderBar2>
    <BackHeader>
      <HeaderBar3
        style={{
          backgroundImage: `url(${italiana})`
        }}
      >
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </HeaderBar3>
    </BackHeader>
  </>
)

export default Header2
