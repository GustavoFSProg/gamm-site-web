import styled from 'styled-components'
import foto1 from './assets/foto1.jpg'

export const Container = styled.div`
 display: flex; 
 flex-direction: column;
 width: 100vw;
 height: 100vh;
 background: url(${foto1}) no-repeat;
 opacity: 80%;
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


`
