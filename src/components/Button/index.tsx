import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string,
  loading: boolean,
}

export function Button ({name, loading, ...rest}: ButtonProps ) {
   return (
    <Container 
      type="button"
      disabled={loading}
      {...rest}
      >
      {loading ? 'Carregando...' : name }
  </Container>
   )
}
