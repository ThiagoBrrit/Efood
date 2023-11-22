import { Pratos } from '../../pages/Home'
import { Container, Container2, List, List2 } from './styles'

import Product from '../Product'
import ProdutoPizza from '../ProductCardapio'
import Loader from '../Loader'

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
  isLoading: boolean
}

export const ProductsList = ({ prato, titulo, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="Container">
        <h2>{titulo}</h2>
        <List>
          {prato &&
            prato.map((pratos) => (
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
    <Container2>
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
    </Container2>
  )
}
