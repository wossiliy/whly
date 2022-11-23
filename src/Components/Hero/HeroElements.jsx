import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
background: #1E1E1E;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
  
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
                linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 1
    
}
  @media screen and (max-width: 768px) {
    height: 1200px;
    align-items: flex-start;
    padding-top: 100px;
  }

  @media screen and (max-width: 480px) {
    height: 1200px;
  }
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
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
  @media screen and (max-width: 768px) {
    height: 400px;
    //margin-top: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`

export const Row = styled.div`
z-index: 4;
max-width: 1200px;
position: absolute;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
display: none;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    display: none;

  }
`
export const Column = styled.div`
z-index: 4;
  display: none;
position: absolute;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 120%;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 1200px;
    display: grid;

  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 1200px;
    display: grid;

  }
`

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 500px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;
    margin-top: -10%;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: flex-start;
    margin-top: -10%;
  }
`

export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  max-height: 500px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;

  }

  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: flex-start;
  }
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
text-align: left;

@media screen and (max-width: 768px) {
    font-size: 38px;
  text-align: center;

}

@media screen and (max-width: 480px) {
    font-size: 28px;
  text-align: center;

}
`

export const HeroP = styled.p`
  margin-top: 12px;
  color: #fff;
  fonst-size: 24px;
  font-family: MontserratThin, sans-serif;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  background: rgba(30, 30, 30, 0.3);


  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;

  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: center;

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