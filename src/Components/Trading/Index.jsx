import React, {useState} from 'react'
import {
    ServicesContainer,
    ServicesCard,
    X,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesWrapper,
    ServicesIcon, Row, NavLogo, HeroP, HeroBtnWrapper, Logo
} from './TradingElements'
import Icon1 from '../../Images/1.svg'
import Icon2 from '../../Images/Vf.svg'
import Icon3 from '../../Images/Account.svg'
import wheely_logo from "../../Images/logo2.svg";
import pinksale_logo from "../../Images/pinksale.png";
import {Button, RaisedButton} from "../../Utilities/ButtonElements";
import {ArrowForward, ArrowRight} from "../Hero/HeroElements";


const Trading = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <ServicesContainer id="trading">
                <ServicesH1>
                    TRADING
                </ServicesH1>
                <Row>
                    <NavLogo src={wheely_logo}>
                    </NavLogo>
                    <X>X</X>



                    <NavLogo src={pinksale_logo}>
                    </NavLogo>
                </Row>
                <HeroP>
                    The WHEELY token presale is coming soon, with further listing on PancakeSwap and other decentralized exchanges.
                    Follow WHEELY WORLD announcements on our social networks! We have a great future!
                </HeroP>

                <HeroBtnWrapper>
                    <RaisedButton

                        // as="a" href="https://yeti-ecosystem.gitbook.io/wheely.whitepaper/roadmap-for-wheely" target="_blank"

                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        PINKSALE {hover}
                    </RaisedButton>
                </HeroBtnWrapper>
            </ServicesContainer>
        </>
    )
}

export default Trading

