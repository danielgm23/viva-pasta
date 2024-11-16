import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { GroupExample} from '../../components/Produtos/produtosPages'



export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Viva la pasta</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Massas" /></li>
        <li><ButtonText title="Bebidas" /></li>
        <li><ButtonText title="Sobremesas" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo pedido" />
      </Search>

      <Content>
        <Section title="Meus pedidos">
          <Note data={{
            title: 'Macarrao Rondelli ao molho branco',
            tags: [
              { id: '1', name: 'Bacon' },
              { id: '2', name: 'Frango' }
            ]
          }}
          />
          <GroupExample/>

        </Section>

      </Content>

          
    </Container>
  )
}

export default Home;