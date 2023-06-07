import { Link } from 'react-router-dom'
import Header from './components/Header/Header'
import { Container, MapaImage, TextoDois, InstaContainer, GmailContainer, ContainerGeral, TextAlemao, WhatsContainer, ImagemPessoa, Contatos, ContainerMapa, Text, Texto, Nome, ContainerNome, A, H1, ContainerArrow, ContainerSpans, ContainerEmail, Button, Input, Span, ContainerText, ContainerTraducao, ContainerTitle } from './style-app'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import pessoa from './assets/pessoa.png'
import whatsapp from './assets/whatsapp.png'
import foto1 from './assets/mapa.png'


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

                  <TextAlemao >

                    Alemão / Português
                  </TextAlemao>
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
          <Texto >
            <Nome >
              <strong >
                Gerusa Gamm
              </strong>
            </Nome>
            <TextoDois >

              Nomeada pela Junta Comercial  do Rio Grande
              do Sul em 2010/148
            </TextoDois >
          </Texto>
          <ImagemPessoa src={pessoa} alt="pessoa" />
        </ContainerNome>
        <ContainerMapa >
          <ContainerGeral >
            <Contatos >
              <Span>
                Contato

              </Span>

              <WhatsContainer >
                <img width="26" style={{ display: 'flex', marginRight: '6px' }} src={whatsapp} alt="whastpapp" />
                <span >
                  30652220
                </span>
              </WhatsContainer >

              <GmailContainer >
                <img width="26" style={{ display: 'flex', marginRight: '6px' }} src={whatsapp} alt="whastpapp" />
                <span >
                  gerusagamm@gmail.com
                </span>
              </GmailContainer >
              <InstaContainer >
                <img width="26" style={{ display: 'flex', marginRight: '6px' }} src={whatsapp} alt="whastpapp" />
                <span >
                  @instagram
                </span>
              </InstaContainer >

            </Contatos>

            <div style={{ display: 'flex', color: 'black', width: '100%' }}>

              <MapaImage style={{ borderRadius: '18px' }} src={foto1} alt="whastpapp" />

            </div>
          </ContainerGeral>


        </ContainerMapa>


      </Container >

    </>
  )
}

export default App
