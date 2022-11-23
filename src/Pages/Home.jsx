import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Index'
import Sidebar from '../Components/SideBar/Index'
import Hero from '../Components/Hero/Index'
import InfoSection from '../Components/Info/Index'
import RoadMap from '../Components/RoadMap/Index'
import WheelyApp from '../Components/WheelyApp/Index'
// import idx from '../Components/WheelyApp/idx'
import Trading from '../Components/Trading/Index'
import { homeObj1, homeObj2, homeObj3 } from '../Components/Info/Data'
import Footer from '../Components/Footer/Index'
import WhitePaper from "../Components/WhitePaper/Index";
import App from "../App";
import Contacts from "../Components/Contacts/Index";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

            {/*mobile haburger*/}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            {/*<idx/>*/}
            <WheelyApp />
            <WhitePaper />
            {/*<InfoSection  {...homeObj1} />*/}
            {/*<InfoSection  {...homeObj2} />*/}
            <RoadMap />
            <Trading />
            <Contacts />
            {/*<InfoSection  {...homeObj3} />*/}
            <Footer />
        </>
    )
}

export default Home
