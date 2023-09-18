import pizza from '../../assets/images/pizza.png'
import Tag from '../Tag'
import { Card2, Descricao2, Titulo2, CardBackground2, Infos } from './styles'

const Product3 = () => (
  <Card2>
    <CardBackground2
      style={{ backgroundImage: `url(${pizza})` }}
    ></CardBackground2>
    <Titulo2>Pizza Marguerita</Titulo2>
    <Descricao2>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao2>
    <Tag>Adicionar ao carrinho</Tag>
  </Card2>
)

export default Product3
