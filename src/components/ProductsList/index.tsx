import { Pratos } from '../../pages/Home'
import Product from '../Product'
import ProdutoPizza from '../Product_teste'

import { Container, List, List2 } from './styles'

export type Props = {
  titulo: string
  prato: Pratos[]
}

export const ProductsList = ({ prato, titulo }: Props) => {
  return (
    <Container>
      <div className="Container">
        <h2>{titulo}</h2>
        <List>
          {prato.map((pratos) => (
            <Product
              key={pratos.id}
              titulo={pratos.titulo}
              destaque={pratos.destacado}
              tipo={pratos.tipo}
              avaliacao={pratos.avaliacao}
              descricao={pratos.descricao}
              capa={pratos.capa}
              id={pratos.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export const ProductsList2 = ({ prato, titulo }: Props) => {
  return (
    <Container>
      <div className="Container">
        <h2>{titulo}</h2>
        <List2>
          {prato.map((pratos) => (
            <ProdutoPizza
              key={pratos.cardapio.id}
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
