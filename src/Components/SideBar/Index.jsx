import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute, NavBtnLink, NavBtn,

} from './SideBarElements'
const Sidebar = ({ toggle, isOpen }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>







                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="wheely-app" onClick={toggle}>
                            WHEELY APP
                        </SidebarLink>
                        <SidebarLink as="a" href="https://wheelyworld.gitbook.io/wheely-world-white-paper/" target="_blank"
                            onClick={toggle}>
                            WHITE PAPER
                        </SidebarLink>
                        <SidebarLink to="road-map" onClick={toggle}>
                            ROAD MAP
                        </SidebarLink>
                        <SidebarLink to="trading" onClick={toggle}>
                            TRADING
                        </SidebarLink>
                        <SidebarLink to="contact-us" onClick={toggle}>
                            CONTACT US
                        </SidebarLink>

                    </SidebarMenu>
                    <NavBtn>
                        <NavBtnLink to="trading" onClick={toggle}
                        >PRESALE</NavBtnLink>
                    </NavBtn>
                    {/*<SidebarBtnWrap>*/}
                    {/*    <SidebarRoute to="/">Sign In</SidebarRoute>*/}
                    {/*</SidebarBtnWrap>*/}
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
