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


            <h1 >
              TEsting
            </h1>
          </ContainerTraducao >

        </ContainerTitle>

      </Container>

    </>
  )
}

export default App
