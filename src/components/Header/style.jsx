import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
  width: 100vw;
  height: 64px;
  background: #b3daff;
  /* margin-top: 150px; */
  opacity: 89%;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
  /* color: darkblue; */
  padding-bottom: 4px;

  @media screen and (max-width: 800px) {
    padding-bottom: 9px;



  }
`
export const Form = styled.form`
  display: flex;
  margin-left: 13px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const FormDois = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column ;
  justify-content: space-between;
  z-index: 8;
  background: #b3daff;
  height: 190px;

  /* background: linear-gradient(to right top, #8c8c8c 55%, #4d4d4d 45%); */
  /* background:  black; */
  /* backdrop-filter: blur(20px) saturate(120%) contrast(200%); */
  /* backdrop-filter: blur(90px) saturate(90%); */
  width: 80%;
  /* margin-left: 200px; */
  padding-left: 10px;
  padding-right: 3px;
  padding-bottom: 9px;
  opacity: 100%;
  border-radius: 11px;



  @media screen and (max-width: 800px) {
      width: 200%;
      margin-top: 290px;
  z-index: 8;
  opacity: 100%;


  }

`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 310px;


  @media screen and (max-width: 800px) {
    display: none;
    /* width: 20px; */
  }
`

export const LinksContainerMobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 43px;
    font-size:  0.9rem;
    width: 100%;
    margin-top: 35px;
  }
`
export const Input = styled.input`
  display: flex;
  width: 20rem;
  height: 2.4rem;
  border: solid 1px #cccccc;
  border-radius: 5px;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 2.1rem;
    margin-left: 0px;
    z-index: 9999;
    margin-top: 10px;
    /* filter: blur(5px); */
  }
`

export const Button = styled.button`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 38px;
    margin-left: 43px;
    cursor: pointer;
    background: none;
    border: none;
    /*   transition: ease 0.7s; */

    &:hover {
      /* background: darkgray; */
    }
  }
`
export const ImgLogo = styled.img`
  width: 42px;
  height: 40px;
  margin-left: 65px;


  @media screen and (max-width: 800px) {
    width: 35px;
    height: 32px;
    margin-left: 24px;
  }
`

export const ImgLupa = styled.img`
  width: 32px;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    z-index: 9999;
  }
`



export const SiteContainer = styled.div`
   display: flex;
  width: 140%;
  justify-content: center;

  @media screen and (max-width: 800px) {
  width: 40%;
  }
`