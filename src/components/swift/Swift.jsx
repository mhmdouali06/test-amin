import React from 'react'
import './Swift.scss'
import img1 from '../../assets/swift/swift2.png'
import img2 from '../../assets/swift/swift1.webp'
const Swift = () => {
  return (
    <div className='swift__section'>
        <div className="swift__container container">
            <div className="swift__left">
                <div className="swift__title">
                    <h2>KM Projets Joins Swift Partner Programme as a Value-Added Services Enabler</h2>
                </div>
                <div className="swift__description">
                    <p>Membership allows KM Projets’ customers to benefit directly from Swift’s range of API solutions, directly 
                        through its Openpay Platform. <br/>The Swift API Platform provides platform partners with APIs across a wide array of product and services. These include Swift’s payments solutions such as Swift GPI for end-to-end tracking; reference data; Business Intelligence; notification services; Payment Pre-validation; transaction management; compliance; and trade finance. 
                    </p>
                </div>
                <img src={img1} alt="" />
            </div>
            <div className="swift__right">
                <img src={img2} alt="swift event" />
            </div>
        </div>
    </div>
  )
}

export default Swift