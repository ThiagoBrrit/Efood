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
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pratos } from '../../pages/Home'

type Props = {
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string
}

const ProdutoPizza = ({ preco, descricao, foto, nome, porcao }: Props) => {
  const [openModal, setOpenModal] = useState(false)

  const { id } = useParams()

  const [pratos, setPratos] = useState<Pratos>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  if (!pratos) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Card>
        <CardBackground
          style={{ backgroundImage: `url(${foto})` }}
        ></CardBackground>
        <Titulo>{nome}</Titulo>
        <Descricao>{descricao}</Descricao>
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
            <Tag>Adicionar ao carrinho - R$ {preco}</Tag>
          </ModalContent>
        </CardModal>
        <div className="overlay" onClick={() => setOpenModal(false)}></div>
      </Modal>
    </>
  )
}

export default ProdutoPizza
