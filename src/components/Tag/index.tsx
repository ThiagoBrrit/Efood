import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: any
}

const Tag = ({ children, size = 'big' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
