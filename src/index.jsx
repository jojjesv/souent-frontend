import React from "react";
import ReactDOM from "react-dom";
import DefaultRouter from './DefaultRouter'
import './styles.scss';
import './forms.scss';
import './fixed_header.scss';
import Notification from 'jojje-react-notification'

ReactDOM.render((
  <>
    <DefaultRouter />
    <Notification shared />
  </>
), document.getElementById("main"));