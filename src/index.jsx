import React from "react";
import ReactDOM from "react-dom";

import CardHead from "./common/cardhead";
import CardList from './common/card_list';
import DefaultRouter from './DefaultRouter'
import './styles.scss';
import './forms.scss';

export function DrawAllFView(props){
    return <>
        <CardHead img="assets/images/diamonds.jpg" headerText="Företag"/>
        <CardList topDistance={80} cardHeight={200} />
    </>
}

ReactDOM.render(<DefaultRouter />, document.getElementById("main"));

