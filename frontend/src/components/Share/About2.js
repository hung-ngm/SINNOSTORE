import React from "react";


export function About2(prop) {
    return(
        <div className={prop.col}>
            <i class={prop.icon}></i>
            <h3 class={prop.title}>{prop.titleText}</h3>
            <p class={prop.content}>{prop.contentText}</p>
        </div>
    )
}