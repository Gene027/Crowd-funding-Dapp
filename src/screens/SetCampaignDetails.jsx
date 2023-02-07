import './index.css'
import './homepage.css'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export function SetCampaignDetails({deploy, goBack}){
    const [expected, setExpected] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async () => {
      const address = await deploy(name, description, expected, image)
      console.log(address)
      goBack()
    }

    return(
        <div className='expectation'>
            <div className='section'>
              <div className='back-button'><FaArrowLeft onClick={() => goBack()}/></div>
              <h2>CAMPAIGN DETAILS</h2>
              <div className='form-row'>
                <h3>Name</h3>
                <input
                    type={'text'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    min={0}
                />
              </div>
              
              <div className='form-row'>
                <h3>Description</h3>
                <input
                    type={'text'}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    min={0}
                />
              </div>

              <div className='form-row'>
                <h3>Image URL</h3>
                <input
                    type={'text'}
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    min={0}
                />
              </div>

              <div className='form-row'>
                <h3> Target Amount</h3>
                <input
                    type={'number'}
                    value={expected}
                    onChange={e => setExpected(e.target.value)}
                    min={0}
                />
              </div>

              <br />
              <button 
                className='button'
                disabled={ name === '' || description === '' || expected === '' }
                onClick={handleSubmit}
                >Deploy Campaign</button>
            </div>

          </div>
    )
}