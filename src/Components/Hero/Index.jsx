import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ImageBg,
    ArrowForward,
    Row,
    HeroP,
    HeroTitle,
    HeroBtnWrapper,
    ArrowRight, Mockup, ColumnLeft, ColumnRight, Column
} from '../Hero/HeroElements'
import { Button } from '../../Utilities/ButtonElements'
import Video from '../../Videos/video.mp4'
import hero_bg from '../../Images/bg.svg'
import mockup from '../../Images/Preview.png'

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    {/*<VideoBg autoPlay loop muted src={Video} type='video/mp4' />*/}
                    <ImageBg src={hero_bg} />
                </HeroBg>

                <Row>

                    <ColumnLeft>
                        <HeroTitle>{("Earn Wheely by moving on any vehicle!\n").toUpperCase()}</HeroTitle>
                        <HeroP>Wheely is the first web3 mobile application based on the drive-to-earn concept that allows you to earn a token by driving ANY mode of transport. To earn a token you just need to hold a WHEELY governance token in your wallet.

                        </HeroP>
                        {/*<HeroP>Whether it's a bike, scooter, car, or even public transportation,*/}
                        {/*</HeroP>*/}
                        {/*<HeroP>you can earn game token.*/}
                        {/*</HeroP>*/}
                        <HeroBtnWrapper>
                            <Button
                                to="trading"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                dark="true"
                            >
                                PRESALE {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>

                        </HeroBtnWrapper>
                    </ColumnLeft>

                    <ColumnRight>
                        <Mockup src={mockup} />

                    </ColumnRight>


                </Row>

                <Column>
                    <ColumnRight>
                        <Mockup src={mockup} />

                    </ColumnRight>
                    <ColumnLeft>
                        <HeroTitle>{("Earn Wheely token by moving on any vehicle!\n").toUpperCase()}</HeroTitle>
                        <HeroP>Wheely is the first web3 mobile application based on the drive-to-earn concept that allows you to earn a token by driving ANY mode of transport. To earn a token you just need to hold a WHEELY governance token in your wallet.

                        </HeroP>
                        <HeroBtnWrapper>
                            <Button
                                to="trading"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary="true"
                                dark="true"
                            >
                                PRESALE {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>

                        </HeroBtnWrapper>
                    </ColumnLeft>




                </Column>

            </HeroContainer>
        </>
    )
}

export default Hero
