import { useState } from 'react'
import './index.css'
import './homepage.css'
import { SetCampaignDetails } from './SetCampaignDetails';

export function HomePage ({ connected, connect, deploy }) {
  const [deployer, setDeployer] = useState(false)

  return (
    <>
      {
        deployer ?
          <SetCampaignDetails deploy={deploy} goBack={() => setDeployer(false)}/>
          :
          <>
            <div className='start-campaign'>
              <div className='title'>Bringing your dream project to actualisation</div>
              <div className='start-campaign-btn-container'>
                <button 
                  className='start-campaign-btn'
                  onClick={async () => {
                    if(connected){
                      setDeployer(true)
                      // setView(views.CROWD_FUND)
                    }
                    else {
                      connect()
                        .then(result => {
                          if(result === 'success'){
                            setDeployer(true)
                          }
                        })
                    }
                  }}
                  >Start a Campaign</button>
                </div>
            </div>
          </>
      }
    </>
  )
}