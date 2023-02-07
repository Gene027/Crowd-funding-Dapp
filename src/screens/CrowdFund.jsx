import './crowdfund.css'

export function CrowdFund({address, expected, progress, donors, title, description, img}){
  
  return(
    <div className='crowdfund-card'>
        <div className='crowdfund-left-section'>
            <div title='Contract Addresss' className='crowdfund-contract-address'>{address}</div>
            <div>Title: <span className='detail-text'>{title}</span></div>
            <div>Description: <span className='detail-text'>{description}</span></div>
            <div>Expected: <span className='detail-text'>{expected} ALG</span></div>
            <div className='crowdfund-progress'>
              Progress:
              <div className='progress-meter'>
                <div style={{width: `${(progress/expected) * 100}%`}}></div>
              </div>
              {Math.floor((progress/expected) * 100)}%
            </div>
            <table className='campaign-donors'>
              <thead>
                <tr>
                  <td>DONOR</td>
                  <td>AMOUNT (ALG)</td>
                </tr>
              </thead>
              <tbody>
                {
                  donors.length === 0 ?
                  <tr>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  :
                  donors.map((donor, index) => (
                    <tr key={index}>
                      <td>{donor.address}</td>
                      <td>{donor.donation}</td>
                    </tr>
                  ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <td>TOTAL</td>
                  <td>{progress}</td>
                </tr>
              </tfoot>
            </table>
        </div>
        <img className='crowdfund-right-section' src={img ? img : '/start-campaign.jpg'}/>
      </div>
  )
}