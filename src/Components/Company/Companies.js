import React, { Component } from 'react'
import axios from 'axios'
import { Icon } from 'semantic-ui-react'
import './Company.scss'

import Modal from "../HOC/Modal";
import AddCompany from './AddCompany'
import CompanyMini from './CompanyMini'



class Companies extends Component {
    state = { 
        companyList: [],
        addModalToggle: false,
        optionsToggle: false,
     }
     async componentDidMount(){
        this.updateList()
     }
     updateList = async () => {
        let {data: companyList} = await axios.get('/api/companies')
        this.setState({
            companyList
        })
     }
     openOptionsMenu = (e) => {
        const {optionsToggle} = this.state
        this.setState({optionsToggle: !optionsToggle})
        e.stopPropagation()
      }
    render() { 
        const {companyList, addModalToggle, optionsToggle} = this.state
        console.log(companyList)
        const displayCompanies = companyList.map((company) => (
            <CompanyMini key={company.company_id} {...company} />
        ))
        return ( 
      <div className='companies' onClick={(e) => this.setState({optionsToggle: false})}>
            
        <div className='options-menu'>
            <Icon circular inverted name='plus' size='large' color='green'onClick={() => this.setState({addModalToggle: true})}/>
            <Icon circular inverted className='options-button' name='options' size='large' color='grey' onClick={(e) => this.openOptionsMenu(e)}/>
            { optionsToggle &&
            <div onClick={(e) => e.stopPropagation()} className="menu-choices-wrapper">
                <div className="menu-choices">
                    <span className="left-right"></span>
                    <span className="left-right left-right-border"></span>
                </div>
            </div>
        }
        </div>
        <Modal open={addModalToggle} render={(close) => <AddCompany updateList={this.updateList} close={close}/>}
        closeModalFunc={() => this.setState({addModalToggle: false})} />
        <div className='company-mini-wrapper'>
            {displayCompanies}
        </div>    
        </div> 
        );
    }
}
 
export default Companies;