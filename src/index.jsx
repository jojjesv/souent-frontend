import React from "react";
import ReactDOM from "react-dom";

import CardHead from "./common/cardhead";
import CardAllFList from './common/card_list';
import DefaultRouter from './DefaultRouter'
import './styles.scss';
import './forms.scss';

function DrawFView(props){
    return <>
        <CardHead cimg="assets/images/ruter.jpg" htext={"företag" + props.btId}/>
        <CardFList dTop={80} dAdd={5} cHeight={500}/>
    </>
}
export function DrawAllFView(props){
    return <>
        <CardHead cimg="assets/images/ruter.jpg" htext="Företag"/>
        <CardAllFList data={props.data} dTop={80} dAdd={5} />
    </>
}

ReactDOM.render(<DefaultRouter />, document.getElementById("main"));

$(".content_b").on("click", function(){
    var btnId = $(this).attr("value");
    ReactDOM.render(<DrawFView btId={btnId}/>, document.getElementById("main"));
});