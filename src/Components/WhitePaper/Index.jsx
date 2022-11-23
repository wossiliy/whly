import React, { useState } from 'react'
import {
    HeroContainer,
    HeroTitleRight,
    VideoBg,
    ImageBg,
    ArrowForward,
    Row,
    HeroP,
    HeroTitle,
    HeroBtnWrapper,
    ArrowRight, Mockup, ColumnLeft, ColumnRight
} from '../WhitePaper/WhitePaperElements'
import { Button } from '../../Utilities/ButtonElements'
import Video from '../../Videos/video.mp4'


const WhitePaper = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <>
            <HeroContainer id="white-paper">

            </HeroContainer>
        </>
    )
}

export default WhitePaper
