import { Link } from 'react-router-dom'
import Header from './components/Header/Header'
import { Container, Text, Texto, Nome, ContainerNome, A, H1, ContainerArrow, ContainerSpans, ContainerEmail, Button, Input, Span, ContainerText, ContainerTraducao, ContainerTitle } from './style-app'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


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

              <H1 >
                Solicite um orçamento
              </H1>
              <ContainerArrow >
                <ArrowForwardIcon style={{ marginRight: '7px', fontSize: '36px', color: 'red' }} />
                <A href="mailto:gustavosohne38@gmail.com">gerusagamm@gmail.com</A>
              </ContainerArrow >

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
        <ContainerNome >
          <Nome >
            <strong >
              Gerusa Gamm
            </strong>
          </Nome>

          <Texto >
            Nomeada pela Junta Comercial  do Rio Grande
            do Sul em 2010/148
          </Texto>
          asdfasdfasdf
        </ContainerNome>

      </Container >

    </>
  )
}

export default App
