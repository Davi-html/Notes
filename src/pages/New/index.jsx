import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

export function New(){
    return(
        <Container>
            <Header/>        

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder='Titulo'/>
                    <Textarea 
                        placeholder='Observações'
                    />

                    <Section tittle="Links Úteis">
                        <NoteItem value="React"/>
                        <NoteItem  placeholder='Novo link' isNew/>
                    </Section>
                </Form>    
            </main>    
        </Container>
    )
}