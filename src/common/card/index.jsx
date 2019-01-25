import React from "react";
import {
	Link
} from 'react-router-dom';
import "./style.scss";
import "./style_desktop.scss";

export default function Card(props) {
	let { customLogoUrl } = props;

	let { paragraphText: content } = props;

	let hasContent = !!content;

	console.log("CONTENT: ", content);

	return <div className="card" style={{ top: props.topDistance, height: props.cardHeight }}>
		<img src={customLogoUrl || props.img} className="symbol top-left"></img>
		<h1 className="header" >{props.headerText}</h1>
		<div className="preview-content"
			ref={e => {
				if (e) {
					measureAndTruncatePreviewContent(e)
				}
			}}
			dangerouslySetInnerHTML={hasContent ? {
				__html: content
			} : undefined}>
			{
				!hasContent ? (
					<div className="no-content">
						<img className="face" alt="Disappointed face"
							src="/assets/images/face-disappointed.png" />
						<p className="subtitle">Looks empty</p>
					</div>
				) : null
			}
		</div>
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