import { Link } from 'react-router-dom'
import italiana from '../../assets/images/italiana.png'
import Tag from '../Tag'

import { Card, Descricao, Titulo, CardBackground, Infos } from './styles'

const Product2 = () => (
  <>
    <Card>
      <CardBackground style={{ backgroundImage: `url(${italiana})` }}>
        <Infos>
          <Tag size="small">
            <Link to="/italiana">Italiana</Link>
          </Tag>
        </Infos>
      </CardBackground>
      <Titulo>La Dolce Vita Trattoria</Titulo>
      <Descricao>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já! <br></br>
        <Tag>Saiba mais</Tag>
      </Descricao>
    </Card>
  </>
)

export default Product2
