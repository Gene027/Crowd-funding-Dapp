import React from "react"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import '../homepage.css'

export default function Card({ item, attach, connected, canDonate = false, donate }) {
    const [amount, setAmount] = useState('')
    const [donating, setDonating] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    return (
        error ?
        <h5>There was an error.Please close modal and try again</h5>
        :
        success ?
        <h5>Successfully donated {amount} algos.</h5>
        :
        <div className="campaign-preview">
            {
                !connected && 
                <div className="important-message">Connect Wallet to see updated details</div>
            }
            <div className="cover">
                <img className="cover-img" src={item.img ? item.img : '/start-campaign-3.jpg'} alt="" />
            </div>

            <div className="campaign-descriptions">
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>

            <div className="campaign-stats">
                <div className="cost"><span>{item.expected} ALG</span></div>
                <div className="progress">
                    <span className="progress-label">Progress: </span>
                    <div className="bar-container">
                        <div className="progress-bar" style={{
                            height: "80%",
                            width: `${(item.progress/item.expected) * 100}%`,
                            backgroundColor: "green",
                            transition: "width 0.5s",
                            borderRadius: "8px",
                        }}></div>
                    </div>
                    <span className="progress-percent">{Math.floor((item.progress/item.expected) * 100)}%</span>
                </div>
            </div>
            <br />

            {
                canDonate &&
                <div style={{ padding: '0px 10px', display: 'flex', gap: '10px', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                    <h5>Amount</h5>
                    <input 
                        style={{height: '25px'}}
                        type={'text'} 
                        onChange={e => setAmount(e.target.value)} />
                </div>
            }

            <div className="donate">
                <button 
                    disabled={ canDonate && amount === ''}
                    className='donate-btn' 
                    onClick={async () => {
                        if(canDonate){
                            setDonating(true)
                            const res = await donate(amount)
                            setDonating(false)
                            if(res?.error){
                                setError(true)
                            }
                            else {
                                setSuccess(true)
                            }
                        }
                        else{
                            attach()
                        }
                    }}
                >Donate
                {
                    donating &&
                    <FaSpinner className="spin"/>
                }
                </button>
            </div>
        </div>
    )
}