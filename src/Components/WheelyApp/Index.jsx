import React, {useState} from 'react'
import "./styles.css";
// import mockup from '../../Images/Login.svg'
import mockup from '../../Images/Login.png'
import mockup1 from '../../Images/Home.png'
import mockup2 from '../../Images/Drive.png'
import mockup3 from '../../Images/Profile.png'
import mockup4 from '../../Images/Garage.png'
import {
    ArrowForward, ArrowRight,
    ColumnLeft,
    ColumnRight,
    HeroBtnWrapper,
    HeroContainer,
    HeroP, HeroTitle,
    HeroTitleRight,
    Mockup,
    Row, ServicesH1
} from "./WheelyAppElements";
import {Button} from "../../Utilities/ButtonElements";




const slideWidth = 30;



const _items = [
    {
        player: {
            title: ("Login").toUpperCase(),
            desc: 'The section where users log in to their account. If a user does not yet have a WHEELY account, he can also register in this section.',
            image: mockup
        },
    },
    {
        player: {
            title: ("Home").toUpperCase(),
            desc: "The home screen is a section where a user can see how many tokens he has, his vehicle, vehicle level, remaining energy and remaining distance. А user can also start driving from the home screen.",
            image: mockup1,
        },
    },
    {
        player: {
            title: ("Driving").toUpperCase(),
            desc: 'This section opens when а user starts driving and earning a token. WHEELY app shows the location map, speed, travel time, earned tokens, and remaining energy.',
            image: mockup2,
        },
    },
    {
        player: {
            title: ("Account").toUpperCase(),
            desc: 'Personal account screen, which contains all the information about the user: the number of tokens, trips, statistics. A user can enter his wallet and settings through this section and see all important information. \n',
            image: mockup3,
        },
    },
    {
        player: {
            title: ("Garage").toUpperCase(),
            desc: 'Section where all information about the user\'s vehicle is collected: the remaining energy, damage, level and characteristics of the vehicle. A user can repair and upgrade his vehicles in this section. \n',
            image: mockup4,
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(2)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);
    // className={i === activeIdx ? 'dot active' : 'dot'}
    if (idx > 4)idx = idx-5;
    return (
        // <div className="block">
            <li className={idx === activeIdx ? "carousel__slide-item" : "carousel__slide-item active"} style={item.styles}>
                <div className="carousel__slide-item-img-link">
                    <img src={item.player.image} alt={item.player.title} />
                </div>
                <div className={idx === activeIdx ? "carousel-slide-item__body" : "carousel-slide-item__body active"}>
                    {/*<HeroTitleRight>{item.player.title}</HeroTitleRight>*/}
                    <h4>{item.player.title}</h4>
                    {/*<HeroP>you can earn game token.*/}
                    {/*</HeroP>*/}
                    {/*<p>{activeIdx}</p>*/}
                    <p>{item.player.desc}</p>
                </div>
            </li>
        // </div>

        // <li className={idx === activeIdx ? "carousel__slide-item" : "carousel__slide-item active"} style={item.styles}>
        //     <div className="carousel__slide-item-img-link">
        //         <img src={item.player.image} alt={item.player.title} />
        //     </div>
        //     <div className={idx === activeIdx ? "carousel-slide-item__body" : "carousel-slide-item__body active"}>
        //         {/*<HeroTitleRight>{item.player.title}</HeroTitleRight>*/}
        //         <h4>{item.player.title}</h4>
        //         {/*<HeroP>you can earn game token.*/}
        //         {/*</HeroP>*/}
        //         {/*<p>{activeIdx}</p>*/}
        //         <p>{item.player.desc}</p>
        //     </div>
        // </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const WheelyApp = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (

        <HeroContainer id="wheely-app">


            <div className="carousel__wrap">

                <div className="carousel__inner">
                    <ServicesH1>
                        WHEELY APP
                    </ServicesH1>
                    <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                        <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                    </button>
                    <div className="carousel__container">
                        <ul className="carousel__slide-list">
                            {items.map((pos, i) => (
                                <CarouselSlideItem
                                    key={i}
                                    idx={i}
                                    pos={pos}
                                    activeIdx={activeIdx}

                                />
                            ))}
                        </ul>
                    </div>
                    <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                        <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                    </button>
                    <div className="carousel__dots">
                        {items.slice(0, length).map((pos, i) => (
                            <button
                                key={i}
                                onClick={() => handleDotClick(i)}
                                className={i === activeIdx ? 'dot active' : 'dot'}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </HeroContainer>


    );
};


export default WheelyApp


//
// import React, { useState } from 'react'
// import {
//     HeroContainer,
//     HeroTitleRight,
//     VideoBg,
//     ImageBg,
//     ArrowForward,
//     Row,
//     HeroP,
//     HeroTitle,
//     HeroBtnWrapper,
//     ArrowRight, Mockup, ColumnLeft, ColumnRight
// } from '../WheelyApp/WheelyAppElements'
// import { Button } from '../../Utilities/ButtonElements'
// import Video from '../../Videos/video.mp4'
// import mockup from '../../Images/profile.svg'
// import mockup1 from '../../Images/garag.svg'

//
// const WheelyApp = () => {
//
//     const [hover, setHover] = useState(false);
//
//     const onHover = () => {
//         setHover(!hover);
//     }
//
//
//     return (
//         <>
//             <HeroContainer id="wheely-app">
//
//
//                 <Row>
//
//                     <ColumnLeft>
//
//                         <Mockup src={mockup} />
//
//
//
//                     </ColumnLeft>
//
//                     <ColumnRight>
//                         <HeroTitleRight>WHEELY IS A WEB 3 APPLICATION</HeroTitleRight>
//                         <HeroP>Users can earn tokens by driving any mode of transport.
//                         </HeroP>
//                         <HeroP>Whether it's a bike, scooter, car, or even public transportation,
//                         </HeroP>
//                         <HeroP>you can earn game token.
//                         </HeroP>
//                         <HeroBtnWrapper>
//                             <Button
//                                 to="signup"
//                                 onMouseEnter={onHover}
//                                 onMouseLeave={onHover}
//                                 primary="true"
//                                 dark="true"
//                             >
//                                 PRESALE {hover ? <ArrowForward /> : <ArrowRight />}
//                             </Button>
//
//                         </HeroBtnWrapper>
//                     </ColumnRight>
//
//
//                 </Row>
//
//                 <Row>
//
//                     <ColumnLeft>
//
//
//                         <HeroTitle>WHEELY IS A WEB 3 APPLICATION</HeroTitle>
//                         <HeroP>Users can earn tokens by driving any mode of transport.
//                         </HeroP>
//                         <HeroP>Whether it's a bike, scooter, car, or even public transportation,
//                         </HeroP>
//                         <HeroP>you can earn game token.
//                         </HeroP>
//                         <HeroBtnWrapper>
//                             <Button
//                                 to="signup"
//                                 onMouseEnter={onHover}
//                                 onMouseLeave={onHover}
//                                 primary="true"
//                                 dark="true"
//                             >
//                                 PRESALE {hover ? <ArrowForward /> : <ArrowRight />}
//                             </Button>
//
//                         </HeroBtnWrapper>
//
//                     </ColumnLeft>
//
//                     <ColumnRight>
//                         <Mockup src={mockup1} />
//
//
//                     </ColumnRight>
//
//
//                 </Row>
//
//             </HeroContainer>
//         </>
//     )
// }
//
// export default WheelyApp
