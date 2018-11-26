import React from "react";
import ReactDOM from "react-dom";

import CardHead from "./common/cardhead";
import CardList from "./common/cardlist";
import DefaultRouter from './DefaultRouter'

function DrawFView(props){
    return <>
        <CardHead cimg="../images/ruter.jpg" htext="Head"/>
        <CardList dTop={80} dAdd={5} cHeight={500}/>
    </>
}
export function DrawAllFView(props){
    return <>
        <CardHead cimg="../images/ruter.jpg" htext="Företag"/>
        <CardList dTop={80} dAdd={5} cHeight={200} imgDeg={270}/>
    </>
}
ReactDOM.render(<DefaultRouter />, document.getElementById("main"));

$(".content_b").on("click", function(){
    ReactDOM.render(<DrawFView/>, document.getElementById("main"));
});