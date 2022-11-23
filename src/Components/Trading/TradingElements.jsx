import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md";

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
  align-items: center;
background:#0C0C0C;

@media screen and (max-width:768px) {
    height: 1250px;
}

@media screen and (max-width:480px) {
    height: 1300px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
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
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform : scale(1.02);
    tansition: all 0.2 ease-in-out
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  transition: all 0.2s ease-in-out;
`

export const X = styled.h1`
font-size: 2.2rem;
color: #fff;
  padding: 40px;
align-items: center;
text-align: center;
  font-family: MontserratThin, sans-serif;


  @media screen and (max-width:480px) {
    font-size: 2rem;
}
`

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  align-items: center;
  padding-top: 100px;
  font-family: Imported, sans-serif;
  color: #FFF;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const NavLogo = styled.img`
  width: 60px;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  opacity: 0.6;
  &:hover{
    opacity: 1;
  }
`
export const Logo = styled.img`
  width: 40px;
  color: #fff;
  height: 40px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
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

export const HeroP = styled.p`
  width: 100%;
color: #fff;
  font-size: 1.4rem;
  margin-top: 42px;
  font-family: MontserratThin,sans-serif;
  padding: 0 20%;

  text-align: center;

@media screen and (max-width: 768px) {
    font-size: 24px;
  padding: 0 20%;
  //padding-left: 100px;
  //padding-right: 100px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
  padding: 0 100px;


}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`