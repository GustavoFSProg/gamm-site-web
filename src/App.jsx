import Header from './components/Header/Header'
import { Container, Span, ContainerText, ContainerTraducao, ContainerTitle } from './style-app'

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
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Telefone" />

            </form>

          </ContainerTraducao >

        </ContainerTitle>

      </Container>

    </>
  )
}

export default App
