import React from "react";
import {
	Link
} from 'react-router-dom';
import "./style.scss";
import "./style_desktop.scss";

export default function Card(props) {
  let { customLogoUrl } = props;

	return <div className="card" style={{ top: props.topDistance, height: props.cardHeight }}>
		<img src={customLogoUrl || props.img} className="symbol top-left"></img>
		<h1 className="header" >{props.headerText}</h1>
		<p className="preview-content"
			ref={e => {
				if (e) {
					measureAndTruncatePreviewContent(e)
				}
			}}
			dangerouslySetInnerHTML={{ __html: props.paragraphText }}></p>
		{
			props.openLinkHref ? (
				<Link className="open" to={props.openLinkHref}>Read more</Link>
			) : (
					<button className="open" value={props.id} onClick={props.open}>Read more</button>
				)
		}
		<img src={props.img} className="symbol bottom-right" ></img>
	</div >
}

/**
 * Measures the preview content element
 * @param {HTMLParagraphElement} e 
 */
function measureAndTruncatePreviewContent(e) {
	if (e.clientHeight > 80 && !e.innerText.endsWith("...")) {
		//	Truncate
		e.innerText = e.innerText.substring(0, 32) + '...';
	}
}