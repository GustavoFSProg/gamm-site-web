import styled from 'styled-components'
import foto1 from './assets/alemanha-free.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background: url(${foto1}) no-repeat;
  opacity: 80%;
  background-size: cover;

  @media screen and (max-width: 800px) {
    height: auto;
  

  }
`

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100vw; */
  /* height: 100vh; */

  @media screen and (max-width: 900px) {
    margin-top: -60px;
    justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  }
`

export const ContainerTraducao = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  /* height: 26rem; */
  /* opacity: 52%; */
  /* background: #204060; */
  /* margin-top: 130px; */
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 94%;
  }
`

export const ContainerArrow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 26rem;
  opacity: 84%;
  background: #132639;
  margin-top: 130px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    opacity: 78%;
    height: auto;
  margin-top: 80px;
  padding-top: 70px;




  }
`
export const Span = styled.span`
  display: flex;
  margin-left: 15px;

  font-size: 29px;
  font-weight: bold;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    font-size: 24px;
    width: 100%;
    display: flex;
    font-size: 24px;
    /* justify-content: center; */
  align-items: center;
  
  }
`
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: center;
  align-items: center;
  margin-left: 20px;
  /* margin-left: 30px; */
  /* padding-left: 20px; */
  /* padding-right: 20px; */

    margin-top: 10px;
  }
`

export const Input = styled.input`
  display: flex;
  font-size: 16px;
  width: 16rem;
  height: 33.5px;
  margin-bottom: 15px;
  border-radius: 15px;
  padding-left: 14px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    /* width: 110%; */
    display: flex;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 17rem;
  height: 37px;
  border-radius: 15px;
  background: blue;
  color: white;
  cursor: pointer;
  background: #005580;
  transition: 0.6s;

  &:hover {
    background: yellowgreen;
    color: #005580;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
    /* width: 110%; */
    display: flex;
  }
`

export const ContainerSpans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 98.7%;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    /* margin-left: 21px; */
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 20rem;
  /* height: auto; */
  justify-content: center;
  color: white;
  opacity: 180%;
  font-size: 24px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  align-items: center;
  margin-top: -120px
  }
`
export const H1 = styled.h1`@media screen and (max-width: 800px) {font-size: 24px;}`

export const A = styled.a`
  display: flex;
  text-decoration: none;
  color: #e6e600;
  font-size: 22px;
  border-bottom: 1px solid yellow;


  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`


export const ContainerNome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  width: 85%;
  height:  200px;
  background: #ffffcc;
  opacity: 89%;
  margin-top: 100px;
  margin-bottom: 100px;
  border-radius: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
 
  @media screen and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 126px;
  flex-direction: column;
  height:  auto;


  } 
`

export const Texto = styled.span`
  display: flex;
  flex-direction: column;
  color: black;
  width: 70%;
  align-items: center;
  justify-content: center;
  font-family: 'Assistant';
  font-size: 24px;
  color: #004466;


  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 100%;
    margin-bottom: 25px;
    display: flex;

  }
`

export const ImagemPessoa = styled.img`
  display: flex;
  width: 200px;


  @media screen and (max-width: 800px) {
     margin-bottom: 30px;

  }
`

export const Nome = styled.span`
  display: flex;
  font-size: 30px;
  color: #004466;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: 'Josefin Sans 200';
  /* font-weight: bold; */

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;

    margin-top: 10px;
    margin-bottom: 4px;
  }
`


export const ContainerMapa = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  width: 87%;
  height:  450px;
  background: #ffffcc;
  opacity: 88%;
  /* margin-top: 100px; */
  margin-bottom: 100px;
  border-radius: 105px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
 
  @media screen and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    width: auto;

    margin-bottom: 126px;
    flex-direction: column;
    padding-bottom: 50px;
    padding-top: 50px;
  border-radius: 50px;




  } 
`

export const Contatos = styled.div`
  display: flex;
  color: black;
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  font-family: 'Assistant 300';
  font-size: 22px;
  color: #004466;
  flex-direction: column;
  /* margin-left:600px; */
  font-weight: bold;
  margin-left: 140px;



  @media screen and (max-width: 800px) {
    font-size: 20px;
    display: flex;
   align-items: center;
  margin-left: 0px;
  justify-content: center;
  width: 30%;
  margin-bottom: 30px;





  }
`






export const WhatsContainer = styled.div`
  display: flex;
  width: 14%;
  align-items: center;
  justify-content: space-around;
  font-family: 'Assistant 300';
  font-size: 22px;
  color: #004466;
  /* flex-direction: column; */
  /* margin-left:600px; */
  font-weight: bold;
  margin-bottom: 1px;




  @media screen and (max-width: 800px) {
    /* font-size: 20px;
    display: flex;
   align-items: center;
  margin-left:0px; */
  width: 100%;





  }
`




export const TextAlemao = styled.span`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  justify-content: center;
  font-family: 'Arial';
  font-size: 27px;
  color: white;
  font-weight: bold;
  margin-top: 24px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 100%;
    /* margin-bottom: 25px; */
    display: flex;

  }
`

export const ContainerGeral = styled.span`
   display: flex;
  justify-content: space-around;
  color: black;
   width: 91%;
  flex-direction: row;


  @media screen and (max-width: 800px) {
    flex-direction: column;
  /* justify-content: center; */
  align-items: center ;



  }
`




export const GmailContainer = styled.div`
  display: flex;
  width: 48%;
  align-items: center;
  justify-content: space-around;
  font-family: 'Assistant 300';
  font-size: 22px;
  color: #004466;
  /* flex-direction: column; */
  /* margin-left:600px; */
  font-weight: bold;
  margin-top: 5px;




  @media screen and (max-width: 800px) {
    /* font-size: 20px;
    display: flex;
   align-items: center;
  margin-left:0px; */




  }
`





export const InstaContainer = styled.div`
  display: flex;
  width: 18%;
  align-items: center;
  justify-content: space-around;
  font-family: 'Assistant 300';
  font-size: 22px;
  color: #004466;
  /* flex-direction: column; */
  /* margin-left:600px; */
  font-weight: bold;
  margin-top: 5px;



  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 20px;





  }
`

export const MapaImage = styled.img`
  width: 340px;


  @media screen and (max-width: 900px) {
    width: 260px;



  }

`