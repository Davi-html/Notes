import { Container } from './styles'

export function Section ({tittle, children}){
    
    return (
       <Container>
            <h2>{tittle}</h2>
            {children}
        </Container>
    )
}