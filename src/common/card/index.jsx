import React from "react";
import {
	Link
} from 'react-router-dom';
import "./style.scss";
import "./style_desktop.scss";

export default function Card(props) {
	return <div className="card" style={{ top: props.topDistance, height: props.cardHeight }}>
		<img src={props.img} className="symbol top-left"></img>
		<h1 className="header" >{props.headerText}</h1>
		<p className="preview-content" dangerouslySetInnerHTML={{ __html: props.paragraphText }}></p>
		{
			props.openLinkHref ? (
				<Link className="open" to={props.openLinkHref}>Read more</Link>
			) : (
					<button className="open" value={props.id} onClick={props.open}>Open</button>
				)
		}
		<img src={props.img} className="symbol bottom-right" ></img>
	</div >
}