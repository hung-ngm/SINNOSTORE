// import { render } from "@testing-library/react";
import React from "react";

export function About() {
    return (
        <div className="container-ident AboutSection">
            <div className="container">
                <div className="row AboutContent">
                    <div className="col-lg-6 col-md-12 colImgAbout">
                        <img className="AboutImg" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Mobile_software_development_laboratory_in_The_Estonian_Information_Technology_College.jpg"/>
                    </div>
                    <div className="col-lg-6 col-md-12 colTextAbout">
                        <h4>About Store</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
