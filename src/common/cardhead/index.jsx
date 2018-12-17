import React from "react";
import "./style.scss";

export default function CardHead(props){
    return <div className="head_card">
        <img src={props.img} className="head_img"></img>
        <h1 className="head_rub">{props.headerText}</h1>
    </div>
}