import { Container } from "./styles"

export function Input({Icon, ...rest}){
    return(
        <Container>
            { Icon && <Icon size={20} />}
            <input {...rest}/>
        </Container>
    )
} 