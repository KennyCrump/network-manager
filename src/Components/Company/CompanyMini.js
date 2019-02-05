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
                <div>
                    <Icon name='linkedin' size='big' color='blue'/>
                </div>
            </div>
         );
    }
}
 
export default CompanyMini;