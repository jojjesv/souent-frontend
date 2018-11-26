import React from "react";

export default function Card(props){
    return <div className="content_card" style={{top: props.dt, height: props.ch}}>
        <img src={props.cimg} className="content" id="b1"></img>
        <h1 className="content" id="b2">{props.htext}</h1>
        <p className="content" id="b3">{props.ptext}</p>
        <div className="content" id="b4"></div>
        <button className="content_b" id="b5">Open</button>
        <img src={props.cimg} className="content" id="b6" style={{transform: props.deg}}></img>
    </div>
}