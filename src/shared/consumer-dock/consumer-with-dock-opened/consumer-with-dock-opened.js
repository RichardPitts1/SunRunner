import './consumer-with-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../../buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from '../../buttons/mac-bar/twirl-button/twirl.svg';
import PreviousTemplatePic from '../../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../../buttons/mac-bar/menu-overflow/illuminati.svg';
import BackButtonPic from './images/back.svg';
import ForwardButtonPic from './images/forward.svg';
import SnakePic from './images/snake.svg';
import SearchBar from './images/SearchBar.png';

function ConsumerWithDockOpened() {
    function handleClick() {
    console.log('handleClick for consumer dock Called');
        // Routing logic to take you to the treeView
    }

    return (
        
        <div class="consumer-dock-panel-parent">
        <Link to="/Consumer">

        <div onClick={handleClick} className="consumer-panel2">
        <img className="search-bar-png3" src={SearchBar} alt="-" />
        <img className="back-button-svg" src={ BackButtonPic } alt="some" />
        <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
            <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
            <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
            <Link to="/BusinessWithDockOpened"><img className="twirl-svg" src={ TwirlPic } alt="some" /></Link>
            <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
            <img className="nav-svg" src={ NavPic } alt="some" />
            <img className="history-svg" src={ HistoryPic } alt="some" />
            <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
            <img className="snake-svg" src={ SnakePic } alt="some" />
        </div>
        </Link>
        </div>
    );
  }
  
  export default ConsumerWithDockOpened;
