import React from 'react'
import './Solutions.scss'
import swift from '../../assets/solution/swift-logo.png'
import mango from '../../assets/solution/OIP.png'

const Solutions = () => {
  return (

    <div className='solution__section'>
        <div className="solution__container container">
            <h2 className='solution__title'>KM, Editeur de solutions et Centre de services technologique, au service de la transformation et la création de la valeur sur le long terme.</h2>
            <div className="solution__top">
                <div className="unit">
                    <p className='first__par'>2018</p>
                    <p className='second__par '>Année de démarrage</p>
                </div>
                <div className="unit">
                    <p className='first__par'>3</p>
                    <p className='second__par '>Business Units</p>
                </div>
                <div className="unit">
                    <p className='first__par'>Partenaires</p>
                    <img src={swift} alt="swift" />
                    <img src={mango} alt="MongoDB" />
                </div>
            </div>
            <div className="solution__btm">
                <div class="e-card playing">
                    <div class="image"></div>

                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>


                    <div class="infotop">
                    Partenaire privilégié des multinationales et institutions financières…

                    </div>
                </div>
                <div class="e-card playing">
                    <div class="image"></div>

                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>


                    <div class="infotop">
                    Partenaire privilégié des multinationales et institutions financières…

                    </div>
                </div>
                <div class="e-card playing">
                    <div class="image"></div>

                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>


                    <div class="infotop">
                    Partenaire privilégié des multinationales et institutions financières…

                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}
export default Solutions



    // <div className='solution__section'>
    //     <div className="solution__container">
    //         <h2>KM, Editeur de solutions et Centre de services technologique, au service de la transformation et la création de la valeur sur le long terme.</h2>
    //         <div className="solution__left">
    //             <ul>
    //                 <li>Nous sommes un acteur de référence du secteur financier, avec une connaissance des
    //                 tendances de la transformation des paiements à l’international.</li>
    //                 <li>Partenaire privilégié des multinationales et institutions financières…</li>
    //                 <li>Nous combinons perspective stratégique, expertise industrielle et compétences de pointes
    //                 sur la technologie et le Banking.</li>
    //                 <li>Nous mettons à la disposition de nos clients des solutions technologiques adéquates aux
    //                 enjeux d'implémentation et de mise en œuvre.</li>
    //             </ul>
    //         </div>
    //         <div className="solution__right">
    //             <div class="images__container">
    //                 <div class="img1">
    //                     <img src={cercle} alt="" />
    //                     <span class="text">2018 <br/> <span>Année de démarrage</span> </span>
    //                 </div>
    //                 <div class="img2">
    //                     <img src={cercle} alt="" />
    //                     <span class="text">+50 <br/> <span>Projets réalisés</span></span>
    //                 </div>
    //                 <div class="img3">
    //                     <img src={cercle} alt="" />
    //                     <span class="text">3 <br/> <span>Business Units</span> </span>
    //                 </div>
    //             </div>  
    //         </div>
    //     </div>
    // </div>


