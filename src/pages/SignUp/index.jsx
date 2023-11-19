import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Link } from 'react-router-dom'

import {  FiMail, FiLock, FiUser } from "react-icons/fi";

import { Container, Form, Background } from './styles'

export function SignUp(){
    return(
        <Container>
            <Background />
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>
 
                <Input
                    placeholder='Nome'
                    type='text'
                    Icon={FiUser}
                />
 
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


                <Button name='Cadastrar'/>

                <Link to='/'>
                    <ButtonText tittle='Voltar para login' className='buttonText'/>
                </Link>
            </Form>
        </Container>
    )   
}