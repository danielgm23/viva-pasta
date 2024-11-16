import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

export function SignIn() {
  const navigate = useNavigate(); // Inicializar o hook

  const handleSignIn = () => {
    navigate("/home"); // Redirecionar para a rota /home
  };

  return (
    <Container>
      <Form>
        <h1>Viva La Pasta</h1>
        <p>Garanta aqui o seu alimento com sabor italiano.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        {/* Adicionar o evento de clique */}
        <Button title="Entrar" onClick={handleSignIn} />

        <a href="/signup">Criar conta</a>
      </Form>

      <Background />
    </Container>
  );
}

export default SignIn;
