// import { render } from "@testing-library/react";
import React from "react";

export function About() {
    return (
        <div className="container-ident aboutSection1">
            <div className="row aboutContent">
                <div className="col-lg-6 col-md-12 colImgAbout">
                    <div className="aboutImgContainer">
                        <img className="aboutImg" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Mobile_software_development_laboratory_in_The_Estonian_Information_Technology_College.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 colTextAbout">
                    <div className="aboutStore">
                        <h4 className="aboutStoreContent">About Store</h4>
                    </div>
                    <div className="aboutSinnoContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="aboutProduct">
                        <h4 className="aboutProductContent">About Products</h4>
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
