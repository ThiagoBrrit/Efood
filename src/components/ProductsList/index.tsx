import { Pratos } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

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
