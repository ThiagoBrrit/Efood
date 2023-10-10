import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: unknown
}

const Tag = ({ children, size = 'big' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
