import React from "react";
import ReactDOM from "react-dom";

import CardHead from "./common/cardhead";
import CardList from "./common/cardlist";

function DrawFView(props){
    return <>
        <CardHead cimg="../images/ruter.jpg" htext="Head"/>
        <CardList dTop={80} dAdd={5} cHeight={500}/>
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