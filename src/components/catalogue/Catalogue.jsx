import React from 'react'
import './Catalogue.scss'
import img1 from '../../assets/catalogue/p1.png'
import img2 from '../../assets/catalogue/p2.png'
import img3 from '../../assets/catalogue/p3.png'
import img4 from '../../assets/catalogue/p4.png'
import img5 from '../../assets/catalogue/p5.png'

const Catalogue = () => {
  return (
    <div className='cat__section'>
        <div className="cat__container container">
            <div className="cat__title">Un catalogue de solutions riches pour accompagner la modernisation des SI paiements et crédits.</div>
              <div className="cat__cards">
                  <div className="cat__content">
                      <div className="card_img">
                          <img src={img1} alt="" />
                          <p>Openpay Orchestrator</p>
                      </div>
                      <div className="custom-card-credits">
                          <div className="custom-content-credits">
                              <p className="custom-para-credits">
                                Permet de gérer la distribution qui centralise l’ensemble  des fonctions de contrôle, de transformation et d’orchestration des  différentes familles de paiement et permet à la banque de proposer  une vision complète et 360 des opérations clients.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="cat__content">
                      <div className="card_img">
                          <img src={img2} alt="" />
                          <p>Openpay Swift services</p>
                      </div>
                      <div className="custom-card-credits">
                          <div className="custom-content-credits">
                              <p className="custom-para-credits">
                              Permet la gestion et le pilotage des services SWIFT, notamment Swift Gpi, Go, Prévalidation et transformation ISO20022, BUNA Cross-border clearing en temps réel tout en garantissant une Performance de traitement et de restitution.

                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="cat__content">
                      <div className="card_img">
                          <img src={img3} alt="" />
                          <p>Openpay Instant</p>
                      </div>
                      <div className="custom-card-credits">
                          <div className="custom-content-credits">
                              <p className="custom-para-credits">
                              Permet d’industrialiser la gestion et le traitement des paiements en temps réel dans une architecture découplée  entre la distribution et la production ainsi que l’ouverture de cette même architecture vers des partenaires externes à l’avenir.

                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="cat__content">
                      <div className="card_img">
                          <img src={img4} alt="" />
                          <p>Openpay Payment Hub</p>
                      </div>
                      <div className="custom-card-credits">
                          <div className="custom-content-credits">
                              <p className="custom-para-credits">
                              Plateforme unifiée "Multi-usines«. Prend en charge tous les types de paiements transfrontaliers et domestiques, assure le processing des paiements end-to-end, couvrant l'ensemble du cycle de vie des paiements
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="cat__content">
                      <div className="card_img">
                          <img src={img5} alt="" />
                          <p>Openpay Tamwil</p>
                      </div>
                      <div className="custom-card-credits">
                          <div className="custom-content-credits">
                              <p className="custom-para-credits">
                              Solution qui vient en réponse aux problématiques concrètes des banques dans le pilotage de leurs processus de crédits conventionnés. À travers l’automatisation des processus liés aux crédits conventionnés, qu'ils soient garantis, co-financés ou bonifiés par les partenaires
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Catalogue