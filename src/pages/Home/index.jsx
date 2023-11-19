import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText tittle="Todos"/></li>
        <li><ButtonText tittle="Frontend"/></li>
        <li><ButtonText tittle="Nodejs" /></li>
        <li><ButtonText tittle="React" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section tittle="Minhas notas">
            <Note data={{
                title: 'React Modal',
                tags: [
                { id: '1-react-modal', name: 'React' },
                ]
            }}
            />

            <Note data={{
                title: 'Exemplo de Middleware',
                tags: [
                { id: '1-express', name: 'express' },
                { id: '1-node', name: 'nodejs' },
                ]
            }}
            />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}