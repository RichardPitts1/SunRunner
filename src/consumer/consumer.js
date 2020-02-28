import './consumer.css';
import React from 'react'
import consumer from '../images/ConsumerCAD2.png'; 
import TreeButton from '../shared/tree-button/tree';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';

function Consumer() {
    return (
        <div className="">
        <img className="consumer-image" src={ consumer } alt="text" />
        <ConsumerDock></ConsumerDock>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        </div>
    );
  }
  
  export default Consumer;