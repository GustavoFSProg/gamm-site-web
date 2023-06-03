import Header from './components/Header/Header'
import { Container, ContainerText, ContainerTraducao, ContainerTitle } from './style-app'

function App() {

  return (
    <>
      <Container >
        <Header />
        <ContainerTitle >
          <ContainerTraducao >
            <ContainerText >

              <span style={{ fontSize: '29px', fontWeight: 'bold' }}>  Tradução Juramentada  </span>
              Tradutora Pública e Intérprete
              Comercial para o Idioma Alemão
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
