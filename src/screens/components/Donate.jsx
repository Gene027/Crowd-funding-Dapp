import Card from './Card'
import { AiOutlineClose } from 'react-icons/ai'
import './index.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { API } from '../../utils/api'

export function Donate({ address, attach, onClose, campaignData, connected, donation}){
    const [loading, setLoading] = useState(false)
    const [contract, setContract] = useState()
    const [parsedData, setParsedData] = useState({...campaignData})
    const [error, setError] = useState("")

    const { updateCampaign } = API()

    const attachToContract = () => {
        setLoading(true)
        attach(campaignData.address)
            .then(result => {
                if(result.error){
                    if(result.error === 'not deployer'){
                        setError("You can't connect to this campaign because you deployed it.")
                    }
                    else{
                        setError('There was an error.Please close modal and try again')
                    }
                    setLoading(false)
                }
                else {
                    console.log(result)
                    setContract(result.contract)
                    setParsedData(p => ({
                        ...p,
                        progress: result.progress,
                        expected: result.expected
                    }))
                    setLoading(false)
                }
            })
    }

    useEffect(() => {
        setParsedData({...campaignData})
        setError("")
        if(donation){
            attachToContract()
        }
    }, [campaignData, donation])

    return(
        donation &&
        <div className='wrapper'>
            <div className='overlay'>
                <div className='modal-body'>
                    <AiOutlineClose onClick={onClose} className='close-icon'/>
                    {  
                        error ?
                        <h5>{error}</h5>
                        :
                        loading ?
                        <>
                            <h5>Connecting to smart contract..</h5>
                            <FaSpinner className='spin'/>
                        </>
                        :
                        <Card
                            item={parsedData}
                            connected={connected}
                            canDonate={true}
                            donate={async (donation) => {
                                try {
                                    await contract.apis.Bob.donate(donation)
                                    updateCampaign(parsedData.address, {
                                        ...parsedData,
                                        progress: parseInt(parsedData.progress) + parseInt(donation),
                                        donors: [
                                            ...parsedData.donors,
                                            { address, donation}
                                        ]
                                    })
                                    return { success: 'kewl'}
                                  } catch (error) {
                                    console.log(error)
                                    setLoading(false)
                                    return { error: 'kewl'}
                                  }
                            }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}