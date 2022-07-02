import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './Navbar.css'
import filter from './filter.png'

export const Navbar = ()=> {
    const NavbarWrapper=styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        padding:15px;
        // overflow:hidden;
        // position: fixed;
        // top: 5rem;
        // border:1px solid red;
        // width:100%;
        height:40px;
        margin-top:100px;
        // margin:auto;
        

    `;

    const StylesLink =styled(Link)`
        font-size:600;
        text-decoration:none;
        padding:6px;
    `;

    return (
        <NavbarWrapper>
            <div className="navbarSlider">
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" style={{height:"30px",width:"25px"}} />
                        <p>Islands</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>National parks</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" style={{height:"30px",width:"25px"}} />
                        <p>Ṭiny homes</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>OMG!</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Camping</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Cabins</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Design</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Arctic</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Amazing pools</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Lakefront</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Surfing</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>A-frames</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Treehouses</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Tropical</p>
                    </StylesLink>
                </div>
                <div className="navbarSliderItems">
                    <StylesLink to="/">
                        <img src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" style={{height:"30px",width:"25px"}}/>
                        <p>Caves</p>
                    </StylesLink>
                </div>

                
            </div>
            <div className="filter">
                <div className="insideFilter">
                    <img src={filter} alt="" style={{width:"15px", height:"15px"}}/>
                    <button>Filters</button>
                </div>
            </div>
            
        </NavbarWrapper>
    )
}




