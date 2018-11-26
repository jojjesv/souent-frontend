import React from "react";
import Card from "../card";

var deckAllF = [
    {
        "h": "företag",
        "p": "info om företag"
    },
    {
        "h": "ide",
        "p": "motevation"
    },
    {
        "h": "medlemar",
        "p": "namn på medlemar"
    },
    {
        "h": "företag",
        "p": "info om företag"
    },
    {
        "h": "ide",
        "p": "motevation"
    },
    {
        "h": "medlemar",
        "p": "namn på medlemar"
    },
    {
        "h": "företag",
        "p": "info om företag"
    },
    {
        "h": "ide",
        "p": "motevation"
    },
    {
        "h": "medlemar",
        "p": "namn på medlemar"
    }
]

export default class CardAllFList extends React.Component
{
    render() {
        let cards = [];
        for (let i = 0; i < deckAllF.length; i++) {
            cards.push(<Card key={i} id={i} ch={this.props.cHeight} deg={"rotate(" + this.props.imgDeg + "deg)"} cimg={`../images/${this.cardType(i)}.jpg`} dt={this.props.dTop + i * this.props.dAdd} htext={deckAllF[i].h} ptext={deckAllF[i].p}/>);
        }
        return <div className="content_con">
            {cards}
        </div>
    }
    cardType(i){
        if(i % 4 == 0){
            return "spader";
        }
        else if(i % 4 == 1){
            return "jater";
        }
        else if(i % 4 == 2){
            return "klover";
        }
        else if(i % 4 == 3){
            return "ruter";
        }
    }
}

