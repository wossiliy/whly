import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import "./styles.css";

import {
    ServicesContainer,
    ServicesCard,
    X,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesWrapper,
    ServicesIcon, Row, NavLogo, HeroP, HeroBtnWrapper, Logo
} from './ContactsElements'
import Icon1 from '../../Images/1.svg'
import Icon2 from '../../Images/Vf.svg'
import Icon3 from '../../Images/Account.svg'
import wheely_logo from "../../Images/logo2.svg";
import pinksale_logo from "../../Images/pinksale.png";
import {Button, RaisedButton} from "../../Utilities/ButtonElements";
import {ArrowForward, ArrowRight} from "../Hero/HeroElements";


const Contacts = () => {
    const { register, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
       //templateID
    const form = useRef();


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`service_smzbv0f`, 'template_2yrkmq8', form.current, 'DIPC0S4VZ356-2Lql')
            .then((result) => {
                    alert("Message Sent, We will get back to you shortly", result.text);
                },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });
    };
    return (


        <>
            <ServicesContainer id="contact-us">
                <ServicesH1>
                    CONTACT US
                </ServicesH1>

                <HeroP>
                    We’re here to help and answer any question you might have. We look forward to hearing from you. You can find us on social media below.
                </HeroP>
                <Row>

                    <form className={"wrapper "} ref={form} onSubmit={handleSubmit}>
                        <input type="text" className={"input "} placeholder="Name" {...register("user_name", {required: true, maxLength: 80})} />
                        {/*<input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />*/}
                        <input type="text" className={"input "} placeholder="Email" {...register("user_email", {required: true, pattern: /^\S+@\S+$/i})} />
                        <input type="text" className={"input "} placeholder="Message" {...register("message", {required: true, maxLength: 12})} />
                        <input type="submit"    value="Submit"   className={"button "}
                        />
                    </form>

                    {/*<NavLogo src={wheely_logo}>*/}
                    {/*</NavLogo>*/}
                    {/*<X>X</X>*/}

                    {/*<NavLogo src={pinksale_logo}>*/}
                    {/*</NavLogo>*/}
                </Row>

            </ServicesContainer>
        </>
        // )



        // <form ref={form} onSubmit={handleSubmit}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>
    );

    // return (
    //     <>
    //         <ServicesContainer id="contact-us">
    //             <ServicesH1>
    //                 TRADING
    //             </ServicesH1>
    //             <Row>
    //                 <NavLogo src={wheely_logo}>
    //                 </NavLogo>
    //                 <X>X</X>
    //
    //
    //
    //                 <NavLogo src={pinksale_logo}>
    //                 </NavLogo>
    //             </Row>
    //             <HeroP>
    //                 Yeti Coin is a crypto coin based on Binance Smart Chain blockchain (BSC) protocol. Yeti is already listed on PancakeSwap with further listing on many crypto exchanges such as Binance, Coinbase, etc.
    //                 You can follow instrictions below to add YETI Coin to your wallet and add liquidity to YETI Coin on Pancakeswap.
    //             </HeroP>
    //
    //             <HeroBtnWrapper>
    //                 <RaisedButton
    //
    //                     as="a" href="https://yeti-ecosystem.gitbook.io/wheely.whitepaper/roadmap-for-wheely" target="_blank"
    //
    //                     onMouseEnter={onHover}
    //                     onMouseLeave={onHover}
    //                     primary="true"
    //                     dark="true"
    //                 >
    //                     PINKSALE {hover}
    //                 </RaisedButton>
    //             </HeroBtnWrapper>
    //         </ServicesContainer>
    //     </>
    // )
}

export default Contacts

