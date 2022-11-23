import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md";

export const ServicesContainer = styled.div`
height: 600px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding-top: 120px;
background: #0C0C0C;

@media screen and (max-width:768px) {
    height: 1250px;
  padding-top: 70px;

}

@media screen and (max-width:480px) {
    height: 1300px;
  padding-top: 70px;

}
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

export const HeroBtnWrapper = styled.div`
margin-top: 62px;
display: flex;
flex-direction: column;
align-items: flex-start;
`
export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width:1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width:768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const ServicesCard = styled.div`
  background: #1E1E1E;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 220px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    tansition: all 0.2 ease-in-out
    cursor: pointer;
    box-shadow: 0 3px 6px rgb(0, 196, 142);

  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
`
export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 200px;
`

export const Logo = styled.img`
width: 80px;
color: #fff;
  margin-top: 40px;
  height: 80px;
  //opacity: 0.6;
  display: flex;
  justify-content: center;
  align-item: center;
`

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 64px;
  align-items: center;
  font-family: Imported, sans-serif;
  color: #FFF;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
  font-family: Imported, sans-serif;
  color: #00C48E;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: start;
  padding-top: 6px;
  font-family: MontserratThin,sans-serif;
  color: rgba(255, 255, 255, 0.49);
`