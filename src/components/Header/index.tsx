import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
    <img src={logo} alt="Efood" />
    <h1>
      Viva experiências gastronômicas <br></br> no conforto da sua casa
    </h1>
  </HeaderBar>
)

export default Header
