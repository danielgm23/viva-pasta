import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { useNavigate } from 'react-router-dom'  // Importar useNavigate

export function Header() {
  const navigate = useNavigate();  // Inicializar o hook navigate

  const handleLogout = () => {
    navigate('/');  // Redireciona para a página de login
  };

  return (
    <Container>
      <Profile>
        <img
          src="src/assets/logo.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>

      <Logout onClick={handleLogout}>  {/* Adiciona o manipulador de clique */}
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
