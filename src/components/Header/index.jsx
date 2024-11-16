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
          src="https://www.canva.com/desighttps://drive.google.com/file/d/1Z_qGBIo1QH9FUByXfLxJfTAOZqmSLJ0x/view?usp=drive_linkn/DAGV_GUpPjU/380SgZj14IJEGlVLyW_https://www.canva.com/design/DAGV_GUpPjU/yltEFY32eeWzeLL9_SfrhQ/view?utm_content=DAGV_GUpPjU&utm_campaign=designshare&utm_medium=link&utm_source=editordUQ/edit?utm_content=DAGV_GUpPjU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
