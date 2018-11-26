import React from "react";

export default function CardHead(props){
    return <div className="head_card">
        <img src={props.cimg} className="head_img"></img>
        <h1 className="head_rub">{props.htext}</h1>
    </div>
}