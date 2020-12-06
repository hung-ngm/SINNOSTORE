import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import { Intro }  from "./Share/Intro";
import { Cate } from "./Share/Cate";
import { Cate2 } from "./Share/Cate2";
import { About } from "./Share/About1";
import { About2 } from "./Share/About2";



// image

import mobile from './Share/images/mobile.png';
import IoT from './Share/images/IoT.jpg';
import AI from './Share/images/AI.jpg';
import others from './Share/images/others.jpg';


export const Home = () => {
    
    return (
        
        <div className="Home">
            <React.Fragment>
                <NavBar />

                <Intro />

                <div className="About">
                    <div className="aboutTitle">
                        <h1 className="aboutTitleContent">About</h1>
                    </div>

                    <About />

                    <hr className="aboutHr"/>
                    
                    <div className="about2TitleContainer">
                        <h1 className="about2Title">Products</h1>
                    </div>

                    <div className="container-ident aboutSection2">
                        <div className="row productQuality">
                            <About2 col="col-lg-4 col-md-12 productQuality1" icon="icon fas fa-check-circle fa-4x" title="qualityTitle" content="qualityContent" titleText="Easy to use." contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

                            <About2 col="col-lg-4 col-md-12 productQuality2" icon="icon fas fa-bullseye fa-4x" title="qualityTitle" content="qualityContent" titleText="Up to date" contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

                            <About2 col="col-lg-4 col-md-12 productQuality3" icon="icon fas fa-heart fa-4x" title="qualityTitle" content="qualityContent" titleText="Practically useful" contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </div>
                    </div>
                    
                </div>
                
                <div className="Cate">
                    <div className="Category">
                        <h2 className="CategoryText">Categories</h2>
                    </div>
                    
                    <Cate cateSectionNo="cateSection" row="row cateRow1" cateContentNo="cateContent1" cateContentTitleNo="cateContentTitle1" cateContentTitle="Embeded Sytem & IoT"   cateTitleNo="cateTitle1" cateContentDesNo="cateContentDes1" cateContentDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cateContentDownNo="cateContentDown1" cateImgNo="cateImg1" imgNo="cateImg1" src={IoT} alt="Embeded Sytem & IoT"/>

                    <hr className="cateHr"/>

                    <Cate2 cateSectionNo="cateSection" row="row cateRow2" cateContentNo="cateContent2" cateContentTitleNo="cateContentTitle2" cateContentTitle="Apps & Tools" cateTitleNo="cateTitle2" cateContentDesNo="cateContentDes2" cateContentDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cateContentDownNo="cateContentDown2" cateImgNo="cateImg3" imgNo="cateImg2" src={mobile} alt="Apps & Tools"/>

                    <hr className="cateHr"/>

                    <Cate cateSectionNo="cateSection" row="row cateRow3" cateContentNo="cateContent3" cateContentTitleNo="cateContentTitle3" cateContentTitle="AI" cateTitleNo="cateTitle3" cateContentDesNo="cateContentDes3" cateContentDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cateContentDownNo="cateContentDown3" cateImgNo="cateImg3" imgNo="cateImg3" src={AI} alt="AI"/>

                    <hr className="cateHr"/>

                    <Cate2 cateSectionNo="cateSection4" row="row cateRow4" cateContentNo="cateContent4" cateContentTitleNo="cateContentTitle4" cateContentTitle="Others" cateTitleNo="cateTitle4" cateContentDesNo="cateContentDes4" cateContentDes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." cateContentDownNo="cateContentDown4" cateImgNo="cateImg4" imgNo="cateImg4" src={others} alt="Others"/>

                </div>

                <hr />

                <div>
                    <Footer />
                </div>
            
            </React.Fragment>
        </div>
    )
}