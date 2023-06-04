import styled from 'styled-components'
import foto1 from './assets/alemanha-free.jpg'

export const Container = styled.div`
 display: flex; 
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 background: url(${foto1}) no-repeat;
 opacity: 80%;
 background-size: cover;
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

 @media screen and (max-width: 800px){
 flex-direction: column;
 justify-content: space-around;

 }


`

export const ContainerTitle = styled.div`
 display: flex; 
 flex-direction: column;
 width: 100%;
 height: 26rem;
 opacity: 72%;
 background: #132639;
 margin-top: 130px;
 justify-content: center;
 align-items: center;


 @media screen and (max-width: 800px){
  opacity: 78%;



 }


`
export const Span = styled.span`
 display: flex; 
  
  font-size: 29px;
   font-weight: bold;


 @media screen and (max-width: 800px){
  font-size: 22px;
  width: 110%;
  display: flex; 


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


 @media screen and (max-width: 800px){
  font-size: 16px;
  /* width: 110%; */
  display: flex; 

 }

`

export const Button = styled.button`
 display: flex;  
 justify-content: center ;
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

  &:hover{
    background: yellowgreen;
    color: #005580;
  }


 @media screen and (max-width: 800px){
  font-size: 16px;
  /* width: 110%; */
  display: flex; 


 }

`

export const ContainerText = styled.div`
 display: flex; 
 flex-direction: column;
 align-items: center;
 width: 50%;
 height: 20rem;
 justify-content: center;
 color: white;
 opacity: 180%;
 font-size: 24px;


 @media screen and (max-width: 800px){
  font-size: 18px;
  width: 100%;


 }
`
