import { Container } from './styles'

export function Tag({tittle, ...rest}){
    return (
        <Container {...rest}>
            {tittle}
        </Container>
    )
}