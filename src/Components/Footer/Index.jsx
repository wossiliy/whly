import React from 'react'
import {
    FooterContainer,
    FooterLink,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'
import {
    FaFacebook,
    FaTwitter,
    FaTelegram
} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    {/*<FooterLinkContainer>*/}
                    {/*    <FooterLinkWrapper>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle>About Us</FooterLinkTitle>*/}
                    {/*            <FooterLink to="/">How it works?</FooterLink>*/}
                    {/*            <FooterLink to="/">Testimonials</FooterLink>*/}
                    {/*            <FooterLink to="/">Careers</FooterLink>*/}
                    {/*            <FooterLink to="/">Investors</FooterLink>*/}
                    {/*            <FooterLink to="/">Terms of Services</FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle>Videos</FooterLinkTitle>*/}
                    {/*            <FooterLink to="/">Submit Video</FooterLink>*/}
                    {/*            <FooterLink to="/">Ambassador</FooterLink>*/}
                    {/*            <FooterLink to="/">Agency</FooterLink>*/}
                    {/*            <FooterLink to="/">Influencer</FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*    </FooterLinkWrapper>*/}
                    {/*    <FooterLinkWrapper>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle>Contact Us</FooterLinkTitle>*/}
                    {/*            <FooterLink to="/">Contact</FooterLink>*/}
                    {/*            <FooterLink to="/">Support</FooterLink>*/}
                    {/*            <FooterLink to="/">Sponsorship</FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle>Business</FooterLinkTitle>*/}
                    {/*            <FooterLink to="/">Blog</FooterLink>*/}
                    {/*            <FooterLink to="/">Referral Program</FooterLink>*/}
                    {/*            <FooterLink to="/">Media Assets</FooterLink>*/}
                    {/*            <FooterLink to="/">Security</FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*    </FooterLinkWrapper>*/}
                    {/*</FooterLinkContainer>*/}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                WHEELY WORLD
                            </SocialLogo>
                            <WebsiteRights>{new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://twitter.com/wheely_app"
                                    target="_blank"
                                    aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://t.me/wheelydrive"
                                    target="_blank"
                                    aria-label="Telegram">
                                    <FaTelegram />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://www.facebook.com/wheely.drive/"
                                    target="_blank"
                                    aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
