import Header from './components/Header/Header'
import { Container, Button, Input, Span, ContainerText, ContainerTraducao, ContainerTitle } from './style-app'

function App() {

  return (
    <>
      <Container >
        <Header />
        <ContainerTitle >
          <ContainerTraducao >
            <ContainerText >

              <Span>
                Tradução Juramentada  </Span>
              Tradutora Pública e Intérprete
              Comercial para o Idioma Alemão,
              Alemão / Português

            </ContainerText >

            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <Input type="text" placeholder="Nome" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Telefone" />
              <Button >
                Enviar
              </ Button >

            </form>

          </ContainerTraducao >

        </ContainerTitle>

      </Container>

    </>
  )
}

export default App
