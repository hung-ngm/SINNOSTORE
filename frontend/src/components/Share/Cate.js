import React from "react";


export function Cate(props) {
    return (
        
            <div className={props.col}>
                <React.Fragment>
                    <a href={props.link}>
                        <img className="CateImg" src={props.imgRowSrc} alt={props.imgRowAlt}/>
                        <div className={props.cateClass}>
                            <h5>{props.imgRowAlt}</h5>
                        </div>
                    </a>
                </React.Fragment>
            </div>

    )
}