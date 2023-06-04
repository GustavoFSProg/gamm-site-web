import { Link } from 'react-router-dom'
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
            <h1 >
              Solicite um orçamento
            </h1>

            <form style={{ display: 'flex', flexDirection: 'column' }}>
              {/* <Input type="text" placeholder="Nome" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Telefone" />
              <Button >
                Enviar
              </ Button > */}
              {/* <a href="http://mailto:gustavosohne38@gmail.com?subject=Orçamento">Enviar email</a> */}
              {/* <a href="http://mailto:gustavosohne38@gmail.com">EFERER </a> */}

              <a style={{ display: 'flex', textDecoration: 'none', color: 'yellow', fontSize: '20px' }} href="http://mailto:gustavosohne38@gmail.com">Enviar email</a>

              {/* <a href=”http://mailto:gustavosohne38@gmail.com?subject=My Subject Line” >ENTRE EM CONTATO</a> */}
            </form>

          </ContainerTraducao >

        </ContainerTitle>

      </Container >

    </>
  )
}

export default App
