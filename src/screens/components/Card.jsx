import React from "react"
import '../homepage.css'

export default function Card({item, attach}) {
    return (
        <div className="campaign-preview">
            <div className="cover">
                <img className="cover-img" src={item.img} alt="" />
            </div>

            <div className="campaign-descriptions">
                <p1>{item.title}</p1>
                <p>{item.description}</p>
            </div>

            <div className="campaign-stats">
                <div className="cost"> Cost: <span>${item.cost}</span></div>
                <div className="num-donor">{item.donorCount}</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                    <div className="progress-percent">{item.progress}</div>
                </div>
            </div>

            <div className="donate">
            <button className='donate-btn' onClick={() => attach()}>Donate</button>
            </div>
        </div>
    )
}