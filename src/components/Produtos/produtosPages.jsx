import { Button } from "../Button";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

export function GroupExample() {

  const navigate = useNavigate(); // Inicializar o hook

  const handleProducts = () => {
    navigate("/infoprodutos"); // Redirecionar para a rota /home
  };

  let receitas = [
    {
      thumbnail: "/src/assets/macarrao-com-molho-de-linguica-toscana.png",
      nome: "Macarronada com molho de linguiça toscana",
      descricao:
        "Macarronada com molho de linguiça toscana: macarrão al dente em molho fresco, com pedaços de linguiça suculenta e ervas aromáticas, finalizado com parmesão.",
      preco: "R$ 29,90",
    },
    {
      thumbnail: "/src/assets/Nhoque-recheado-com-presunto-queijo-e-Catupiry.png",
      nome: "Nhoque recheado com presunto, queijo e Catupiry",
      descricao:
        "Nhoque macio, recheado com presunto, queijo e Catupiry, coberto com molho cremoso que derrete na boca. Perfeito para um almoço especial.",
      preco: "R$ 34,90",
    },
    {
      thumbnail: "/src/assets/Lasanha-a-bolonhesa-com-bacon.png",
      nome: "Lasanha à bolonhesa com bacon e queijo",
      descricao:
        "Lasanha em camadas de molho bolonhesa, queijo e bacon crocante, criando uma combinação saborosa e suculenta para amantes de massa.",
      preco: "R$ 36,90",
    },
    {
      thumbnail: "/src/assets/Panqueca-de-frango-e-bacon.png",
      nome: "Panqueca de frango, bacon e molho cremoso",
      descricao:
        "Panqueca recheada com frango desfiado e bacon crocante, servida com molho cremoso. Uma combinação deliciosa e prática para qualquer refeição.",
      preco: "R$ 24,90",
    },
    {
      thumbnail: "/src/assets/macarrao-de-forno-com-frango-e-molho-branco.jpeg",
      nome: "Macarrão de forno com frango e molho branco",
      descricao:
        "Macarrão gratinado com frango suculento e molho branco, coberto com queijo dourado. Prato cremoso e reconfortante para compartilhar.",
      preco: "R$ 32,90",
    },
    {
      thumbnail: "/src/assets/rondele-de-espinafre-1.png",
      nome: "Rondele de Espinafre",
      descricao:
        "Massa recheada com espinafre e queijo, envolta em molho cremoso. Rondele leve e saboroso, perfeito para refeições nutritivas e elegantes.",
      preco: "R$ 28,90",
    },
  ];

  return (
    <Container>
      <div className="card-grid">
        {receitas.map((receita, index) => (
          <div className="card" key={index}>
            <img
              className="card-image"
              src={receita.thumbnail}
              alt={receita.nome}
            />
            <div className="card-content">
              <h2 className="card-title">{receita.nome}</h2>
              <p className="card-description">{receita.descricao}</p>
              <p className="card-price">{receita.preco}</p>
              <button className="card-button" onClick={handleProducts} >Comprar agora</button>

             
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default GroupExample;
 