import React from "react"
import '../homepage.css'

export default function Card({ item, attach }) {
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
                <div className="num-donor"> Donors: {item.donorCount}</div>
                <div className="progress">
                    <span className="progress-label">Progress: </span>
                    <div className="bar-container">
                        <div className="progress-bar" style={{
                            height: "80%",
                            width: `${item.progress}%`,
                            backgroundColor: "green",
                            transition: "width 0.5s",
                            borderRadius: "8px",
                        }}></div>
                    </div>
                    <span className="progress-percent">{item.progress}%</span>
                </div>
            </div>
            <br />

            <div className="donate">
                <button className='donate-btn' onClick={() => attach()}>Donate</button>
            </div>
        </div>
    )
}