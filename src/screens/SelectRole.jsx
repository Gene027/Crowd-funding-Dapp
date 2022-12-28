import { useState } from 'react'
import './index.css'
import './homepage.css'
import data from "./data";
import Card from "./Card";



export function SelectRole({deploy, attach, expected, setExpected}){
  const [ deployer, setDeployer ] = useState(false)

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
            attach={attach}
        />
    )
})   
  return(
    <>
      {
        deployer ?
          <div className='section'>
            <p>Set Target Amount</p>
            <input 
              type={'number'}
              value={expected}
              onChange={e => setExpected(e.target.value)}
            />
            <br />
            <button style={{width: '70%'}} className='button' onClick={() => deploy()}>Next</button>
          </div>
          :
          //HOME
          <div className='home'>
            <div className='header'>
              <div className='left-section'>
                <h1>DreamFunds</h1>
                <img className='dreamfund-logo' src="dollar.jpg" alt="" />
              </div>

              <div className='right-section' onClick={console.log("setView(views.ABOUT)")}>
                How it works
              </div>
            </div>

            <div className='start-campaign'>
              <div>Bringing your dream project to reality</div>
              <div className='start-campaign-btn-container'>
              <button className='start-a-campaign' onClick={() => setDeployer(true)}> Start a Campaign</button>
              </div>
             
            </div>

            <div className='campaign-grid'> {cards} </div>

            <div className='footer'>
            &copy; 2023 dreamfunds. inc. All rights reserved
            </div>
              
      
            {/* <div className='section'>
            <button className='button' onClick={() => setDeployer(true)}>Deploy Contract</button>
  
            <button className='button' onClick={() => attach()}>Donate</button>
            </div> */}
          </div>
      }
    </>
  )
}