import React, {useState} from 'react'
import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesWrapper,
    ServicesIcon,
    Column, ColumnRight,
    Logo
} from './RoadMapElements'
import Icon1 from '../../Images/1.svg'
import Icon2 from '../../Images/Vf.svg'
import Icon3 from '../../Images/Account.svg'
import {Button, RaisedButton} from "../../Utilities/ButtonElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../RoadMap/RoadMapElements";
import rocket from '../../Images/rocket.png'
import top_10 from '../../Images/top_10.png'
import mobile_development from '../../Images/mobile_development.png'
import nft_box from '../../Images/nft_box.png'
import wheely_logo from "../../Images/logo2.svg";


const RoadMap = () => {


    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    const onHover1 = () => {
        setHover1(!hover1);
    }
    const onHover2 = () => {
        setHover2(!hover2);
    }
    const onHover3 = () => {
        setHover3(!hover3);
    }


    return (
        <>
            <ServicesContainer id="road-map">
                <ServicesH1>ROAD MAP</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true">
                        {hover ? <Column>
                                <ServicesH2>NOVEMBER 2022</ServicesH2>
                            <ColumnRight>
                                <ServicesP>
                                    • The website has been released
                                </ServicesP>
                                <ServicesP>
                                    • WHEELY token presale
                                </ServicesP>
                                <ServicesP>
                                    • Listing on CoinMarketCap
                                </ServicesP>
                                <ServicesP>• Airdrop</ServicesP>
                            </ColumnRight>
                            </Column>
                            :  <Column>
                                <ServicesH2>NOVEMBER 2022</ServicesH2>
                                <Logo src={rocket}>
                                </Logo>
                            </Column>}

                    </ServicesCard>
                    <ServicesCard onMouseEnter={onHover1}
                                  onMouseLeave={onHover1}
                                  primary="true"
                                  dark="true">
                        {hover1 ? <Column>
                                <ServicesH2>DECEMBER 2022</ServicesH2>
                                <ServicesP>
                                    • WHEELY Token listing on top 10 dex exchanges</ServicesP>
                                <ServicesP>
                                    • Collaborations with project partners
                                </ServicesP>
                                <ServicesP>
                                    • Tests of new game mechanics for future updates</ServicesP>
                            </Column>
                            :  <Column>
                                <ServicesH2>DECEMBER 2022</ServicesH2>
                                <Logo src={top_10}>
                                </Logo>
                            </Column>}
                    </ServicesCard>
                    <ServicesCard
                        onMouseEnter={onHover2}
                        onMouseLeave={onHover2}
                                     primary="true"
                                     dark="true">
                        {hover2 ? <Column>
                                <ServicesH2>JANUARY 2023
                                </ServicesH2>
                            <ServicesP>
                                • Public beta tests of the WHEELY app
                            </ServicesP>
                            <ServicesP>
                                • Launching the WHEELY app</ServicesP>
                        </Column>
                            :  <Column>
                                <ServicesH2>JANUARY 2023
                                </ServicesH2>
                                <Logo src={mobile_development}>
                                </Logo>
                            </Column>}
                    </ServicesCard>
                    <ServicesCard onMouseEnter={onHover3}
                                              onMouseLeave={onHover3}
                                              primary="true"
                                              dark="true">
                        {hover3 ? <Column>
                                <ServicesH2>FEBRUARY 2023</ServicesH2>
                                <ServicesP>• Launch of in-app NFT Marketplace.</ServicesP>
                            </Column>
                            :  <Column>
                                <ServicesH2>FEBRUARY 2023</ServicesH2>
                                <Logo src={nft_box}>
                                </Logo>
                            </Column>}
                    </ServicesCard>
                </ServicesWrapper>
                <HeroBtnWrapper>
                    <RaisedButton

                        as="a" href="https://wheelyworld.gitbook.io/wheely-world-white-paper/roadmap-for-wheely" target="_blank"

                        // onMouseEnter={onHover}
                        // onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        OPEN DETAILED ROAD MAP
                    </RaisedButton>

                </HeroBtnWrapper>
            </ServicesContainer>
        </>
    )
}

export default RoadMap
