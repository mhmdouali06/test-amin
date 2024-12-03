import React from 'react';
import './Openpay.scss';
import img1 from '../../assets/openPay/Image1.png';
import img2 from '../../assets/openPay/Image2.png';
import img3 from '../../assets/openPay/Image3.png';
import img4 from '../../assets/openPay/Image4.png';
import img5 from '../../assets/openPay/Image5.png';

const Openpay = () => {
  const cards = [
    { img: img1, description: "Cross-border payments" },
    { img: img2, description: "Domestic payments" },
    { img: img3, description: "High value TGS" },
    { img: img4, description: "Instant payments" },
    { img: img5, description: "Domestic collection" },
  ];

  return (
    <div className='openpay__section'>
      <div className="openpay__container container">
        <div className="openpay__title">
          <h4>Openpay Enterprise Payments Platform</h4>
          <p>A2A unified “Multi-factory” platform</p>
        </div>
        <div className="openpay__description">
          Openpay is a federated, micro-serviced platform that supports all types of cross-border and domestic payments. Openpay provides end-to-end A2A payment processing, integration, and orchestration, covering the entire payments lifecycle, from channel-level capture to clearing.
        </div>
        <div className="openpay__cards">
          {cards.map((card, index) => (
            <div className="opay__card" key={index}>
              <div className="content">
                <div className="opay__img">
                  <img src={card.img} alt={`Card ${index + 1}`} />
                </div>
                <p className="para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Openpay;
