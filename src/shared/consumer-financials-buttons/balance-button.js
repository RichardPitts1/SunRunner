import './balance-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function BalanceButton() {

    return (
        <div className="balance-button-parent">
        <button className="balance-button">Balance</button>
        </div>
    );
  }