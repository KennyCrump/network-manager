import React from 'react'
import { Icon } from 'semantic-ui-react'

const ConnectionMini = (props) => {
    const {name, company, last_contacted} = props
    return (
    <div className='connection-mini'>
    <div className='name-display'>
    <Icon size='huge' name='user' />
    <div>
        <h3>{name}</h3>
        <h5>{company}</h5>
        </div>
    </div>
    <div className="info-display">
        <p>Last Contacted: {last_contacted || `You haven't contacted this person yet.`}</p>
    </div>
    </div> 
    )
}

export default ConnectionMini