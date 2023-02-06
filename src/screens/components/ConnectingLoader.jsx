import './index.css'
import { FaSpinner } from 'react-icons/fa'

export function ConnectingLoader(){

    return(
        <div className='wrapper'>
            <div className='overlay'>
                <FaSpinner className='spinner-icon'/>
            </div>
        </div>
    )
}