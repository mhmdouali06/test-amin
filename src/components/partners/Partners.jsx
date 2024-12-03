import React from "react";
import associe1 from "../../assets/partners/mehdi.jpg";
import associe2 from "../../assets/partners/fadoua.jpg";
import "./Partners.scss";

const Partners = () => {
  return (
    <div className="partners__section">
      <div className="partners__container container">

      <div className="partners__items items">
          <div className="minip">
            <div className="mg">
              <div className="clr"></div>
              <div className="group">
                <span>général Directeur</span>
              </div>
            </div>
            <div
              className="av"
              style={{ backgroundImage: `url(${associe1})` }}
            ></div>

            <div className="info">
              <h6>Mr. Mehdi BELAKOUL</h6>
            </div>
            <a
              className="plot"
              title="plot with jinkyu"
              href="https://www.linkedin.com/in/mehdi-belakoul-81504b1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </a>
          </div>

          <div className="minip" style={{ marginTop: 80 }}>
            <div className="mg">
              <div className="clr"></div>
              <div className="group">
                <span>associé Directeur</span>
              </div>
            </div>
            <div
              className="av"
              style={{ backgroundImage: `url(${associe2})` }}
            ></div>

            <div className="info">
              <h6>Mme. Fadoua LAAROUSSI</h6>
            </div>
            <a
              className="plot"
              title="plot with jinkyu"
              href="https://www.linkedin.com/in/fadoua-l-25966531"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </div>
        <div
          className="d-flex align-items-start flex-column left-content"
          style={{ height: 250 }}
        >
          <div className="mb-auto p-2 partner-title">
            <h4>Nos associés</h4>
          </div>
          <div className="p-2 desc">
            KM Projets est aujourd'hui un acteur multidisciplinaire et
            <br />
            partenaire privilégié des acteurs économiques, toujours au <br />
            service de leur croissance…Présent depuis 2008, KM Projets <br />
            ne cesse d’améliorer notre offre de services qui devient <br />
            intégrée ainsi que la qualité de nos interventions.
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Partners;
