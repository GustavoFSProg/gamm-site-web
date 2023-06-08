import { Container, ImgLogo, LinksContainer, LinksContainerMobile, Button, Input, FormDois, Form } from './style'
import logo from './logo.png'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleLogout() {
    localStorage.clear()

    return alert("Logout Efetuado com Sucesso!!")
  }


  function handleLike() {
    setIsButtonClicked('flex')
  }

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  return (
    <Container>
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ImgLogo src={logo} alt="logo" />
        <Form>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Input type="search" name="search" placeholder="Search..." />

            <BsSearch size="26" color="gray" style={{ marginLeft: '8px' }} />
          </div>
        </Form>
      </div>
      <div
        style={{
          display: 'flex',
          width: '25%',
        }}
      ></div>

      <Button
        onMouseLeave={() => handleDismissButtonClicked()}
        type="button"
        onClick={() => handleLike()}
        style={{ marginRight: '24px' }}
      >
        <MenuIcon size="35" />
      </Button>

      <LinksContainer>
        <div style={{ marginLeft: '40px' }}>
          <Link style={{
            textDecoration: 'none', fontFamily: 'Roboto 500 , sans- serif',
            color: '#002233', fontSize: "19px",
          }} to="/">
            HOME
          </Link>
        </div>

        <div style={{ marginLeft: '40px' }}>
          <Link style={{
            textDecoration: 'none', fontFamily: 'Roboto 700 , sans- serif',
            color: '#002233', fontSize: "18px"
          }} to="/">
            QUEM SOMOS
          </Link>
        </div>

        <div style={{ marginLeft: '40px' }}>
          <Link style={{
            textDecoration: 'none', fontFamily: 'Roboto 700 , sans- serif',
            color: '#002233', fontSize: "18px"
          }} to="/">
            O QUE FAZEMOS
          </Link>
        </div>

        <div style={{ marginLeft: '40px' }}>
          <Link style={{
            textDecoration: 'none', fontFamily: 'Roboto 700 , sans- serif',
            color: '#002233', fontSize: "18px",
          }} to="/">
            CONTATO
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          {/* <NavLink
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            onClick={handleLogout}
          >
            LOGOUT
          </NavLink> */}
        </div>
      </LinksContainer>
      {/* <div style={{ display: 'flex', flexDirection: 'center' }}> */}

      <FormDois
        style={{
          display: `${isButtonClicked}`,
          marginTop: '230px',
          marginLeft: '-240px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '17rem',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: '8px'
          }}
        >
          <Input
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            // style={{ width: '14rem' }}
            type="search"
            name="search"
            placeholder="Search..."
          />

          <BsSearch
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            size="26"
            color="white"
            style={{ marginLeft: '8px', marginTop: '11px' }}
          />


        </div>
        <LinksContainerMobile>
          <div style={{ marginLeft: '20px', marginTop: '8px' }}>
            {/* <NavLink style={{
              textDecoration: 'none', fontSize: '21px', fontFamily: 'Roboto', color: 'white',
              cursor: 'pointer'
            }} to="/"> */}
            HOME
            {/* </NavLink> */}
          </div>

          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px', }}>

          </div>
          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px', }}>
            {/* <NavLink

              style={{ cursor: 'pointer', fontSize: '21px', textDecoration: 'none', fontFamily: 'Roboto', color: 'white  ' }}
              onClick={handleLogout}

            > */}
            LOGOUT
            {/* </NavLink> */}
          </div>

          <div style={{ marginLeft: '25px', marginBottom: '4px', marginTop: '15px', }}>
            {/* <NavLink

              style={{ cursor: 'pointer', fontSize: '21px', textDecoration: 'none', fontFamily: 'Roboto', color: 'white  ' }}
              to="/register"
            > */}
            CADASTRO
            {/* </NavLink> */}
          </div>
        </LinksContainerMobile>

      </FormDois>



      {/* </div> */}



    </Container >
  )
}

export default Header
