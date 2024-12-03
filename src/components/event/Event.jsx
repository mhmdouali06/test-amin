import React from 'react'
import './Event.scss'
import img1 from '../../assets/event/e1.png'
import img2 from '../../assets/event/e2.png'

const Event = () => {
  return (
    <div className='event__section'>
        <div className="event__container container">
            <div className="event__left">
                <div className="event__title">
                    <h2>Participer à l’adoption et la généralisation des normes et standards de paiements</h2>
                </div>
                <img src={img1} alt="Evénement" />
            </div>
            <div className="event__right">
            <img src={img2} alt="Evenement" />
            <p>Organisation de conférences annuelles avec la participation des institutions financières pour traiter les sujets d’actualité du monde des paiements.</p>
            </div>
        </div>
    </div>
  )
}

export default Event