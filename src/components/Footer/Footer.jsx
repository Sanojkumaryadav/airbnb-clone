import React from "react";
import styled from "styled-components";
import './Footer.css'
import { Link } from "react-router-dom";
import weblogo from './weblogo.png'
import rupees from './rupees.png'

import {ChevronUpIcon} from '@chakra-ui/icons'
import { useDisclosure, 
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, } from "@chakra-ui/react";
// import './Footer.css'

export const Footer = ()=> {
    const FooterWrapper=styled.div`
        display:flex;
        justify-content:space-between;
        // border:1px solid red;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        width:90%;
        // margin:auto;
        // margin-top:50px;
        padding:0 5%;
        position: fixed;
        left: 0;
        bottom: 0;
        
    `;

    const StylesLink =styled(Link)`
        font-size:600;
        text-decoration:none;
        padding:6px;
        color:black;
        :hover{
            text-decoration:underline;
        }
    `;

    const btnRef=React.useRef()
    const {isOpen, onOpen, onClose}= useDisclosure()

    return (
        <FooterWrapper>
           <div style={{display:"flex", alignItems:"center"}}>
                <p>
                    © 2022 Airbnb, Inc. 
                    ·<StylesLink to=""> Privacy </StylesLink>
                    ·<StylesLink to=""> Terms </StylesLink>
                    ·<StylesLink to=""> Sitemap </StylesLink>
                    ·<StylesLink to=""> Company details </StylesLink>
                </p>
           </div>
           <div style={{display:"flex", alignItems:"center"}}>
                <button className="drawerButton" style={{display:"flex", alignItems:"center"}}>
                    <img src={weblogo} alt="" style={{height:"20px",width:"20px", margin:"5px"}}/>
                    <p>English (IN)</p>
                </button>
                <button className="drawerButton" style={{display:"flex", alignItems:"center"}}>
                    <img src={rupees} alt="" style={{width:"20px", margin:"5px"}}/>
                    <p>INR</p>
                </button>
                
                <button className="drawerButton"> <p> Support & resources </p> </button>
                <button className="drawerButton" ref={btnRef} onClick={onOpen}><ChevronUpIcon w={40} h={28}/></button>

                <Drawer 
                    isOpen={isOpen}
                    placement='bottom'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent className="drawer">
                            <DrawerCloseButton className="drawerCloseButton"/>

                            <DrawerBody>
                                <div className="footerDrawer">
                                    <div>
                                        <h4>Support</h4>
                                        <p><StylesLink to="">Help Centre</StylesLink></p>
                                        <p><StylesLink to="">AirCover</StylesLink></p>
                                        <p><StylesLink to="">Safety information</StylesLink></p>
                                        <p><StylesLink to="">Cancellation options</StylesLink></p>
                                        <p><StylesLink to="">Our COVID-19 Response</StylesLink></p>
                                        <p><StylesLink to="">Report a neighbourhood concern</StylesLink></p>   
                                    </div>
                                    <div>
                                        <h4>Community</h4>
                                        <p><StylesLink to="">Airbnb.org: disaster relief housing</StylesLink></p>
                                        <p><StylesLink to="">Support Afghan refugees</StylesLink></p>
                                        <p><StylesLink to="">Combating discrimination</StylesLink></p>
                                    </div>
                                    <div>
                                        <h4>Hosting</h4>
                                        <p><StylesLink to="">Try hosting</StylesLink></p>
                                        <p><StylesLink to="">AirCover for Hosts</StylesLink></p>
                                        <p><StylesLink to="">Explore hosting reaources</StylesLink></p>
                                        <p><StylesLink to="">Visit our community forum</StylesLink></p>
                                        <p><StylesLink to="">How to host responsible</StylesLink></p>
                                    </div>
                                    <div>
                                        <h4>About</h4>
                                        <p><StylesLink to="">Newsroom</StylesLink></p>
                                        <p><StylesLink to="">Learn about new features</StylesLink></p>
                                        <p><StylesLink to="">Letter from our founders</StylesLink></p>
                                        <p><StylesLink to="">Careers</StylesLink></p>
                                        <p><StylesLink to="">Investors</StylesLink></p>
                                    </div>
                                    
                                </div>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                

           </div>
        </FooterWrapper>
    )
}
