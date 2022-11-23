import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => scrollNav ? "rgba(30,30,30,0.7)" : 'transparent'};
    height: 90px;
    margin-top: -90px;
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px) {
        transition:0.8s all ease
    }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`



export const NavLogo = styled.img`
width: 60px;
color: #fff;
  height: 140px;
  margin-top: -25px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`
export const MobileIcon = styled.div`
  display: none;


  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-top: 15px;
margin-right:-22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 40px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
font-family: Imported,sans-serif;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #00C48E;
}
  &:hover {
    color: #00C48E;
  }
`

export const NavBtn = styled.nav`
display:flex;
align-items: center;

@media screen and (max-width:768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkS)`
font-family: Imported, sans-serif;
border-radius: 50px;
background: #00C48E; // Green Color
white-space: nowrap;
padding: 10px 22px;
  margin-top: 15px;
color: #1E1E1E;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #1E1E1E;

}
`