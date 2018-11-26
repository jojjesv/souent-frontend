import React from "react";
import ReactDOM from "react-dom";

import CardHead from "./common/card/CardHead";
import CardList from "./common/cardlist/CardList";

function DrawFView(props){
    return <>
        <CardHead cimg="../images/ruter.jpg" htext="Head"/>
        <CardList dTop={80} dAdd={5} cHeight={500} imgDeg={0}/>
    </>
}
function DrawAllFView(props){
    return <>
        <CardHead cimg="../images/ruter.jpg" htext="Företag"/>
        <CardList dTop={80} dAdd={5} cHeight={200} imgDeg={270}/>
    </>
}
ReactDOM.render(<DrawAllFView />, document.getElementById("main"));

$(".content_b").on("click", function(){
    ReactDOM.render(<DrawFView/>, document.getElementById("main"));

});