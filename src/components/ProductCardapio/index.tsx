import { useState } from 'react'

import Tag from '../Tag'
import close from '../../assets/images/close.png'

import {
  BotaoCard,
  Card,
  CardBackground,
  CardModal,
  Close,
  Descricao,
  Modal,
  ModalContent,
  Titulo
} from './styles'

type Props = {
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string
}

const ProdutoPizza = ({ preco, descricao, foto, nome, porcao }: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const precoFormatado = preco.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return (
    <>
      <Card>
        <div>
          <CardBackground
            style={{ backgroundImage: `url(${foto})` }}
          ></CardBackground>
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao}</Descricao>
        </div>

        <BotaoCard onClick={() => setOpenModal(true)}>Mais detalhes</BotaoCard>
      </Card>

      <Modal className={openModal ? 'visivel' : ''}>
        <CardModal className="Container">
          <ModalContent>
            <img height={280} width={280} src={foto} alt="" />
          </ModalContent>
          <ModalContent>
            <Close>
              <img onClick={() => setOpenModal(false)} src={close} alt="" />
            </Close>
            <h4>{nome}</h4>
            <p>
              {descricao}
              <br /> <br /> {porcao}
            </p>
            <Tag>Adicionar ao carrinho - R$ {precoFormatado}</Tag>
          </ModalContent>
        </CardModal>
        <div className="overlay" onClick={() => setOpenModal(false)}></div>
      </Modal>
    </>
  )
}

export default ProdutoPizza
