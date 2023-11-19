import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import {  FiMail, FiLock   } from "react-icons/fi";

import { Container, Form, Background } from './styles'

export function Signin(){
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>
 
                <Input
                    placeholder='E-mail'
                    type='text'
                    Icon={FiMail}
                />

                <Input
                    placeholder='Senha'
                    type='password'
                    Icon={FiLock}
                />

                <Button name='Entrar'/>

                <ButtonText tittle='Criar conta' className='buttonText'/>
            </Form>

            <Background />
        </Container>
    )   
}