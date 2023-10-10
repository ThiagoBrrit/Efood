import { Pratos } from '../../pages/Home'
import ProdutoPizza from '../Product_teste'

import { Container, List2 } from './styles'

export type Props = {
  prato: Pratos[]
}

export const ProductsList2 = ({ prato }: Props) => {
  return (
    <Container>
      <div className="container">
        <List2>
          {prato.map((pratos) => (
            <ProdutoPizza
              key={pratos.id}
              nome={pratos.cardapio.nome}
              foto={pratos.cardapio.foto}
              preco={pratos.cardapio.preco}
              descricao={pratos.cardapio.descricao}
              porcao={pratos.cardapio.porcao}
            />
          ))}
        </List2>
      </div>
    </Container>
  )
}
