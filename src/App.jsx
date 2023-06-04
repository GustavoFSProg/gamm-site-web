import { Link } from 'react-router-dom'
import Header from './components/Header/Header'
import { Container, Text, ContainerSpans, ContainerEmail, Button, Input, Span, ContainerText, ContainerTraducao, ContainerTitle } from './style-app'

function App() {

  return (
    <>
      <Container >
        <Header />
        <ContainerTitle >
          <ContainerTraducao >
            <ContainerText >
              <ContainerSpans >
                <Span>    Tradução Juramentada  </Span>

                <Text>

                  Tradutora Pública e Intérprete
                  Comercial para o Idioma Alemão,
                  Alemão / Português

                </Text>

              </ContainerSpans>

            </ContainerText >
            <ContainerEmail >

              <h1 >
                Solicite um orçamento
              </h1>
              <a style={{
                display: 'flex', textDecoration: 'none',
                color: '#e6e600', fontSize: '22px'
              }} href="mailto:gustavosohne38@gmail.com">gerusagamm@gmail.com</a>
            </ContainerEmail>

            <form style={{ display: 'flex', flexDirection: 'column' }}>
              {/* <Input type="text" placeholder="Nome" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Telefone" />
              <Button >
                Enviar
              </ Button > */}
              {/* <a href="http://mailto:gustavosohne38@gmail.com?subject=Orçamento">Enviar email</a> */}
              {/* <a href="http://mailto:gustavosohne38@gmail.com">EFERER </a> */}

              {/* <a href=”http://mailto:gustavosohne38@gmail.com?subject=My Subject Line” >ENTRE EM CONTATO</a> */}
            </form>

          </ContainerTraducao >

        </ContainerTitle>

      </Container >

    </>
  )
}

export default App
