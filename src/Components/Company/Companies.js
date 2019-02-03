import React, { Component } from 'react'
import axios from 'axios'

class Companies extends Component {
    state = { 
        companyList: []
     }
     async componentDidMount(){
        let {data: companyList} = await axios.get('/api/companies')
        this.setState({
            companyList
        })
     }
    render() { 
        const {companyList} = this.state
        console.log(companyList)
        const displayCompanies = companyList.map((company) => (
            <div key={company.company_id}>
                <p>{company.company_name}</p>
            </div>
        ))
        return ( 
            <>
            {displayCompanies}
            </> 
        );
    }
}
 
export default Companies;