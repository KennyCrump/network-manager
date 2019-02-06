import React, { Component } from 'react';
import { Icon } from "semantic-ui-react";

class CompanyMini extends Component {
    state = { 
        addConnectionModal: false
     }
    render() { 
        const {logo, company_id, company_name, description, linkedin, location, website } = this.props
        console.log(this.props)
        return ( 
            <div className="company-mini">
                <div className='company-title'>
                    {logo ? 
                        <img src={logo} alt="" className="mini-logo"/>
                        :
                        <Icon name="building outline" size="huge" inverted color='teal' bordered />
                    }
                    <h3>{company_name}</h3>
                    <p>{location}</p>
                    <div className='description-box'>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='flex-col-fs mid'>
                    <div className="flex-row-sb full">
                        <div className='flex-row-sb'>

                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <Icon name='linkedin' size='large' color='blue'/>
                                <p className="linkedin-link">LinkedIn</p>
                            </a>
                            <a href={website} target="_blank" rel="noopener noreferrer">
                                <Icon  name='desktop' size='' color='blue'/>
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="flex-row-sb">
                            <Icon  name='edit' size='' color='blue'/>
                            <Icon  name='trash alternate outline' size='' color='blue'/>

                        </div>
                    </div>
                </div>
                <div className='flex-col-st right'>
                    
                </div>
            </div>
         );
    }
}
 
export default CompanyMini;