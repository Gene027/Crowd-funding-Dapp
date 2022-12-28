import React from "react"
import './homepage.css'

export default function Card({item, attach}) {
    return (
        <div className="campaign-preview">
            <div className="cover">
                <img className="cover-img" src={item.img} alt="" />
            </div>

            <div className="campaign-descriptions">
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>

            <div className="campaign-stats">
                <div className="cost">{item.cost}</div>
                <div className="num-donor">{item.donorCount}</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                    <div className="progress-percent">{item.progress}</div>
                </div>
            </div>

            <div className="donate-btn">
            <button className='button' onClick={() => attach()}>Donate</button>
            </div>
        </div>
    )
}