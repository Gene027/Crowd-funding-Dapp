import { useState } from 'react'
import './index.css'
import './homepage.css'
import data from "./components/data";
import Card from "./components/Card";
import ConnectAccount from "./ConnectAccount";


export function HomePage ({ deploy, attach, expected, connect}) {
  const [deployer, setDeployer] = useState(false)

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
        attach={attach}
      />
    )
  })
  return (
    <>
      {
        deployer ?
          <div className='expectation'>
            <div className='section'>
              <h2>PROJECT COST</h2>
              <h3>Amount</h3>
              <input
                className='target-amount'
                type={'number'}
                min={'0'}
                value={expected}
                // onChange={e => setExpected(e.target.value)}
              />
              <br />
              <button className='button' onClick={() => deploy()}>Submit</button>
            </div>

          </div>

          :
          //HOME
          <div className='home'>
            <div className='header'>
              <div className='left-section'>
                <h1>DreamFunds</h1>
                <img className='dreamfund-logo' src="dollar.jpg" alt="" />
              </div>

              <div className='right-section'>
              {/* onClick={setView('About')}    use side effects*/}
                How it works
              </div>
            </div>

            <div className='start-campaign'>
              <div>Bringing your dream project to actualisation</div>
              <div className='start-campaign-btn-container'>
                <button className='start-a-campaign' onClick={() => setDeployer(true)}> Start a Campaign</button>
              </div>
            </div>
            <hr style={{
              height: "1px",
              width: "100%",
            }} />
            <div className='campaign-grid'> {cards} </div>

            <div className='footer'>
              &copy; 2023 dreamfunds. inc. All rights reserved
            </div>
          </div>
      }
    </>
  )
}