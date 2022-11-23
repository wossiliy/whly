import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon, NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavElements'
import wheely_logo from '../../Images/logo2.svg'


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} src={wheely_logo}>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="wheely-app"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >WHEELY APP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                as="a" href="https://wheelyworld.gitbook.io/wheely-world-white-paper/" target="_blank"
                            >WHITE PAPER</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="road-map"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >ROAD MAP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="trading"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >TRADING</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact-us"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >CONTACT US</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="trading"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                        >PRESALE</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
