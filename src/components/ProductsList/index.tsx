import Product from '../Product'
import Product2 from '../Product/index2'

import { Container, List } from './styles'

export const ProductsList = () => (
  <Container>
    <div className="Container">
      <List>
        <Product />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
        <Product2 />
      </List>
    </div>
  </Container>
)
