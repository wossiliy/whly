import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0C0C0C;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  //padding: 0 30px;
  height: 1200px;
  //
  position: relative;
  z-index: 1;
  //
  //
  flex-direction: column;
  //
  
  
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0C0C0C;

    //background: linear-gradient(280deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%), linear-gradient(280deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.44) 100%);;
    //z-index: 1

  }

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  align-items: center;
  //padding-top: 100px;
  //padding-bottom: 50px;
  font-family: Imported, sans-serif;
  color: #FFF;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`


export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #1E1E1E;`

export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #1E1E1E;
`

export const Mockup = styled.img`
  position: absolute;

  //width: 400px;
height: 550px;
-o-object-fit: cover;
object-fit: cover;
`

export const Row = styled.div`
z-index: 4;
max-width: 1200px;
  margin: 0 auto;
  display: grid;
  justify-content: center;

  grid-template-columns: 1fr 1fr;
  align-items: center;
   padding-top: 300px;
  grid-gap: 16px;
`
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-height: 500px;
  transition: all 0.2s ease-in-out;
`

export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  max-height: 500px;
  transition: all 0.2s ease-in-out;
`

// export const HeroContent = styled.div`
// z-index: 3;
// max-width: 1200px;
// position: absolute;
// padding: 8px 24px;
// display: flex;
// flex-direction: row;
// align-index: center;
// `

export const HeroTitle = styled.h1`
color: #ffff;
font-size:42px;
font-family: Imported,sans-serif;

@media screen and (max-width: 768px) {
    font-size: 48px;
}

@media screen and (max-width: 480px) {
    font-size: 28px;
}
`

export const HeroTitleRight = styled.h1`
color: #ffff;
font-size:42px;
font-family: Imported,sans-serif;
  text-align: center;

@media screen and (max-width: 768px) {
    font-size: 48px;
}

@media screen and (max-width: 480px) {
    font-size: 28px;
}
`

export const HeroP = styled.p`
margin-top: 12px;
color: #fff;
fonst-size:24px;
  font-family: MontserratThin,sans-serif;
  text-align: center;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`