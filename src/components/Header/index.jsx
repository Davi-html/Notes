import {Container, Profile, LogOut} from './styles'
import { CgLogOff, CgLogOut } from "react-icons/cg";

export function Header() {
    return (
      <Container> 
        <Profile to='/profile'>
          <img src="https://github.com/davi-html.png" alt='Foto do usuario'/>
          <div>
            <span>Bem-Vindo,</span>
            <strong>Davi Fernandes</strong>
          </div>
        </Profile>

        <LogOut>
        <CgLogOff />
        </LogOut>
      </Container>
    )
  }