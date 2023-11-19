import { FiArrowLeft } from "react-icons/fi";

import {  FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                <FiArrowLeft />
                </a>
            </header>

            <Form>

                <Avatar>
                    <img
                        src="https://github.com/davi-html.png"
                        alt="Foto do usuario" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

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
                    placeholder='Senha atual'
                    type='password'
                    Icon={FiLock}
                    className="password"
                />
                
                <Input
                    placeholder='Nova senha'
                    type='password'
                    Icon={FiLock}
                />

                <Button name='Entrar'/>
            </Form>
        </Container>
    )
}