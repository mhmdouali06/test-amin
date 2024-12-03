import React from 'react';
import './Business.scss';
import img1 from '../../assets/business/bus1.png';
import img2 from '../../assets/business/bus2.png';
import img3 from '../../assets/business/bus3.png';

const Business = () => {
  return (
    <div className="business__section">
      <div className="business__container container">
        <h2 className="business__title">
          3 Business Units complémentaires pour adresser les besoins structurants de nos clients – Apporter le meilleur de la Tech et du bancaire.
        </h2>

       <div className="bus_content">
  <div className="business__card">
    <div className="img-container">
      <img src={img1} alt="Paiements" />
    </div>
    <strong>Paiements</strong>
    <div className="business__card__body">
      Nos solutions permettent aux institutions financières d'offrir des services de paiement Best in class. Depuis les canaux clients jusqu'à la communication interbancaire en passant par l'orchestration et les traitements Usines de paiements.
    </div>
  </div>
  <div className="business__card">
    <div className="img-container">
      <img src={img2} alt="Crédits" />
    </div>
    <strong>Crédits</strong>
    <div className="business__card__body">
      Nos solutions crédits offrent une large gamme de fonctions de gestion du processus des crédits conventionnés.
    </div>
  </div>
  <div className="business__card">
    <div className="img-container">
      <img src={img3} alt="Professional Services" />
    </div>
    <strong >Professional services</strong>
    <div className="business__card__body">
      Offrir aux acteurs de l’industrie financière des services de gestion de TMA et d’accompagnement pour maîtriser l’évolution de leur plateformes Swift.
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Business;
