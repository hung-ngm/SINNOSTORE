import React from "react";


export function About2(prop) {
    return(
        <div className={prop.col}>
            <div className="about2Content">
                <i className={prop.icon}></i>
                <h3 className={prop.title}>{prop.titleText}</h3>
                <p className={prop.content}>{prop.contentText}</p>
            </div>
        </div>
    )
}