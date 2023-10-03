import ProdutoPizza from '../Product_teste'

import { Container, List2 } from './styles'

export const ProductsList2 = () => (
  <Container>
    <div className="container">
      <List2>
        <ProdutoPizza />
        <ProdutoPizza />
        <ProdutoPizza />
        <ProdutoPizza />
        <ProdutoPizza />
        <ProdutoPizza />
      </List2>
    </div>
  </Container>
)
