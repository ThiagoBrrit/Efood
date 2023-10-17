import { Pratos } from '../../pages/Home'
import { HeaderBar3 } from '../Header/styles'
import Product from '../Product'
import ProdutoPizza from '../ProductCardapio'

import { Container, List, List2 } from './styles'

export interface Produtos {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  titulo?: string
  prato?: Pratos[]
  cardapios?: Pratos
}

export const ProductsList = ({ prato, titulo }: Props) => {
  return (
    <Container>
      <div className="Container">
        <h2>{titulo}</h2>
        <List>
          {prato?.map((pratos) => (
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

export const ProductsList2 = ({ cardapios }: Props) => {
  const { cardapio } = { ...cardapios }

  return (
    <Container>
      <div className="Container">
        <List2>
          {cardapio?.map((pratos) => (
            <ProdutoPizza
              key={pratos.id}
              nome={pratos.nome}
              foto={pratos.foto}
              preco={pratos.preco}
              descricao={pratos.descricao}
              porcao={pratos.porcao}
            />
          ))}
        </List2>
      </div>
    </Container>
  )
}
