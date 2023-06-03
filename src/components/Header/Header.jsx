import styled from 'styled-components'
import logo from '../../assets/foto1.jpg'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 64px;
  background: #b3daff;
  margin-top: 150px;
  opacity: 79%;
  justify-content: center;
  align-items: center;




 `

const ContainerHeader = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;


@media screen and (max-width: 800px){
  flex-direction: column;


}

 `

const List = styled.div`
display: flex;
width: 58%;
color: #00284d;
justify-content: space-between;
font-weight: bold;
font-size: 20px;

@media screen and (max-width: 800px){
  flex-direction: column;

  span {

    width: 100rem;
  }


}

`

function Header() {

  return (
    <Container >
      <ContainerHeader >

        <img style={{ borderRadius: '35px' }} src={logo} width="150px" height='130px' alt="logo" />
        <List >

          <span >
            Inicial
          </span>

          <span >
            Quem somos
          </span>



          <span >
            O que fazemos
          </span>

          <span >
            Contato
          </span>
        </List>
      </ContainerHeader >


    </Container>
  )
}

export default Header
